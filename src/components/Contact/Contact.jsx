import { FaRegUser } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { useDispatch } from "react-redux";
import s from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className={s.textWrapper}>
        <div className={s.iconWrapper}>
          <FaRegUser />
          <p className={s.name}>{name}</p>
        </div>
        <div className={s.iconWrapper}>
          <MdPhoneIphone />
          <p className={s.number}>{number}</p>
        </div>
      </div>
      <button
        className={s.deleteButton}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
