import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

// import { Suspense, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Toaster } from "react-hot-toast";

// import ContactForm from "./components/ContactForm/ContactForm";
// import ContactList from "./components/ContactList/ContactList";
// import SearchBox from "./components/SearchBox/SearchBox";
// import Loader from "./components/Loader/Loader";
// import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

// import { fetchContacts } from "./redux/contacts/operations";
// import { selectLoading, selectError } from "./redux/contacts/selectors";

// export default function App() {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectLoading);
//   const isError = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <>
//       <h1>Phonebook</h1>
//       {isLoading && <Loader />}
//       {isError && <ErrorMessage />}
//       <ContactForm />
//       <SearchBox />
//       <ContactList />
//       <Toaster />
//     </>
//   );
// }

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegisterPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
