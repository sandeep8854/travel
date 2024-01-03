import { useRef } from "react";
// import "./contactStyles.css";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DivContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem 0 1rem;
`;
const StyledContactForm = styled.div`
  width: 400px;

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid #a0aca9;
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid #7e8684;
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(100, 91, 85);
      color: white;
      border: none;
    }
  }
`;
const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gjaaa6j",
        "template_l95jxbq",
        form.current,
        "PJGEqfq4ipH0iSny2"
      )
      .then(
        (result) => {
          toast(`your message has been send successfully`);
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          toast("Failed Meassage not sent 😔 Try after some times");
          console.log(error.text);
        }
      );
  };
  return (
    <>
      {/*  
      replace with user id
 start without sending mail form.
      <div className="form-container">
        <h1>Send a message to us!</h1>
        <form>
          <input placeholder="Name" />
          <input placeholder="Email" />
          <input placeholder="Subject" /> 
          <textarea placeholder="Message" rows="4"></textarea>
          <button>Send Message</button>
        </form>
      </div>
      End without sending mail form.
    */}
      {/* mail form with toast file. */}
      <DivContainer>
        <StyledContactForm>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </StyledContactForm>
      </DivContainer>
      <ToastContainer />
    </>
  );
};

export default ContactForm;
