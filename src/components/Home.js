import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import myImage1 from "../assets/guide-1.jpg";
import myImage2 from "../assets/guide-2.jpg";
import ContactForm from "./ContactForm";
import logo from "../assets/PeopleClickLearningLogo.png";
import aboutimg from "../assets/about-img.jpg";
import About from "../assets/About.jpg";
import "../style.css";
import gallery1 from "../assets/gallery-1.jpg";
import gallery2 from "../assets/gallery-2.jpg";
import gallery3 from "../assets/gallery-3.jpg";
import gallery4 from "../assets/gallery-4.jpg";
import gallery5 from "../assets/gallery-5.jpg";
import gallery6 from "../assets/gallery-6.jpg";
import icon1 from "../assets/graduation.png";
import icon2 from "../assets/experience.png";
import icon3 from "../assets/project-management.png";
import icon4 from "../assets/training.png";
import icon5 from "../assets/flexibility.png";
import icon6 from "../assets/box.png";
import students from "../assets/students.png";
import education from "../assets/education.png";
import business from "../assets/business.png";
import marketing from "../assets/marketing.png";
import DownloadPdf from "../assets/Master_Program_In_Digital_Marketing.pdf";
import digitalClass from "../assets/Why-Should-You-Learn-Digital.jpg";
import "@fortawesome/fontawesome-free/css/all.css";
import technology01 from "../assets/technologies/technology_01.jpg";
import technology02 from "../assets/technologies/technology_02.jpg";
import technology03 from "../assets/technologies/technology_03.jpg";
import technology04 from "../assets/technologies/technology_04.jpg";
import technology05 from "../assets/technologies/technology_05.jpg";
import technology06 from "../assets/technologies/technology_06.jpg";
import technology07 from "../assets/technologies/technology_07.jpg";
import technology08 from "../assets/technologies/technology_08.jpg";
import technology09 from "../assets/technologies/technology_09.jpg";
import technology10 from "../assets/technologies/technology_10.jpg";
import technology11 from "../assets/technologies/technology_11.jpg";
import technology12 from "../assets/technologies/technology_12.jpg";
import alumni01 from "../assets/alumni/alumni01.jpg";
import alumni02 from "../assets/alumni/alumni02.jpg";
import alumni03 from "../assets/alumni/alumni03.jpg";
import alumni04 from "../assets/alumni/alumni04.jpg";
import alumni05 from "../assets/alumni/alumni05.jpg";
import alumni06 from "../assets/alumni/alumni06.jpg";
import alumni07 from "../assets/alumni/alumni07.jpg";
import alumni08 from "../assets/alumni/alumni08.jpg";
import alumni09 from "../assets/alumni/alumni09.jpg";
import alumni10 from "../assets/alumni/alumni10.jpg";
import alumni11 from "../assets/alumni/alumni11.jpg";
import alumni12 from "../assets/alumni/alumni12.jpg";
import Rishwanth from "../assets/team/Rishwanth.jpg";
import Sabarivelan from "../assets/team/Sabarivelan.jpg";
import Akash from "../assets/team/Akash.jpg";
import Hrithick from "../assets/team/Hrithick.jpg";
import classroomAndOnline from "../assets/classroomAndOnline.jpg";
import Popup from "./Popup";
function Home() {
  return (
    <>
      <header class="bg-dark py-5 bg-breadcrumb">
        <div class="container px-5">
          <div class="row gx-5  justify-content-center">
            <div class="col-lg-12 ">
              <div class="text-center my-5">
                <a class="navbar-brand" href="/">
                  <img
                    src={logo}
                    width={300}
                    alt="Company logo"
                    className="mb-4"
                  />
                </a>
                <h1 class="display-4 fw-bolder text-white mb-5">
                  Learn the Advanced
                  <span className="blueColor"> Digital Marketing</span> course
                  with certification & Placements
                </h1>
                <h2 class=" text-white mb-2 h2 ">
                  Get in depth knowledge of digital marketing course and tools
                </h2>
                <p class="lead text-white mb-4">
                  <b>Eligibility</b>: Graduates from all streams can apply |
                  <b> 3 Months</b> course duration with 100% Job assistance
                </p>
                <div class="d-grid gap-3 d-sm-flex justify-content-sm-center">
                  <a
                    class="btn btn-primary btn-lg px-4 me-sm-3"
                    href={DownloadPdf}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Download Brochure
                  </a>
                  <a
                    class="btn btn-outline-light btn-lg px-4"
                    href={DownloadPdf}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
            <Popup />
          </div>
        </div>
      </header>
      <section id="clients" class="section-bg green-bg">
        <div class="container py-3">
          <div class="row">
            <div class="col-lg-2 col-sm-3 col-6 offset-lg-2  lh-1 py-2 ">
              <h1 class="h1 fw-bolder text-white lh-1">
                <span className="blueColor">14 years </span>
              </h1>
              <p className="text-white fw-bold">of excellence</p>
            </div>
            <div class="col-lg-2 col-sm-3 col-6 lh-1 py-2">
              <h2 class="h1 fw-bolder  text-white lh-1">
                <span className="blueColor">1000+</span>
              </h2>
              <p className="text-white  fw-bold">Students placed</p>
            </div>
            <div class="col-lg-2 col-sm-3 col-6 lh-1 py-2 ">
              <h2 class="h1 fw-bolder  text-white lh-1">
                <span className="blueColor">40%</span>
              </h2>
              <p className="text-white  fw-bold">Average salary hike</p>
            </div>
            <div class="col-lg-2 col-sm-3 col-6 lh-1 py-2">
              <h2 class="h1 fw-bolder  text-white lh-1">
                <span className="blueColor">25 LPA</span>
              </h2>
              <p className="text-white  fw-bold">Highest salary </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container-fluid bg-light service py-5">
          <div class="container py-2">
            <div class="mx-auto text-center mb-5">
              <h1 class="mb-0 logo-color-green fw-bold">
                About our Advanced Digital marketing course
              </h1>
            </div>
            <div class="row g-4">
              <div class="col-lg-6">
                <div class="row g-4">
                  <div class="col-12">
                    <div class="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 pe-0">
                      <div class="service-icon p-4 ">
                        <img src={icon2} width={200} class="img-fluid" alt="" />
                      </div>
                      <div class="service-content">
                        <h5 class="mb-2">Experienced faculty </h5>
                        <p class="mb-0">
                          Enroll in our advanced digital marketing course led by
                          experienced faculty with extensive project experience,
                          providing valuable practical learning for students.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 pe-0">
                      <div class="service-icon p-4">
                        <img src={icon3} width={200} class="img-fluid" alt="" />
                      </div>
                      <div class="service-content">
                        <h5 class="mb-2">
                          Real time Projects, Doubt clarification sessions
                        </h5>
                        <p class="mb-0 ">
                          While learning the course with us, you will be able to
                          work on real time projects. So that you can gain more
                          practical knowledge and you can clear your doubts as
                          well.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 pe-0">
                      <div class="service-icon p-4">
                        <img src={icon5} width={225} class="img-fluid" alt="" />
                      </div>
                      <div class="service-content">
                        <h5 class="mb-2">Flexible learning formats</h5>
                        <p class="mb-0 pr-2">
                          Students can engage in real-time learning through live
                          lectures, webinars, or virtual classrooms, with
                          flexible batch options for convenient attendance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="row g-4">
                  <div class="col-12">
                    <div class="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 ps-0">
                      <div class="service-icon p-4">
                        <img src={icon1} width={200} class="img-fluid" alt="" />
                      </div>
                      <div class="service-content">
                        <h5 class="mb-2">
                          14 years of excellence in education
                        </h5>
                        <p class="mb-0">
                          Since we started our institution in 2010, we have been
                          committed to provide high quality training and
                          education services to our students & working
                          professionals.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 ps-0">
                      <div class="service-icon p-4">
                        <img src={icon4} width={200} class="img-fluid" alt="" />
                      </div>
                      <div class="service-content">
                        <h5 class="mb-2">Practical training </h5>
                        <p class="mb-0">
                          We provide complete practical based project training
                          classes. Our training helps you understanding the
                          digital marketing concepts and execute in projects
                          easily.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 ps-0">
                      <div class="service-icon p-4">
                        <img src={icon6} width={300} class="img-fluid" alt="" />
                      </div>
                      <div class="service-content">
                        <h5 class="mb-2">100% Placement support </h5>
                        <p class="mb-0">
                          After reaching 80% of the syllabus, students attend
                          interviews facilitated by our placement team. We
                          guarantee 100% placement support at People Click
                          Learning for securing ideal digital marketing roles.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-grid gap-3 d-sm-flex justify-content-sm-center mt-4">
              <a
                class="btn btn-primary btn-lg px-4 me-sm-3"
                href={DownloadPdf}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Connect with Career Expert
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="py-1 classroom" id="features">
        <div class="container-fluid about py-2">
          <div class="container py-5">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div>
                  <img src={classroomAndOnline} class="img-fluid" alt="" />
                </div>
              </div>
              <div class="col-lg-6 img-grad">
                <h1 class="mb-4 fw-bold text-white">
                  Our Classroom and Online training for digital marketing course
                </h1>
                <h4 class="section-about-title pe-3 text-white">
                  Class room training
                </h4>
                <p class="mb-4">
                  In Classroom training, you can able to learn digital marketing
                  course from basics to advanced level with industry experts at
                  Peopleclick learning. Our Experienced trainers will guide one
                  to one student support. For example, once you finished a
                  particular topic, our trainers will provide assignments/tasks
                  from it and will be handling doubt clearance session also.
                  After finishing, they will move on next.
                </p>
                <p class="mb-4">
                  So that students can understand the concepts clearly and
                  switch to the new topic once they get cleared well. Training
                  for Both weekdays and weekend batches will be conducted
                  separately.
                </p>
                <h4 class="section-about-title pe-3  text-white ">
                  Online training
                </h4>
                <p class="mb-4">
                  To make classes more comfortable for students and working
                  professionals, we understand their difficulties and planned to
                  take classes online with their convenient timings. Candidates
                  can attend their classes online and can able to get the
                  recorded sessions end of the day.
                </p>
              </div>
            </div>
          </div>
        </div>
        <section class="bg-light py-5 border-bottom">
          <div class="container px-lg-5 my-5">
            <div class="row gx-3 gx-lg-3 justify-content-center">
              <div class="mx-auto text-center mb-5">
                <h1 class="mb-0 logo-color-green fw-bold">
                  What projects I’ll be learning
                </h1>
              </div>
              <div class="col-lg-6 col-xl-6">
                <div
                  class="accordion container"
                  id="accordionPanelsStayOpenExample"
                >
                  <div class="accordion-item">
                    <h2
                      class="accordion-header"
                      id="panelsStayOpen-headingOneOne"
                    >
                      <button
                        class="accordion-button py-2"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOneOne"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOneOne"
                      >
                        Website Creation
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOneOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="panelsStayOpen-headingOneOne"
                    >
                      <div class="accordion-body">
                        <ul class="mb-4">
                          <li>
                            Creating a new website on finding the appropriate
                            niche.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2
                      class="accordion-header"
                      id="panelsStayOpen-headingTwoOne"
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwoOne"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwoOne"
                      >
                        SEO
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTwoOne"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingTwoOne"
                    >
                      <div class="accordion-body">
                        <ul class="mb-4">
                          <li>
                            Working on page, off page and technical seo for the
                            created website.
                          </li>
                          <li>
                            Website SEO analysis using seo tools and complete
                            optimization for all website pages.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2
                      class="accordion-header"
                      id="panelsStayOpen-headingThreeOne"
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThreeOne"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThreeOne"
                      >
                        Google ads, Bing Ads
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseThreeOne"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingThreeOne"
                    >
                      <div class="accordion-body">
                        <ul class="mb-4">
                          <li>Introduction to Google ads & Bing ads.</li>
                          <li>
                            Practical execution on different campaign objectives
                            such as search ad, display ad, video ads, etc
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2
                      class="accordion-header"
                      id="panelsStayOpen-headingFourOne"
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseFourOne"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseFourOne"
                      >
                        Social media Ads course ?
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseFourOne"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingFourOne"
                    >
                      <div class="accordion-body">
                        <ul class="mb-4">
                          <li>
                            Run social media ad campaign on various platforms
                            like facebook, instagram, linkedin for your website
                            / blog.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2
                      class="accordion-header"
                      id="panelsStayOpen-headingFiveOne"
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseFiveOne"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseFiveOne"
                      >
                        E-mail marketing
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseFiveOne"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingFiveOne"
                    >
                      <div class="accordion-body">
                        <ul class="mb-4">
                          <li>Introduction to email marketing concepts.</li>
                          <li>
                            Run email marketing campaign and get leads for your
                            businesses.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2
                      class="accordion-header"
                      id="panelsStayOpen-headingSixOne"
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseSixOne"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseSixOne"
                      >
                        Content marketing
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseSixOne"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingSixOne"
                    >
                      <div class="accordion-body">
                        <ul class="mb-4">
                          <li>
                            Understanding how to engage with your audiences
                            through interactive content.
                          </li>
                          <li>
                            Community building, social media interactions,
                            comments, and feedback loops.
                          </li>
                          <li>
                            Building relationships with your audiences is
                            crucial for long-term success.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2
                      class="accordion-header"
                      id="panelsStayOpen-headingSevenOne"
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseSevenOne"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseSevenOne"
                      >
                        Google Analytics
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseSevenOne"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingSevenOne"
                    >
                      <div class="accordion-body">
                        <ul class="mb-4">
                          <li>
                            Connecting your website with Google Analytics and
                            determine the metrics for optimization such as
                            sessions, users, pageviews, bounce rate, and average
                            session durationwhich provide insights into overall
                            website performance.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2
                      class="accordion-header"
                      id="panelsStayOpen-headingEight"
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseEight"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseEight"
                      >
                        Affiliate marketing
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseEight"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingEight"
                    >
                      <div class="accordion-body">
                        <ul class="mb-4">
                          <li>
                            Familiarizing yourself with the concept of affiliate
                            marketing.
                          </li>
                          <li>How to become an affiliator in amazon. </li>
                          <li>
                            Roles of affiliates and merchants, commission
                            structures, and the affiliate marketing ecosystem.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-xl-6">
                <div>
                  <img src={About} class="img-fluid h-100" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section id="suitable" class="section-bg green-bg">
        <div class="container  py-5">
          <div class="mx-auto text-center mb-2">
            <h1 class="mb-0 text-white fw-bold">
              For whom the course is suitable for?
            </h1>
          </div>
          <div class="row py-4">
            <div class="col-lg-3 col-sm-3 col-6 lh-1">
              <img src={students} className="img-fluid" width={100} alt="" />
              <h4 class="h6  text-white lh-base px-3">
                College final year students from all streams
              </h4>
            </div>
            <div class="col-lg-3 col-sm-3 col-6 lh-1">
              <img src={education} className="img-fluid" width={100} alt="" />
              <h4 class="h6  text-white lh-base px-3">
                UG or PG Graduates with above 50% marks
              </h4>
            </div>
            <div class="col-lg-3 col-sm-3 col-6 lh-1">
              <img src={business} className="img-fluid" width={100} alt="" />
              <h4 class="h6  text-white lh-base px-3">
                People who have their own Businesses, Entrepreneurs
              </h4>
            </div>
            <div class="col-lg-3 col-sm-3 col-6 lh-1">
              <img src={marketing} className="img-fluid" width={100} alt="" />
              <h4 class="h6   text-white lh-base px-3">
                Prior understanding of digital marketing is not necessary
              </h4>
            </div>
          </div>
          <div class="mx-auto text-center mb-2">
            <h3 class="mb-0 text-white fw-normal">
              We are trusted by Millions of learners around the world with 14
              years of service
            </h3>
          </div>
          <div class="d-grid gap-3 d-sm-flex justify-content-sm-center mt-3">
            <a
              class="btn btn-primary btn-lg px-4 me-sm-3"
              href={DownloadPdf}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </section>
      <div class="container-fluid about py-5">
        <div class="container py-5">
          <div class="row g-5 align-items-center">
            <div class="col-lg-5">
              <div class="h-100">
                <img src={aboutimg} class="img-fluid w-100 h-100" alt="" />
              </div>
            </div>
            <div class="col-lg-7 course-suitable">
              <h1 class="mb-4 fw-bold">Learning journey </h1>
              <p class="mb-4">
                Our Digital marketing program is offered on both online and
                offline classrooms
              </p>
              <div class="row gy-2 gx-4 mb-4">
                <div class="col-sm-6">
                  <p class="mb-0">
                    <i class="fa fa-arrow-right text-primary me-2"></i>Weekly
                    live instructed classes
                  </p>
                </div>
                <div class="col-sm-6">
                  <p class="mb-0">
                    <i class="fa fa-arrow-right text-primary me-2"></i>
                    Working with large projects
                  </p>
                </div>
                <div class="col-sm-6">
                  <p class="mb-0">
                    <i class="fa fa-arrow-right text-primary me-2"></i>Live boot
                    camps relevant to industry
                  </p>
                </div>
                <div class="col-sm-6">
                  <p class="mb-0">
                    <i class="fa fa-arrow-right text-primary me-2"></i>Industry
                    Recognized certifications
                  </p>
                </div>
                <div class="col-sm-6">
                  <p class="mb-0">
                    <i class="fa fa-arrow-right text-primary me-2"></i>Attending
                    mock interviews & Resume preparation
                  </p>
                </div>
                <div class="col-sm-6">
                  <p class="mb-0">
                    <i class="fa fa-arrow-right text-primary me-2"></i>Getting
                    ready for placement
                  </p>
                </div>
              </div>
              <div class="d-grid gap-3 d-sm-flex justify-content-sm-left mt-3">
                <a
                  class="btn btn-primary btn-lg px-4 me-sm-3"
                  href={DownloadPdf}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="toolsTechnologies" class="py-5">
        <div class="container align-items-lg-center">
          <div class="mx-auto text-center mb-3">
            <h1 class="mb-0 text-white fw-bold">
              Tools & Technologies Covered
            </h1>
          </div>
          <div class="container">
            <div class="row  text-center">
              <div class="col-lg-2 col-4 p-2">
                <img src={technology01} class="img-fluid" alt="" />
              </div>
              <div class="col-lg-2 col-4 p-2">
                <img src={technology02} class="img-fluid" alt="" />
              </div>
              <div class="col-lg-2 col-4 p-2">
                <img src={technology03} class="img-fluid" alt="" />
              </div>
              <div class="col-lg-2 col-4 p-2">
                <img src={technology04} class="img-fluid" alt="" />
              </div>
              <div class="col-lg-2 col-4 p-2 ">
                <img src={technology05} class="img-fluid" alt="" />
              </div>
              <div class="col-lg-2 col-4 p-2">
                <img src={technology06} class="img-fluid" alt="" />
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-4  p-2 ">
                <img src={technology07} class="img-fluid" alt="" />
              </div>
              <div class="col-lg-2 col-4 p-2">
                <img src={technology08} class="img-fluid" alt="" />
              </div>
              <div class="col-lg-2 col-4 p-2">
                <img src={technology09} class="img-fluid" alt="" />
              </div>
              <div class="col-lg-2 col-4 p-2">
                <img src={technology10} class="img-fluid" alt="" />
              </div>
              <div class="col-lg-2 col-4 p-2">
                <img src={technology11} class="img-fluid" alt="" />
              </div>
              <div class="col-lg-2 col-4 p-2">
                <img src={technology12} class="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="features">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-sm-12">
              <div className="py-5 ">
                <div className="section-title">
                  <h1 class="mb-4 fw-bold ">
                    Job Roles available after completing digital marketing
                    course
                  </h1>
                </div>
                <p>
                  Digital marketing encompasses various job roles that
                  contributing to different aspects of online marketing
                  strategies, campaigns andanalytics. Here is an overview of
                  some common job roles available for digital marketers:
                </p>
              </div>
            </div>
          </div>
          <div className="row pb-5">
            <div className="col-lg-3">
              <ul className="nav nav-tabs flex-column">
                <li className="nav-item">
                  <a
                    className="nav-link active show"
                    data-bs-toggle="tab"
                    href="#tab-1"
                  >
                    SEO Analyst
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-capitalize"
                    data-bs-toggle="tab"
                    href="#tab-2"
                  >
                    Performance Marketer
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-capitalize"
                    data-bs-toggle="tab"
                    href="#tab-3"
                  >
                    Social media analyst
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-capitalize"
                    data-bs-toggle="tab"
                    href="#tab-4"
                  >
                    Digital marketing executive
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-capitalize"
                    data-bs-toggle="tab"
                    href="#tab-5"
                  >
                    Email marketer
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-capitalize"
                    data-bs-toggle="tab"
                    href="#tab-6"
                  >
                    Digital marketing specialist
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-9 mt-4 mt-lg-0">
              <div className="tab-content">
                <div className="tab-pane active show" id="tab-1">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1 d-flex align-items-center justify-content-center">
                      <p>
                        An SEO (Search Engine Optimization) Analyst is typically
                        responsible for improving a website's visibility in
                        search engine results pages (SERPs) through various
                        strategies and techniques. Implementing on-page and
                        off-page SEO techniques to improve website ranking are
                        the main key parts of this job role.
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src={gallery1} class="img-fluid" alt="gallery1" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-2">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1 d-flex align-items-center justify-content-center">
                      <p>
                        A Performance Marketer is responsible for designing,
                        implementing, and managing marketing campaigns with a
                        primary focus on achieving measurable results and
                        driving specific key performance indicators such as
                        sales, leads, conversionsand ROI
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src={gallery2} class="img-fluid" alt="gallery2" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-3">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1 d-flex align-items-center justify-content-center">
                      <p>
                        A Social Media Analyst plays a crucial role in
                        understanding, analyzing and optimizing social media
                        strategies and campaigns for businesses or
                        organizations.
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src={gallery3} class="img-fluid" alt="gallery3" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-4">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1 d-flex align-items-center justify-content-center">
                      <p>
                        A Digital Marketing Executive is responsible for
                        implementing, managing, and optimizing digital marketing
                        campaigns to achieve specific business objectives and
                        drive online engagement, traffic, and conversions
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src={gallery4} class="img-fluid" alt="gallery4" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-5">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1 d-flex align-items-center justify-content-center">
                      <p>
                        The role of an Email Marketer involves designing,
                        implementing, and optimizing email marketing campaigns
                        to engage subscribers, nurture leads, promote products
                        or services, and drive conversions.
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src={gallery5} class="img-fluid" alt="gallery5" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-6">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1 d-flex align-items-center justify-content-center">
                      <p>
                        A Digital Marketing Specialist is tasked with developing
                        and implementing digital marketing strategies to achieve
                        specific business objectives and enhance the online
                        presence of a brand, product, or service.
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src={gallery6} class="img-fluid" alt="gallery6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container-fluid booking py-5">
          <div class="container py-5">
            <h1 class="text-white mb-4 text-center">
              How can I join Digital Marketing Program?
            </h1>
            <p className="fs-5 text-white text-center">
              Enquire <i class="fa fa-arrow-right" aria-hidden="true"></i> Get
              Digital Marketing counselling
              <i class="fa fa-arrow-right" aria-hidden="true"></i> Attend our
              Digital marketing Demo session
              <i class="fa fa-arrow-right" aria-hidden="true"></i> Get cleared
              about the course
              <i class="fa fa-arrow-right" aria-hidden="true"></i> Enroll
            </p>
            <div class="row g-5 py-5 align-items-center">
              <div class="col-lg-6">
                <h3 class="text-white">Grow with Peopleclick learning</h3>
                <div class="row g-4">
                  <div class="col-12">
                    <div class="service-content-inner d-flex align-items-center">
                      <div class="service-icon p-4 ">
                        <img src={icon2} width={190} class="img-fluid" alt="" />
                      </div>
                      <div class="service-content ">
                        <h5 class="mb-2  text-light">100% Placement support</h5>
                        <p class="mb-0  text-light">
                          We will make sure you obtain your dream job and
                          introduce you to fulfilling career options in digital
                          marketing through our career services.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="service-content-inner d-flex align-items-center ">
                      <div class="service-icon p-4">
                        <img src={icon3} width={200} class="img-fluid" alt="" />
                      </div>
                      <div class="service-content">
                        <h5 class="mb-2  text-light">Interview Preparations</h5>
                        <p class="mb-0  text-light">
                          We've developed a training session that will
                          confidently get you ready for job interviews by
                          analyzing the most often asked interview questions.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="service-content-inner d-flex align-items-center text-light ">
                      <div class="service-icon p-4">
                        <img src={icon5} width={300} class="img-fluid" alt="" />
                      </div>
                      <div class="service-content ">
                        <h5 class="mb-2  text-light">Career Guidance</h5>
                        <p class="mb-0 pr-2">
                          Our committed program mentors are seasoned experts who
                          will help you with the course material, make sure you
                          are aware of events occurring in class, and inspire
                          you to advance in your academic career.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div>
                  <img src={digitalClass} class="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid guide py-5">
          <div className="container">
            <div className="mx-auto text-center mb-3">
              <h1 className="mb-0">Digital marketing course modules</h1>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div className="card">
                  <img className="card-img-top" src={myImage1} alt="Package1" />
                  <div className="card-body">
                    <h3 className="card-title py-2">
                      Master Program in Digital marketing
                    </h3>
                    <h5 class="py-2 text-primary">
                      <span>Duration: 3 months </span>
                    </h5>
                    <p className="card-text">
                      Digital marketing fundamentals, Word-press web
                      development, SEO, SEM, SMM, Email marketing, Affiliate,
                      You-tube marketing, All tools will be covered
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div className="card">
                  <img className="card-img-top" src={myImage2} alt="Package1" />
                  <div className="card-body">
                    <h3 className="card-title py-2">
                      Professional Diploma in Digital marketing
                    </h3>
                    <h5 class="py-2 text-primary">
                      <span>
                        Duration: Total 6 months ( Including Internship )
                      </span>
                    </h5>
                    <p className="card-text">
                      Fundamental of Digital marketing, word-press web
                      development, SEO, SEM, SMM, Email marketing, Affiliate
                      marketing, All tools will be covered, 3 months internship
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="alumniBg" class="py-5">
        <div class="container align-items-lg-center">
          <div class="mx-auto text-center mb-3">
            <h1 class="mb-0 text-white fw-bold">Our Alumni work at</h1>
          </div>
          <div class="container">
            <div class="row  text-center">
              <div class="col-lg-2 col-4 p-2">
                <img src={alumni01} class="img-fluid" alt="" />
              </div>
              <div class="col-lg-2 col-4 p-2">
                <img src={alumni02} class="img-fluid" alt="" />
              </div>
              <div class="col-lg-2 col-4 p-2">
                <img src={alumni03} class="img-fluid" alt="" />
              </div>
              <div class="col-lg-2 col-4 p-2">
                <img src={alumni04} class="img-fluid" alt="" />
              </div>
              <div class="col-lg-2 col-4 p-2 ">
                <img src={alumni05} class="img-fluid" alt="" />
              </div>
              <div class="col-lg-2 col-4 p-2">
                <img src={alumni06} class="img-fluid" alt="" />
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-4  p-2">
                <img src={alumni07} class="img-fluid" alt="" />
              </div>
              <div class="col-lg-2 col-4 p-2">
                <img src={alumni08} class="img-fluid" alt="" />
              </div>
              <div class="col-lg-2 col-4 p-2">
                <img src={alumni09} class="img-fluid" alt="" />
              </div>
              <div class="col-lg-2 col-4 p-2">
                <img src={alumni10} class="img-fluid" alt="" />
              </div>
              <div class="col-lg-2 col-4 p-2">
                <img src={alumni11} class="img-fluid" alt="" />
              </div>
              <div class="col-lg-2 col-4 p-2">
                <img src={alumni12} class="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="container-fluid guide py-5">
        <div class="container py-5">
          <div className="mx-auto text-center mb-3">
            <h1 className="mb-0">Peopleclick learning’s success story</h1>
          </div>
          <div class="row g-4">
            <div class="col-md-6 col-lg-3">
              <div class="guide-item">
                <div class="guide-img">
                  <img
                    src={Rishwanth}
                    class="img-fluid w-100 rounded-top"
                    alt=""
                  />
                </div>
                <div class="guide-title text-center rounded-bottom px-3">
                  <div class="guide-title-inner">
                    <h4 class="mt-3">Rishwanth</h4>
                    <p class="mb-2 fw-medium text-dark">
                      Placed in: Roots india
                    </p>
                    <p className="small">
                      Peopleclick's digital marketing classes are where I
                      learned about digital marketing. I'm currently working as
                      digital marketing executive at Roots india Their mock
                      interviews and placement training helped me to get here.
                      Many thanks for Peopleclick Learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="guide-item">
                <div class="guide-img">
                  <img
                    src={Sabarivelan}
                    class="img-fluid w-100 rounded-top"
                    alt=""
                  />
                </div>
                <div class="guide-title text-center rounded-bottom px-3">
                  <div class="guide-title-inner">
                    <h4 class="mt-3">Sabarivelan</h4>
                    <p class="mb-2 fw-medium text-dark">
                      Placed in: Accenture{" "}
                    </p>
                    <p className="small">
                      I had an amazing experience using Peopleclick Learning.
                      Digital marketing course taught me a lot. It was an
                      entertaining and educational session. It was a fantastic
                      educational opportunity. I'm excited for further learning
                      possibilities with Peopleclick Learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="guide-item">
                <div class="guide-img">
                  <img src={Akash} class="img-fluid w-100 rounded-top" alt="" />
                </div>
                <div class="guide-title text-center rounded-bottom px-3">
                  <div class="guide-title-inner">
                    <h4 class="mt-3">Akash</h4>
                    <p class="mb-2 fw-medium text-dark">Placed in: Allianz</p>
                    <p className="small">
                      I recently completed my digital marketing course at
                      Peopleclick Learning, and if you're interested in learning
                      about digital marketing, I highly recommend it. All
                      subjects are covered in great detail in this course,
                      beginning with the foundations. The practical
                      comprehension of the principles gained from working on
                      live campaigns was priceless.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="guide-item">
                <div class="guide-img">
                  <img
                    src={Hrithick}
                    class="img-fluid w-100 rounded-top"
                    alt=""
                  />
                </div>
                <div class="guide-title text-center rounded-bottom px-3">
                  <div class="guide-title-inner">
                    <h4 class="mt-3">Hrithick</h4>
                    <p class="mb-2 fw-medium text-dark">Placed in:Genpact</p>
                    <p className="small">
                      I had an excellent experience taking the digital marketing
                      course with Peopleclick Learning. They offered
                      comprehensive instruction and practical expertise with all
                      of the digital marketing tools. I would advise everyone
                      just getting started in the digital realm to do this. I
                      went to their weekend class.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-grid gap-3 d-sm-flex justify-content-sm-center mt-3">
            <a
              class="btn btn-primary btn-lg px-4 me-sm-3"
              href={DownloadPdf}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Book free consultation
            </a>
          </div>
        </div>
      </div>
      <section className="conainter-fluid subscribe">
        <div
          class="accordion container py-5"
          id="accordionPanelsStayOpenExample"
        >
          <div>
            <h1 class="text-center text-light py-3">
              FAQ – Digital marketing course
            </h1>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                1. What is digital marketing ?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div class="accordion-body">
                Digital marketing is the component of marketing that uses the
                internet and online based digital technologies. Digital
                marketing is also called as online marketing. It is the
                promotion of brands to connect with potential customers using
                internet and other forms of digital communication
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                2. Why should I choose a digital marketing career ?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div class="accordion-body">
                One of the major advantages in choosing a digital marketing
                career is the variety of different career paths available to
                you. Jobs in this field are incredibly diverse, allowing you to
                specialize in SEO, Google ads, Social media and much more.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                3. Can I complete digital marketing course in two months?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div class="accordion-body">
                Yes! you can successfully complete and get certified in Digital
                marketing in two months.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingFour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFour"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFour"
              >
                4. Will I get Placements once I completed digital marketing
                course ?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingFour"
            >
              <div class="accordion-body">
                Yes! You can get placement support and assistance once you
                finished the course successfully.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingFive">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFive"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFive"
              >
                5. What will be the salary of digital marketing fresher in
                Coimbatore?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFive"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingFive"
            >
              <div class="accordion-body">
                Depending upon their skill set and performance it go by 3.5lpa
                for a fresher. For experienced candidates they can earn up to
                6lpa and more
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingSix">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseSix"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseSix"
              >
                6. What makes People-click learning a good choice for studying
                digital marketing course ?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseSix"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingSix"
            >
              <div class="accordion-body">
                People-click Learning have a team of experienced trainers who
                use Practical hands-on approach to teaching their candidates to
                gain practical skills so they can apply to real-world scenarios.
                They also offer flexible training options including online and
                offline classes
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
