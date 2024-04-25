import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import axios from 'axios';
import { axiosReq, axiosRes } from '../api/axiosDefaults';
import { useNavigate } from 'react-router-dom';

export const CurrentUserContext = createContext<null | any>(null);
export const SetCurrentUserContext = createContext<any | null>(null);

export const useCurrentUser = () => useContext(CurrentUserContext);
export const useSetCurrentUser = () => useContext(SetCurrentUserContext);

type Props = {
  children: ReactNode;
};

export const CurrentUserProvider: FC<Props> = ({ children }) => {
  const navigation = useNavigate();

  const [currentUser, setCurrentUser] = useState(null);

  const handleMount = async () => {
    try {
      const { data } = await axiosRes.get('dj-rest-auth/user/');
      setCurrentUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

  /**
   * Check validity of access/refresh tokens
   */
  useMemo(() => {
    axiosReq.interceptors.request.use(
      async config => {
        try {
          await axios.post('/dj-rest-auth/token/refresh/');
        } catch (error) {
          setCurrentUser(prevCurrentUser => {
            if (prevCurrentUser) {
              navigation('/login');
            }
            return null;
          });
          return config;
        }
        return config;
      },
      error => {
        return Promise.reject(error);
      },
    );

    axiosRes.interceptors.response.use(
      response => response,
      async error => {
        if (error.response?.status === 401) {
          try {
            await axios.post('/dj-rest-auth/token/refresh/');
          } catch (error) {
            setCurrentUser(prevCurrentUser => {
              if (prevCurrentUser) {
                navigation('/login');
              }
              return null;
            });
          }
          return axios(error.config);
        }
        return Promise.reject(error);
      },
    );
  }, [history]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        {children}
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
};
