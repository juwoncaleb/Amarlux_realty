import Link from "next/link";
import React from "react";
import Header from "./components/Header";

export default function Service() {
  return (
    <div>
      <Header/>
      <div className="frame_div">
        <p className="service_head">SERVICES</p>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Link href="./commercial">
            <div className="service_grid">
              <img
                loading="eager"
                alt="Commercial Real Estate"
                src="https://assets-global.website-files.com/65127446160a3ff5b1e6186c/6517a349e8ce760bff8079f2_service-01.svg"
                class="service-img"
              />
              <p className="service_header">Commercial Real Estate</p>
              <p className="service_sub">
                Commercial real estate encompasses properties used for business
                purposes, such as offices, retail spaces, and more.
              </p>
              <div className="flex learn_more gap-6 mt-8">
                <p>Learn More</p>
                <img
                  className="arrow"
                  width="30"
                  height="50"
                  src="https://img.icons8.com/ios/50/circled-up-right-2.png"
                  alt="circled-up-right-2"
                />
              </div>
            </div>
          </Link>
          <Link href="./inspection">
            <div className="service_grid">
              {" "}
              <img src="https://assets-global.website-files.com/65127446160a3ff5b1e6186c/6517a33229b7fe98f646b64e_service-02.svg" />
              <p className="service_header">Home Inspection</p>
              <p className="service_sub">
                It involves a thorough assessment of a home condition,
                identifying potential issues or needed repairs.
              </p>
              <div className="flex learn_more gap-6 mt-8">
                <p>Learn More</p>
                <img
                  className="arrow"
                  width="30"
                  height="50"
                  src="https://img.icons8.com/ios/50/circled-up-right-2.png"
                  alt="circled-up-right-2"
                />
              </div>
            </div>
          </Link>
          <Link href="./relocation">
            <div className="service_grid">
              {" "}
              <img
                width="60"
                height="80"
                src="https://assets-global.website-files.com/65127446160a3ff5b1e6186c/6517a308cde9c5589d0f16bf_service-03.svg"
                alt="building"
              />
              <p className="service_header">Relocation Services</p>
              <p className="service_sub">
                Relocation services streamline the process of moving individuals
                or families to a new location.
              </p>
              <div className="flex learn_more gap-6 mt-8">
                <p>Learn More</p>
                <img
                  className="arrow"
                  width="30"
                  height="50"
                  src="https://img.icons8.com/ios/50/circled-up-right-2.png"
                  alt="circled-up-right-2"
                />
              </div>
            </div>
          </Link>

          <Link href="./interior">
            <div className="service_grid">
              {" "}
              <img
                width="60"
                height="80"
                src="https://assets-global.website-files.com/65127446160a3ff5b1e6186c/6517a0212fc953e5281036ee_service-04.svg"
                alt="building"
              />
              <p className="service_header">Interior Design Service</p>
              <p className="service_sub">
                Interior design is the art of enhancing the interior spaces of a
                property to create a functional, and harmonious environment.
              </p>
              <div className="flex learn_more gap-6 mt-8">
                <p>Learn More</p>
                <img
                  className="arrow"
                  width="30"
                  height="50"
                  src="https://img.icons8.com/ios/50/circled-up-right-2.png"
                  alt="circled-up-right-2"
                />
              </div>
            </div>
          </Link>

          <Link href="./propertyManagement">
            <div className="service_grid">
              {" "}
              <img
                width="60"
                height="80"
                src="https://assets-global.website-files.com/65127446160a3ff5b1e6186c/6517a00046135bc56a4faf22_service-05.svg"
                alt="building"
              />
              <p className="service_header">Property Management</p>
              <p className="service_sub">
                Property management involves overseeing and maintaining real
                estate assets on behalf of property owners.
              </p>
              <div className="flex learn_more gap-6 mt-8">
                <p>Learn More</p>
                <img
                  className="arrow"
                  width="30"
                  height="50"
                  src="https://img.icons8.com/ios/50/circled-up-right-2.png"
                  alt="circled-up-right-2"
                />
              </div>
            </div>
          </Link>

          <Link href="./construction">
            <div className="service_grid">
              {" "}
              <img
                width="60"
                height="80"
                src="https://assets-global.website-files.com/65127446160a3ff5b1e6186c/65179fc246135bc56a4f762a_service-06.svg"
                alt="building"
              />
              <p className="service_header">New Construction</p>
              <p className="service_sub">
                It involves planning, designing, and executing the construction
                of a brand-new building or development.
              </p>
              <div className="flex learn_more gap-6 mt-8">
                <p>Learn More</p>
                <img
                  className="arrow"
                  width="30"
                  height="50"
                  src="https://img.icons8.com/ios/50/circled-up-right-2.png"
                  alt="circled-up-right-2"
                />
              </div>
            </div>
          </Link>

          <Link href="./investment">
            <div className="service_grid">
              {" "}
              <img
                width="60"
                height="80"
                src="https://assets-global.website-files.com/65127446160a3ff5b1e6186c/65179f78d6409bc0544b33aa_service-07.svg"
                alt="building"
              />
              <p className="service_header">Investment Properties</p>
              <p className="service_sub">
                Investment properties are real estate assets purchased with the
                intention of generating income or profit.
              </p>
              <div className="flex learn_more gap-6 mt-8">
                <p>Learn More</p>
                <img
                  className="arrow"
                  width="30"
                  height="50"
                  src="https://img.icons8.com/ios/50/circled-up-right-2.png"
                  alt="circled-up-right-2"
                />
              </div>
            </div>
          </Link>

          <Link href="./land">
            <div className="service_grid">
              {" "}
              <img
                width="60"
                height="80"
                src="https://assets-global.website-files.com/65127446160a3ff5b1e6186c/65179f3baf20c15eff006f12_service-08.svg"
                alt="building"
              />
              <p className="service_header">Land Acquistion</p>
              <p className="service_sub">
                Land acquisition involves the process of acquiring parcels of
                land for various purposes, such as development, or conservation.
              </p>
              <div className="flex learn_more gap-6 mt-4">
                <p>Learn More</p>
                <img
                  className="arrow"
                  width="30"
                  height="50"
                  src="https://img.icons8.com/ios/50/circled-up-right-2.png"
                  alt="circled-up-right-2"
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="cta_div flex ">
          <div className="">
            <p className="amralux_text_head text-center">Amarlux Realty</p>
            <p className="amralux_text text-center">
              We make home buying and selling, easy and stressfree. Ensuring you
              <br /> get the best deal for your money FAST{" "}
            </p>
            <center>
              <button className="contact">Let us Talk</button>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}
