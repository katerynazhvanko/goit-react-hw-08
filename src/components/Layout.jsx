import AppBar from "./AppBar/AppBar";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";

export default function Layout({ children }) {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
      <Toaster />
    </div>
  );
}
