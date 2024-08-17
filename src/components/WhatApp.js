import React from "react";
import "../style.css";

import whatApp from "../assets/whatsapp.png";
import phoneIcon from "../assets/phone-call.png";

function WhatsAppButton() {
  const whatsApp = "7338497706";

  return (
    <>
      <section id="clients" >
        <div class="container">
          <div class="row">
            <div class="col-lg-2 col-sm-4 offset-lg-2 lh-1">
              <a
                href={`https://wa.me/${whatsApp}`}
                class="  btn-md-square back-to-top"
              >
                <img
                  src={whatApp}
                  alt=""
                  className="img-fluid whatApp"
                  width={60}
                />
              </a>
            </div>
            <div class="col-lg-2 col-sm-4 col-4 lh-1 ">
              <a
                href="tel:7338497706"
                class="btn-primary-outline-0 btn-md-square back-to-top"
              >
                <img
                  src={phoneIcon}
                  alt=""
                  className="img-fluid phoneNumber"
                  width={60}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhatsAppButton;
