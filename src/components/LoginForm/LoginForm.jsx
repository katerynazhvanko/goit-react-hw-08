import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { login } from "../../redux/auth/operations";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    dispatch(login(values))
      .unwrap()
      .then(() => toast.success("Login is successfull"))
      .catch(() => toast.error("Wrong password or email. Try again"));
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
