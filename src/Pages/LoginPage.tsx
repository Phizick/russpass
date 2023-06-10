// import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
// import { useCookies } from 'react-cookie';
//
// function LoginPage() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [rememberMe, setRememberMe] = useState(false);
//     const [cookies, setCookie] = useCookies(['token']);
//     const history = useHistory();
//
//     const login = async (event) => {
//         event.preventDefault();
//
//
//         const response = await fetch('/api/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ username, password })
//         });
//
//
//         if (response.ok) {
//             const data = await response.json();
//             setCookie('token', data.token, { path: '/', expires: rememberMe ? new Date(Date.now() + 604800000) : null });
//             history.push('/home');
//         } else {
//             alert('Неверное имя пользователя или пароль');
//         }
//     }
//
//     useEffect(() => {
//
//         const token = cookies.token;
//         if (token && token !== 'undefined') {
//             fetch('/api/validate', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ token })
//             })
//                 .then(response => {
//                     if (response.ok) {
//                         history.push('/home');
//                     }
//                 });
//         }
//     }, []);
//
//     return (
//         <form onSubmit={login}>
//             <input type="text" placeholder="Имя пользователя" onChange={e => setUsername(e.target.value)} />
//             <input type="password" placeholder="Пароль" onChange={e => setPassword(e.target.value)} />
//             <label htmlFor="rememberMe">
//                 Запомнить меня
//                 <input type="checkbox" id="rememberMe" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
//             </label>
//             <button type="submit">Войти</button>
//         </form>
//     );
// }
//
// export default LoginPage;