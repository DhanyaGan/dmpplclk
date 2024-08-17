import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

export const ContactForm = () => {
  const form = useRef();
  const onChange = () => {};

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_x1wb5oo", "template_sxnnjw9", form.current, {
        publicKey: "sW4OmcqXr4H-vGXgS",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
      e.target.reset();
  };
  return (
    <>
      <section>
        <div class="container-fluid subscribe py-5">
          <div class="container py-5">
            <div class="mx-auto  m-w">
              <h1 class="text-white mb-4 text-center">Contact Us</h1>
              <form
                id="contact_form"
                name="contact_form"
                method="post"
                ref={form}
                onSubmit={sendEmail}
              >
                <div class="mb-3 row">
                  <div class="col">
                    <input
                      type="text"
                      required
                      maxlength="50"
                      placeholder="First Name"
                      class="form-control"
                      id="first_name"
                      name="first_name"
                    />
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      required
                      maxlength="50"
                      placeholder="Last Name"
                      class="form-control"
                      id="last_name"
                      name="last_name"
                    />
                  </div>
                </div>
                <div class="mb-3 row">
                  <div class="col">
                    <input
                      type="email"
                      required
                      maxlength="50"
                      class="form-control"
                      id="email_id"
                      name="email_id"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div class="col">
                    <input
                      type="tel"
                      required
                      maxlength="50"
                      class="form-control"
                      id="phone_number"
                      name="phone_number"
                      placeholder="Phone"
                    />
                  </div>
                </div>
                <div class="mb-3">
                  <textarea
                    class="form-control"
                    placeholder="message"
                    id="message"
                    name="message"
                    rows="5"
                  ></textarea>
                </div>
                <ReCAPTCHA
    sitekey="6Lf2xrMpAAAAALLDg1wEyryyR1KPnLwsUdimEY0c"
    onChange={onChange}
  />
                <button
                  type="submit"
                  class="btn btn-primary px-4 btn-lg text-align-end mt-3 "
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactForm;
