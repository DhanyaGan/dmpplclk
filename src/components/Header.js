import React from 'react';
import logo from '../assets/PeopleClickLearningLogo.png'
import "../style.css";

function Header() {
  return (
    <div className="Header">
          <nav class="navbar navbar-expand-lg navbar-dark green-bg">
            <div class="container px-5">
                <a class="navbar-brand" href="/">
                  <img src={logo} width={160} alt='Company logo' />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-uppercase text-dar">
                        <li class="nav-item px-2"><a class="nav-link active" aria-current="page" href="#!">Digital marketing</a></li>
                        <li class="nav-item px-2"><a class="nav-link" href="#!">Data Science</a></li>
                        <li class="nav-item px-2"><a class="nav-link" href="#!">Full Stack</a></li>
                        <li class="nav-item px-2"><a class="nav-link" href="#!">SAP FICO</a></li>
                        <li class="nav-item px-2"><a class="nav-link" href="#!">SAP ABAP</a></li>

                    </ul>
                </div>
            </div>
        </nav>
    </div>
  );
}

export default Header;
