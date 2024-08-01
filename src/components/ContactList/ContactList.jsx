import { useMemo } from "react";
import { deleteContact, selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";

function ContactList () {

  const contactsData = useSelector(selectContacts)
  const filterName = useSelector(selectNameFilter)

  const dispatch = useDispatch()

  const deleteContactt = (id) => {
    dispatch(deleteContact(id));
  };

  const filterData = useMemo( () => {
    return contactsData.filter((el) =>
      el.name.toLowerCase().includes(filterName.toLowerCase())
    )},
    [filterName, contactsData]
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