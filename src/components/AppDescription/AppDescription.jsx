import { NavLink } from "react-router-dom";
import css from "./AppDescription.module.css";

export default function AppDescription() {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Your personal contact book in one place</h2>
      <p className={css.text}>
        It&apos;s the simplest way to organize and store all your contacts. Our
        app will help you stay in touch with the important people in your life.
      </p>
      <p className={css.text}>
        <b>What we offer:</b>
      </p>
      <ul className={css.list}>
        <li className={css.item}>
          <b>Simple and intuitive contact management:</b> Add and delete
          contacts with just a few clicks
        </li>
        <li className={css.item}>
          <b>Data security:</b> All your contacts are securely stored on the
          server, so you can access them from any device by simply logging into
          your account.
        </li>
        <li className={css.item}>
          <b>Convenient search:</b> Searching by name allows you to find any
          contact by typing just a few letters.
        </li>
      </ul>
      <p className={css.title}>
        <b>Get started now</b>
      </p>
      <p className={css.text}>
        Don&apos;t lose a single contact! Register now and start enjoying all
        the benefits of <b className={css.accent}>ContactBook App</b>.
      </p>
      <p className={css.text}>
        <NavLink to="/register" className={css.link}>
          Registration
        </NavLink>{" "}
        takes only a few minutes. Join our community and make managing contacts
        simple and convenient.
      </p>
      <p className={css.text}>
        Already have an account?{" "}
        <NavLink to="/login" className={css.link}>
          Log in
        </NavLink>
      </p>
    </div>
  );
}
