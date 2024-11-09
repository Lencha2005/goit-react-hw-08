import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/filters/selectors';
import { selectUserIsLoading } from '../../redux/auth/selectors';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { selectContacts, selectContactsError } from '../../redux/contacts/selectors';
import styles from './ContactList.module.css'

const ContactList = () => {
    const contacts = useSelector(selectContacts)
// const contacts = useSelector(selectFilteredContacts);
console.log('contacts: ', contacts);
const isLoading = useSelector(selectUserIsLoading);
const error = useSelector(selectContactsError);

  return (
    <>
    {isLoading && <Loader />}
    {error  && <ErrorMessage />}
    {Array.isArray(contacts) && contacts.length === 0 && (
        <p>There are no contacts in your phonebook yet!</p>
      )}
    <ul className={styles.list}>

      {Array.isArray(contacts) && contacts.length > 0 && (
        contacts.map(contact => {
        return (
        <li key={contact.id} className={styles.item}>
          <Contact
          name={contact.name}
          number={contact.number}
          id={contact.id}
          />
        </li>
      )})
    )}
    </ul>
    </>
  )
};

export default ContactList