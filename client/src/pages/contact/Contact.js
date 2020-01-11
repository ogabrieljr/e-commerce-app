import React, { useState } from "react";
import Input from "../../components/form input/Input";
import "./style.scss";
import Button from "../../components/button/button";
import TextArea from "../../components/text area/TextArea";
import axios from "axios";

export default function Contact() {
  const [credentials, setCredentials] = useState({
    email: "",
    name: "",
    message: "",
    subject: "",
    response: ""
  });

  const { email, name, message, subject, response } = credentials;

  const handleChange = event => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const submit = event => {
    event.preventDefault();
    axios({
      url: "contact",
      method: "post",
      data: {
        email,
        name,
        message,
        subject
      }
    })
      .then(response => setCredentials({ ...credentials, response: response.data }))
      .catch(error => setCredentials({ ...credentials, response: response.data }));
  };

  return (
    <div className="sign-in">
      <h2>Contact us</h2>
      <form onSubmit={submit}>
        <Input
          handleChange={handleChange}
          name="name"
          type="name"
          value={name}
          label="Name"
          required
        />
        <Input
          handleChange={handleChange}
          name="email"
          type="email"
          value={email}
          label="Email"
          required
        />
        <Input
          handleChange={handleChange}
          name="subject"
          type="subject"
          value={subject}
          label="Subject"
          required
        />
        <TextArea
          handleChange={handleChange}
          type="message"
          value={message}
          name="message"
          label="Message"
          cols="20"
          rows="7"
          required
        />
        <p>{response}</p>
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
}
