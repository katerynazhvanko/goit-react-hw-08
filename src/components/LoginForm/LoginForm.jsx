import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useId } from "react";
import toast from "react-hot-toast";
// import * as Yup from "yup";
import { login } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

// const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// // min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
// const AccountSchema = Yup.object().shape({
//   email: Yup.string().email("Please, enter a valid email").required("Required"),
//   password: Yup.string()
//     .matches(passwordRules, { message: "Invalid password" })
//     .required("Required"),
// });

export default function LoginForm() {
  const emailId = useId();
  const passwordId = useId();
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
      // validationSchema={AccountSchema}
    >
      <Form className={css.form}>
        <label htmlFor={emailId} className={css.label}>
          Email
        </label>
        <Field type="email" name="email" id={emailId} className={css.input} />
        <label htmlFor={passwordId} className={css.label}>
          Password
        </label>
        <Field
          type="password"
          name="password"
          id={passwordId}
          className={css.input}
        />
        <button type="submit" className={css.button}>
          Log In
        </button>
      </Form>
    </Formik>
  );
}
