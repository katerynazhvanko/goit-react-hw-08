import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";
// import { Suspense } from "react";
// import { Toaster } from "react-hot-toast";

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <AppBar />
      {children}
    </div>
  );
}
