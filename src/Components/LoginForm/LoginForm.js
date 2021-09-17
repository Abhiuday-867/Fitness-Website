import classes from "./LoginForm.Module.css";
import { useRef } from "react";
import { loginActions } from "../../Store/Index";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const inputEmail = useRef();
  const inputPassword = useRef();

  const dispatch = useDispatch();
  const loginHandler = () => {
    dispatch(loginActions.LoginHandler());
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = inputEmail.current.value;
    const enteredPassword = inputPassword.current.value;

    if (enteredEmail.includes("@") && enteredPassword.length > 5) {
      console.log(enteredEmail, enteredPassword);
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.ediv}>
        <div className={classes.header}>
          <h2>LOGIN</h2>
        </div>
        <div className={classes.email}>
          <label htmlFor="Email">Email Id : </label>

          <input
            id="email"
            type="email"
            className={classes.input}
            ref={inputEmail}
          ></input>
        </div>
        <div className={classes.password}>
          <label htmlFor="Password">Password : </label>

          <input id="Password" type="Password" ref={inputPassword}></input>
        </div>

        <div className={classes.text}>
          <a>Forgot Password</a>
        </div>
        <div className={classes.button}>
          <button onClick={loginHandler}>Register </button>
        </div>
      </div>
    </form>
  );
};
export default LoginForm;
