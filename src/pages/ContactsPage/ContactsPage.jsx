import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectContactsError, selectContactsIsLoading } from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactForm from "../../components/ContactForm/ContactForm";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm/>
      {isLoading && <Loader />}
      {error  && <ErrorMessage />}
      <SearchBox/>
      <ContactList/>
    </div>
    );
}

export default ContactsPage