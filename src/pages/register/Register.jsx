import React, { useContext } from "react";
import Form from "../../components/common-form/Form";
import { AuthContext } from "../../context/Index";
import { registerFormControls } from "../../config/inedx";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register, setRegister, registerWithFirebase, user, loading } =
    useContext(AuthContext);
  const navigate = useNavigate();
  function handleRegisterSubmit(e) {
    e.preventDefault();
    registerWithFirebase()
      .then((result) => {
        if (result.user) {
          updateProfile(result.user, {
            displayName: register.name,
          });

          navigate("/profile");
        }
      })
      .catch((error) => console.log(error));
  }
  if (loading) return <h1>Loading! Please Wait</h1>;
  if (user) navigate("/profile");

  return (
    <div className="w-full max-w-sm mx-auto rounded-lg shadow-md">
      <div className="px-6 py-5">
        <h3>Welcome Back</h3>
        <p>Register Page</p>
        <Form
          formControls={registerFormControls}
          formData={register}
          setFormData={setRegister}
          onSubmit={handleRegisterSubmit}
          buttonText={"Save"}
        />
      </div>
    </div>
  );
};

export default Register;
