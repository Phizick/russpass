import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    setUsername,
    setPassword,
    setModalActive
} from "../../service/slice/authSlice";
import styled from 'styled-components';

const Prompt = styled.p`
  font-size: 18px;  
  color: #333;
  margin: 0 0 15px 0;
  width: 80%;  
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormField = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  background: #FFFFFF;
  border: 1px solid #D9D9D9;
  border-radius: 12px;
  font-size: 16px;
  width: 290px;
`;

const LoginButton = styled.button`
  background-color: #FFCF08;
  color: #fff;
  border-radius: 5px;
  padding: 12px 16px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  width: 290px;
  height: 48px;
  align-items: center;
  border: none;

  &:hover {
    opacity: .5;
  }
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 440px;
    
`

const LoginModal = () => {
    const [usernameInput, setUsernameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const dispatch = useDispatch();
    const [isOpened, setOpened] = useState(true)


    const handleUsernameChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setUsernameInput(event.currentTarget.value);
    };

    const handlePasswordChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPasswordInput(event.currentTarget.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(setUsername(usernameInput));
        dispatch(setPassword(passwordInput));
        dispatch(setModalActive(false));
        setUsernameInput("");
        setPasswordInput("");
    };

    useEffect(() => {
        const handleEscClose = (e: KeyboardEvent): void => {
            if (e.key === "Escape" && isOpened) {
                dispatch(setModalActive(false));
            }
        };

        if (isOpened) {
            document.addEventListener("keydown", handleEscClose);
        }

        return () => {
            document.removeEventListener("keydown", handleEscClose);
        };
    }, [dispatch, isOpened]);

    return (
        <LoginWrapper>
            <Prompt>Для использования сервиса необходимо авторизоваться. Для продолжения без авторизации нажмите Esc</Prompt>
            <LoginForm onSubmit={handleSubmit}>
                <FormField>
                    <Input
                        type="text"
                        id="username-input"
                        placeholder="Введите логин"
                        value={usernameInput}
                        onChange={handleUsernameChange}
                    />
                </FormField>
                <FormField>
                    <Input
                        type="password"
                        id="password-input"
                        placeholder="Введите пароль"
                        value={passwordInput}
                        onChange={handlePasswordChange}
                    />
                </FormField>
                <LoginButton type="submit">
                    Продолжить <span>{">"}</span>
                </LoginButton>
            </LoginForm>
        </LoginWrapper>
    );
};

export default LoginModal;