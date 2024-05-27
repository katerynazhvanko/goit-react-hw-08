import { Formik, Form, Field } from "formik";

export default function RegistrationForm() {
  const handleSubmit = (values, action) => {
    console.log(values);
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
          <Field type="text" name="name" />
        </label>

        <label htmlFor="email">
          Email
          <Field type="email" name="email" />
        </label>

        <label htmlFor="password">
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Sing Up</button>
      </Form>
    </Formik>
  );
}
