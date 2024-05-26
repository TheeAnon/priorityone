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
      <div className="p-5">
        <div className="mt-8">
          <h2 className="font-extrabold font-sans text-5xl">Contact us</h2>
        </div>
        <div className="mt-4 md:grid md:grid-cols-2 gap-2">
          <div className="flex flex-col gap-2">
            <div class="flex gap-2">
              <div className="flex flex-col gap-2">
                <label className="font-lg">First name</label>
                <input
                  value={formData.firstName}
                  onChange={(e) => onChange(e)}
                  placeholder="Priority"
                  className="w-full rounded p-3 border text-lg placeholder:text-lg"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-lg">Last name</label>
                <input
                  value={lastName}
                  onChange={(e) => onChange(e)}
                  placeholder="One"
                  className="w-full rounded p-3 border text-lg  placeholder:text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
