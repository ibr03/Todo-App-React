import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthContext';
import { mockUser } from '../../mockData';
import '../../App.css';

interface LoginFormInputs {
  username: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data: LoginFormInputs) => {
    const { username, password } = data;

    if (username === mockUser.username && password === mockUser.password) {
      login(username, password);
      navigate('/dashboard');
    }
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input {...register('username', { required: true })} className="login-input" id="username" type="text" />
          {errors.username && <span>Username is required</span>}
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input {...register('password', { required: true })} className="login-input" id="password" type="password" />
          {errors.password && <span>Password is required</span>}
        </div>
        <button className="login-button" type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
