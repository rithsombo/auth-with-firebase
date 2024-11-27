import React, { useContext } from "react";
import Form from "../../components/common-form/Form";
import { LoginFormControls } from "../../config/inedx";
import { AuthContext } from "../../context/Index";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    login,
    setLogin,
    registerWithFirebase,
    user,
    loading,
    loginWithFirebase,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  function handleLogin(e) {
    e.preventDefault();
    loginWithFirebase().then((result) => {
      if (result) navigate("/profile");
    });
  }
  if (loading) return <h1>Loading! Please Wait</h1>;
  if (user) navigate("/profile");
  return (
    <div className="w-full max-w-sm mx-auto rounded-lg shadow-md">
      <div className="px-6 py-5">
        <h1>Welcome Back</h1>
        <p>Login</p>
        <Form
          formControls={LoginFormControls}
          formData={login}
          setFormData={setLogin}
          buttonText={"Login"}
          onSubmit={handleLogin}
        />
      </div>
    </div>
  );
};

export default Login;
