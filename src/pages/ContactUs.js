import React from "react";
import CustomSection from "../shared/components/customSection/CustomSection";

const ContactUs = () => {
  return (
    <>
      <CustomSection heading="Contact US">
        <div className="container my-5">
          <div class="card text-center">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="container">
                  <img
                    src="https://img.freepik.com/free-photo/portrait-woman-customer-service-worker_144627-37948.jpg"
                    alt="contact-ivaas-outsourcing"
                    width="100%"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div class="card-body mt-5">
                  <h5 class="card-title">Ivaas Outsourcing</h5>
                  <p class="card-text">
                    is the immigration consultants offering visa Service, study
                    visa, investor visa, and immigration to Canada, Australia &
                    Germany and other countries as well.
                  </p>
                  <dl className="row">
                    <dt className="col-sm-2 text-center grad-theme-color my-auto p-3 rounded">
                      <i className="fad fa-phone-plus text-light"></i>
                    </dt>
                    <dd className="col-sm-10">
                      <li class="list-group text-start">
                        <a href="tel:9769601410">+91-9769601410</a>
                      </li>
                      <li class="list-group text-start">
                        <a href="tel:8076863156">+91-8076863156</a>
                      </li>
                    </dd>
                  </dl>
                  <dl className="row">
                    <dt className="col-sm-2 text-center grad-theme-color my-auto p-3 rounded">
                      <i className="fab fa-whatsapp text-light"></i>
                    </dt>
                    <dd className="col-sm-10">
                      <li class="list-group text-start">
                        <a
                          href={`https://wa.me/${9769601410}?text=Hey! Ivaas Outsourcing, I am interested in your services`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          +91-9769601410
                        </a>
                      </li>
                      <li class="list-group text-start">
                        <a
                          href={`https://wa.me/${8076863156}?text=Hey! Ivaas Outsourcing, I am interested in your services`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          +91-8076863156
                        </a>
                      </li>
                    </dd>
                  </dl>
                  <dl class="row">
                    <dt class="col-sm-2 text-center grad-theme-color my-auto p-3 rounded">
                      <i class="fa fa-envelope text-light"></i>
                    </dt>
                    <dd class="col-sm-10 text-start my-auto">
                      <a href="mailto:info@ivaasoutsourcing.com">
                        info@ivaasoutsourcing.com
                      </a>
                    </dd>
                  </dl>
                  <dl class="row">
                    <h5 class="card-title">Social Links</h5>
                    <a
                      href="/contact-us"
                      target="_blank"
                      rel="noreferrer"
                      style={{ display: "contents" }}
                    >
                      <dt class="col-sm-3 text-center grad-theme-color my-auto mx-3 p-2 rounded">
                        <i class="fab fa-facebook-f text-light"></i>
                      </dt>
                    </a>
                    <a
                      href="https://www.instagram.com/ivaas_outsourcing/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ display: "contents" }}
                    >
                      <dt class="col-sm-3 text-center grad-theme-color my-auto mx-3 p-2 rounded">
                        <i class="fab fa-instagram text-light"></i>
                      </dt>
                    </a>
                    <a
                      href="/contact-us"
                      target="_blank"
                      rel="noreferrer"
                      style={{ display: "contents" }}
                    >
                      <dt class="col-sm-3 text-center grad-theme-color my-auto  mx-3 p-2 rounded">
                        <i class="fab fa-youtube text-light"></i>
                      </dt>
                    </a>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CustomSection>
    </>
  );
};

export default ContactUs;
