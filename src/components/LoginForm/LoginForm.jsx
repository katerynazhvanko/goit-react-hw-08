import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    dispatch(logIn(values));
    action.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>Email</label>
        <Field type="email" name="email" />
        <label>Password</label>
        <Field type="password" name="password" />
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
