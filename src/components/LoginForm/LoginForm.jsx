import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { login } from "../../redux/auth/operations";
import { loginFormSchema } from "../../schemas/schemas";

import css from './LoginForm.module.css'

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
      dispatch(login(values));
      console.log(values);
      actions.resetForm();
    };
    
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={loginFormSchema}>
      <Form className={css.form}>
        <label className={css.label}>
        <p className={css.text}>Email</p>
          <Field className={css.input} type="text" name="email" />
          <ErrorMessage className={css.error} name="email" component="span" />
        </label>
        <label className={css.label}>
        <p className={css.text}>Password</p>
          <Field className={css.input} type="password" name="password" />
          <ErrorMessage className={css.error} name="password" component="span" />
        </label>
        <button className={css.btn} type="submit">Sing In</button>
      </Form>
    </Formik>
  )
}

export default LoginForm