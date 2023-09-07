import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      subject,
      message,
    };

    try {
      const res = await fetch("api/contact", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        // console.log("Response received");
        console.log(res.status);
        if (res.status === 200) {
          // console.log("Response succeeded!");
          setSubmitted(true);
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        }
      });
    } catch (err) {
      console.log("Error: ", err);
    }
  };
  return (
    <div className="h-full bg-primary/30 pt-5  mt-1 sm:mt-0">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <h2 className="h2 text-center mb-8">
            Lets <span className="text-accent"> connect. </span>
          </h2>
          {/* form */}
          <form
            className="flex-1 flex flex-col gap-4 sm:w-full sm:mx-auto h-[50%]"
            onSubmit={onSubmit}
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              {/* name */}
              <input
                type="text"
                placeholder="Name"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {/* email */}
              <input
                type="email"
                placeholder="email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* subject */}
            <input
              type="text"
              placeholder="Subject"
              className="input"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            {/* message */}
            <textarea
              placeholder="Message"
              className="textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {/* button */}
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Lets talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
