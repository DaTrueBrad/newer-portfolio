import React, { useRef, useState } from "react";
import emailjs, { init } from "@emailjs/browser";
import { Button, TextField, Typography, Snackbar, Alert } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

init(process.env.REACT_APP_userID);

function ContactMe() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleClick = () => {
    setSuccess(true);
  };

  const handleClose = () => {
    setSuccess(false);
    setError(false);
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const bodyObj = {
      user_name: userName,
      user_email: email,
      message: message,
    };
    emailjs
      .sendForm(
        process.env.REACT_APP_serviceID,
        process.env.REACT_APP_templateID,
        form.current,
        process.env.REACT_APP_userID
      )
      .then(
        (result) => {
          setSuccess(true);
          setUserName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          setError(true);
        }
      );
  };
  return (
    <section>
      {/* <div className="info-container" id="center"> */}
      {/* <div className="information">
          <div>
            <Typography variant="h2" color="text.main" align="center">
              Contact Me
            </Typography>
            <Typography variant="h5" color="text.main">
              If you wish to reach out to me for whatever reason, please use
              this form! It goes directly to my email, and I receive
              notifications.
            </Typography>
            <br></br>
            <Typography variant="h5" color="text.main">
              If you wish for me to contact you back, PLEASE ensure that your
              email address you provide is accurate. If you input it
              incorrectly, I am not all-knowing and cannot cipher your
              misspelled email to contact you, nor can I send out energy into
              the universe to "give you a sign."
            </Typography>
            <br></br>
          </div>
        </div> */}
      <form ref={form} onSubmit={sendEmail}>
      <Typography variant="h2" color="background.paper" align="center">
        Contact Me
      </Typography>
        <TextField
          type="text"
          variant="outlined"
          onChange={(e) => setUserName(e.target.value)}
          label="Name"
          value={userName}
          name="user_name"
        />
        <TextField
          type="email"
          name="user_email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          variant="outlined"
          label="Email"
        />
        <TextField
          type="text"
          variant="outlined"
          onChange={(e) => setMessage(e.target.value)}
          name="message"
          multiline
          value={message}
          minRows={8}
          maxRows={8}
          label="Message"
        />
        <Button type="submit" variant="contained">
          Send
        </Button>
        <div className="row-container">
          <a href="https://www.facebook.com/bottbrady/" target="_blank"><FacebookIcon sx={{ color: "#1778F2", fontSize: "66px" }} /></a>
          <a href="https://www.instagram.com/bottbrady/" target="_blank"><InstagramIcon sx={{ color: "#C0007A", fontSize: "66px" }} /></a>
          <a href="https://www.linkedin.com/in/bradybott/" target="_blank"><LinkedInIcon sx={{ color: "#0077b5", fontSize: "66px" }} /></a>
        </div>
      </form>
      {/* </div> */}
      <Snackbar open={success} autoHideDuration={6000}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Message sent Successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={error} autoHideDuration={6000}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Unable to send message at this time!
        </Alert>
      </Snackbar>
      ; ;
    </section>
  );
}

export default ContactMe;
