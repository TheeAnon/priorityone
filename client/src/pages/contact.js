import { useState } from "react";
import Header from "../components/header";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const { firstName, lastName, email, subject, message } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="py-5 pt-2">
      <Header />
      <div
        className="mt-3 bg-cover text-white md:grid md:grid-cols-2"
        style={{
          backgroundImage:
            "url('https://t4.ftcdn.net/jpg/05/41/09/03/240_F_541090317_srx1Qhp9hYasVzasgsypO2ImAYVHtqNr.jpg')",
        }}
      >
        <div className="pt-4 backdrop-blur p-5 rounded bg-black">
          <h2 className="font-extrabold font-sans text-5xl">Contact us</h2>
          <div className="mt-4 gap-4">
            <div className="flex flex-col gap-4">
              <div className="flex gap-2 w-full">
                <div className="flex flex-col gap-2 w-full">
                  <label className="font-lg">First name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={onChange}
                    placeholder="Priority"
                    className="w-full rounded p-3 border text-lg placeholder:text-lg text-black"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label className="font-lg">Last name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={onChange}
                    placeholder="One"
                    className="w-full rounded p-3 border text-lg placeholder:text-lg text-black"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-lg">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  placeholder="priorityone@gmail.com"
                  className="w-full rounded p-3 border text-lg placeholder:text-lg text-black"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-lg">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={subject}
                  onChange={onChange}
                  placeholder="I want to publish a podcast"
                  className="w-full rounded p-3 border text-lg placeholder:text-lg text-black font-bold uppercase"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-lg">Message</label>
                <textarea
                  name="message"
                  value={message}
                  onChange={onChange}
                  placeholder="Talk to us openly, about anything."
                  className="w-full rounded p-3 border text-lg placeholder:text-lg text-black"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Contact;
