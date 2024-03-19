import { useState, useContext } from 'react';
import axios from 'axios';
import { Box, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { SetCurrentUserContext } from '../context/CurrentUserContext.tsx';

const LoginPage = () => {
  const navigate = useNavigate();
  const setCurrentUser = useContext(SetCurrentUserContext);

  const [errors, setErrors] = useState<any>({});
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

  const handleLogin = async (event: any) => {
    event.preventDefault();
    try {
      const { data } = axios.post('/dj-rest-auth/login/', login);
      setCurrentUser(data.user);
      navigate('/');
    } catch (error: any) {
      setErrors(error.response?.data);
    }
  };

  // const handleError = (data: any) => {
  //   if (!errors) return '';
  //   const found = errors[data].map((it: string) => it);
  //   return found ? found : '';
  // };

  return (
    <Box>
      <TextField
        type="text"
        label={'username'}
        variant={'outlined'}
        id={'outlined-basic'}
        value={login.username}
        // error={handleError('username')}
        aria-label={'enter login username'}
        // helperText={handleError('username')}
        onChange={value => onChange('username', value)}
      />
      <TextField
        type={'password'}
        label="password"
        variant={'outlined'}
        id={'outlined-basic'}
        value={login.password}
        // error={handleError('password')}
        aria-label={'enter login password'}
        // helperText={handleError('password')}
        onChange={value => onChange('password', value)}
      />
      <button onClick={handleLogin}>login</button>

      {/*{handleError('non_field_errors') !== '' ||*/}
      {/*  (!handleError('non_field_errors') && <p>{handleError('non_field_errors')}</p>)}*/}
    </Box>
  );
};

export default LoginPage;
