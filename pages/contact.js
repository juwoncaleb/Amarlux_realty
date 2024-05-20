import React from "react";

export default function contact() {
  return (
    <div className="flex justify-between">
      {/* FORM */}
      <div className="form_feild">
        <p className="exclusive_listings ">CONTACT</p>
        <input placeholder="Name" className="contact_input" />
        <input placeholder="Email " className="contact_input" />
        <input placeholder="Phone" className="contact_input" />
        <input placeholder="Message" className="contact_input_message" />
        <button className="contact">Let's Talk</button>
      </div>

      {/* PICTURE */}
      <div className="contact_img">
        <img src="./amp.jpg"/>
      </div>
    </div>
  );
}
