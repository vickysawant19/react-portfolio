import React from "react";
import { PROFILE } from "../constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="text-center text-4xl ">Get in Touch</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">{PROFILE.location}</p>
        <p className="my-4">{PROFILE.phone}</p>
        <a href={`mailto:${PROFILE.email}`} className="my-4 border-b ">
          {PROFILE.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
