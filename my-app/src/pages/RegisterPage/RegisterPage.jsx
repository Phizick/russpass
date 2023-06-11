import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export const RegisterPage = () => {
  const token = window.localStorage.getItem('token')

  if(token) {
    return <Redirect to="/"/>
  }
  return (
    <div>
      <h1>Register Page</h1>
    </div>
  );
};
