import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

export const Popup = () => {
  const form = useRef();
  const onChange = () => {};
  const [successMessage, setSuccessMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_x1wb5oo", "template_xkug4vj", form.current, {
        publicKey: "sW4OmcqXr4H-vGXgS",

      
      })
      .then(
        () => {
          console.log('Email sent');
        setSuccessMessage('Your message has been sent successfully!');
        },
        (error) => {
          console.error('Email error:', error);
          setSuccessMessage('Oops! Something went wrong. Please try again later.');
        }
      );
      e.target.reset();

  };
  
  return (
    <>

<div
        class="modal fade p-4"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog ">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
              Send a Request
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body px-lg-4">
 <form
                id="contact_form"
                name="contact_form"
                method="post"
                ref={form}
                onSubmit={sendEmail}
              >
                <div class="row">
                  <div class="col-12">
                    <input
                      type="text"
                      required
                      maxlength="50"
                      placeholder="First Name*"
                      class="form-control mb-3"
                      id="first_name"
                      name="first_name"
                    />
                  </div>
                  <div class="col-12">
                    <input
                      type="text"
                      required
                      maxlength="50"
                      placeholder="Last Name*"
                      class="form-control mb-3"
                      id="last_name"
                      name="last_name"
                    />
                  </div>
                </div>
                <div class="mb-3 row">
                  <div class="col-12">
                    <input
                      type="email"
                      required
                      maxlength="50"
                      class="form-control mb-3"
                      id="email_id"
                      name="email_id"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div class="col-12">
                    <input
                      type="tel"
                      required
                      maxlength="50"
                      class="form-control"
                      id="phone_number"
                      name="phone_number*"
                      placeholder="Phone*"
                    />
                  </div>
                </div>
                <div class="mb-3">
                  <textarea
                    class="form-control"
                    placeholder="message*"
                    id="message"
                    name="message"
                    rows="3"
                  ></textarea>
                </div>
                <ReCAPTCHA
    sitekey="6LeD4OApAAAAAMsvewc1r86P0cXz1MJOUvTlf8al"
    onChange={onChange}
  />
                <button
                  type="submit"
                  class="btn btn-primary px-4 btn-lg text-align-end mt-3 "
                  data-bs-dismiss="modal"
                >
                  Submit
                </button>
              </form>        
              {successMessage && <p>{successMessage}</p>}
    
              
              </div>
   
          </div>
        </div>
      </div>
 
    </>
  );
};
export default Popup;
