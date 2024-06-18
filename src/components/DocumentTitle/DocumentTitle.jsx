import css from "./DocumentTitle.module.css";

export default function DocumentTitle({ children }) {
  return (
    <div>
      <h2 className={css.title}>{children}</h2>
    </div>
  );
}
