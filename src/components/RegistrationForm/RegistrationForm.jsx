import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { register } from "../../redux/auth/operations";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    console.log(values);

    dispatch(register(values))
      .unwrap()
      .then(() =>
        toast.success("Account has been created! Welcome to your Phonebook!")
      )
      .catch(() => toast.error("Registration error!"));

    action.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor="name" autoComplete="off">
          UserName
        </label>
        <Field type="text" name="name" />

        <label htmlFor="email">Email</label>
        <Field type="email" name="email" />

        <label htmlFor="password">Password</label>
        <Field type="password" name="password" />
        <button type="submit">Sing Up</button>
      </Form>
    </Formik>
  );
}
