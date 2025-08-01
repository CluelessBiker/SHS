import { useState } from 'react';
// import axios, { AxiosResponse } from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { SetCurrentUserContext } from '../context/CurrentUserContext';
import FormInput from '../components/molecules/FormInput';
// import { User } from '../types/User';

const LoginPage = () => {
  // const navigate = useNavigate();
  // const setCurrentUser = useContext(SetCurrentUserContext);

  const [login, setLogin] = useState<{ username: string; password: string }>({
    username: '',
    password: '',
  });

  const onChange = (
    fieldName: string,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const value = event?.target.value;
    setLogin(oldValue => ({
      ...oldValue,
      [fieldName]: value,
    }));
  };

  // const handleLogin = async (event: any) => {
  //   event.preventDefault();
  //   try {
  //     const response: AxiosResponse<User> = await axios.post(
  //       '/dj-rest-auth/login/',
  //       login,
  //     );
  //     const data: User = response.data;
  //     setCurrentUser(data.user);
  //     navigate('/');
  //   } catch (error: any) {
  //     if (error.response?.status !== 401) {
  //       setErrors(error.response?.data);
  //     }
  //   }
  // };

  // const handleError = (data: any) => {
  //   if (!errors) return '';
  //   const found = errors[data];
  //   return found ? found[0] : undefined;
  // };

  return (
    <div>
      <div>
        <FormInput
          label={'username'}
          value={login.username}
          onChange={value => onChange('username', value)}
        />
        <FormInput
          type={'password'}
          label={'password'}
          value={login.password}
          onChange={value => onChange('password', value)}
        />
      </div>

      {/* <button onClick={handleLogin}>login</button> */}

      {/*{handleError('non_field_errors') !== '' ||*/}
      {/*  (!handleError('non_field_errors') && <p>{handleError('non_field_errors')}</p>)}*/}
    </div>
  );
};

export default LoginPage;
