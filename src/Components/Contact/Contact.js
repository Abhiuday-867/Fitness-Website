import contactUs from "../../Images/contact-1.jpg";
import classes from "./Contact.module.css";
import { Fragment } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useHistory } from "react-router-dom";
const Contact = (props) => {
  let History = useHistory();
  const gobackHandler = () => {
    History.goBack();
  };
  return (
    <Fragment>
      <AiOutlineArrowLeft className={classes.icon} onClick={gobackHandler} />
      <div className={classes.contact}>
        <img src={contactUs} alt="contact us img " className={classes.img} />
      </div>
      <div className={classes.contactdiv}>
        <h1>Contact Us</h1>
        <p>
          Following all that excellent copy is a well-organized page with
          contact information containing emails for every different department,
          followed by a form. The form's a little lengthy for most businesses,
          but for a company that runs background checks of all kinds, the form
          fields are likely necessary to help them organize all their inquiries.
        </p>
      </div>
    </Fragment>
  );
};
export default Contact;
