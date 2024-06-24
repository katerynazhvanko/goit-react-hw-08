import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { useId } from "react";
// import * as Yup from "yup";
import toast from "react-hot-toast";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

// const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// // min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
// const ContactSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(3, "Too Short! Min 3 symbols")
//     .max(15, "Too Long! Max 50 symbols")
//     .required("Required"),
//   email: Yup.string().email("Please, enter a valid email").required("Required"),
//   password: Yup.string()
//     .matches(passwordRules, {
//       message:
//         "Please create a stronger password. Min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit",
//     })
//     .required("Required"),
// });

export default function RegistrationForm() {
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
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
      // validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameId} autoComplete="off" className={css.label}>
          UserName
        </label>
        <Field type="text" name="name" id={nameId} className={css.input} />

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
          Sing Up
        </button>
      </Form>
    </Formik>
  );
}
