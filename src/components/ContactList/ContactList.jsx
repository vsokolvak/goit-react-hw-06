import { contactDelete } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";

function ContactList () {

  const contactsData = useSelector(state => {
    return state.contacts.items
  })
  const filterName = useSelector(state => state.filters.name)

  const dispatch = useDispatch()

  const deleteContact = (id) => {
    const newContactData = contactsData.filter((el) => {
      if (el.id !== id) return el;
    })
    dispatch(contactDelete(newContactData))
  };

  const filterData = contactsData.filter((el) =>
    el.name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <ul className={style.contactList}>
      {filterData.map((el) => (
        <li key={el.id}>
          <Contact contact={el} deleteContact={deleteContact} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;