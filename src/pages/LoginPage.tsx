import { Box, TextField } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

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
      await axios.post(
        'https://shs-drf-414bc8b321a8.herokuapp.com/dj-rest-auth/login/',
        login,
      );
      //   await axios.post('/dj-rest-auth/login/', login);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <TextField
        type="text"
        label={'username'}
        variant={'outlined'}
        id={'outlined-basic'}
        value={login.username}
        aria-label={'enter login username'}
        onChange={value => onChange('username', value)}
      />
      <TextField
        type={'password'}
        label="password"
        variant={'outlined'}
        id={'outlined-basic'}
        value={login.password}
        aria-label={'enter login password'}
        onChange={value => onChange('password', value)}
      />
      <button onClick={handleLogin}>login</button>
    </Box>
  );
};

export default LoginPage;
