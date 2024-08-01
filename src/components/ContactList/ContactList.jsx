import { deleteContact } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";

function ContactList () {

  const contactsData = useSelector(state => {
    return state.contacts.items
  })
  const filterName = useSelector(state => state.filters.name)

  const dispatch = useDispatch()

  const deleteContactt = (id) => {
    dispatch(deleteContact(id));
  };

  const filterData = contactsData.filter((el) =>
    el.name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <ul className={style.contactList}>
      {filterData.map((el) => (
        <li key={el.id}>
          <Contact contact={el} deleteContact={deleteContactt} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;