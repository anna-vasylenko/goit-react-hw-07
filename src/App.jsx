import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import s from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import { selectError, selectLoading } from "./redux/selectors";
import Loader from "./components/Loader/Loader";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1 className={s.title}>Phonebook</h1>
      <div className={s.wrapper}>
        <div className={s.formWrapper}>
          <ContactForm />
          <SearchBox />
        </div>
        <ContactList />
        {isLoading && <Loader />}
        {isError && (
          <p className={s.errorMessage}>
            Something went wrong, try again later!
          </p>
        )}
      </div>
    </>
  );
}

export default App;
