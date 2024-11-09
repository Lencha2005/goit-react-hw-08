import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { contactFormSchema } from '../../schemas/schemas';

import styles from './ContactForm.module.css';

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={contactFormSchema}>
      <Form className={styles.form}>
        <label className={styles.label}>
          <p className={styles.text}>Name</p>
          <Field className={styles.input} type="text" name="name" />
          <ErrorMessage className={styles.error} name="name" component="span" />
        </label>
        <label className={styles.label}>
        <p className={styles.text}>Number</p>
          <Field className={styles.input} type="text" name="number" />
          <ErrorMessage className={styles.error} name="number" component="span" />
        </label>
        <button className={styles.btn} type="submit">Add contact</button>
      </Form>
    </Formik>
  )
}

export default ContactForm