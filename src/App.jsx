import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import s from "./App.module.css";

function App() {
  return (
    <>
      <h1 className={s.title}>Phonebook</h1>
      <div className={s.wrapper}>
        <div className={s.formWrapper}>
          <ContactForm />
          <SearchBox />
        </div>
        <ContactList />
      </div>
    </>
  );
}

export default App;
