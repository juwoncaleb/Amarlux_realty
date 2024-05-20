// pages/property/[id].js

import React from "react";
import { useRouter } from "next/router";
import { data } from "../../utils/data"; // Importing the data from the data.js file
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDisclosure } from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalClosebutton,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const PropertyDetails = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  let settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2300,
    pauseOnHover: false,
    arrow: true,
    focusOnSelect: true,
  };

  const router = useRouter();
  const { id } = router.query;
  const property = data.find((property) => property.id === parseInt(id));

  if (!property) return <p>Property not found</p>;

  return (
    <div className="property_page">
      <div className="carousel">
        <div
          className="listing_details darken-background"
          style={{ backgroundImage: `url(${property.images[0]})` }}
        >
          <center>
            <p className="prop_name">{property.name} </p>
          </center>
        </div>
      </div>
      <div className="propert_gallery">
        <p className="gallery">PROPERTY GALLERY</p>
        <div className="grid-cols-3 grid gap-4 ">
          {property.images.map((imageUrl, index) => (
            <div
              key={index}
              className="image-item lg:grid-cols-1/3 sm:grid-cols-1"
            >
              <div
                className="grid_images"
                style={{ backgroundImage: `url(${imageUrl})` }}
              >
                <center>
                  <img
                    className="eye"
                    width="90"
                    height="90"
                    src="https://img.icons8.com/ios-glyphs/90/FFFFFF/visible--v1.png"
                    alt="visible--v1"
                    // Hide the image initially using opacity
                  />
                  <>
                    <button onClick={onOpen}>Open Modal</button>

                    <Modal isOpen={isOpen} onClose={onClose}>
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>Modal Title</ModalHeader>
                        <ModalClosebutton />
                        <ModalBody>oefskdcefs</ModalBody>

                        <ModalFooter>
                          <button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                          </button>
                          <button variant="ghost">Secondary Action</button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  </>
                </center>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between gap-10">
          <div className="prop_information">
            <center>
              <p className="property_price mt-14">{property.price}</p>
              <p className="property_list_name">{property.name}</p>
              <p className="property_information">
                <span className="mr-4">{property.bed} Beds |</span>{" "}
                <span className="mr-4">{property.bath} Baths | </span>
                {property.lotArea} SQRft
              </p>
              <button className="inq_btn">INQUIRE NOW</button>
            </center>
            <div className="propertt_detali">
              <div>
                <hr className="line" />
                <div className="flex prop_de lg:gap-10">
                  <p className="properties_des_header">DESCRIPTION</p>
                  <p className="properties_des">{property.description}</p>
                </div>
                <hr className="line" />
             

                <div className="flex lg:gap-32 md:gap-32 gap-20">
                  <p className="properties_des_header">LOCATION</p>
                  <p className="properties_des">{property.location}</p>
                </div>
                <hr className="line" />
                <div className="flex lg:gap-32 md:gap-32 gap-20">
                  <p className="properties_des_header">STATUS</p>
                  <p className="properties_des">{property.status}</p>
                </div>
              </div>
              <hr className="line " />

              <div className=" flex lg:gap-32 md:gap-20 ">
                  <p className="properties_des_header">
                    SHARE <br /> PROPERTY
                  </p>
                  <div className="flex gap-6">
                    <img
                      className="share_icon"
                      width="40"
                      height="50"
                      src="https://img.icons8.com/ios/50/facebook-new.png"
                      alt="facebook-new"
                    />
                    <img
                      className="share_icon"
                      width="40"
                      height="50"
                      src="https://img.icons8.com/ios-filled/50/new-post.png"
                      alt="new-post"
                    />
                    <img
                      className="share_icon"
                      width="40"
                      height="20"
                      src="https://img.icons8.com/ios/50/twitter--v1.png"
                      alt="twitter--v1"
                    />
                  </div>
                </div>
           
              <div>
                <hr className="line" />
                <div className=" gap-20">
                  <p className="properties_des_header text-center">
                    OTHER AMENITIES
                  </p>
                  
                  <div className="flex other gap-32">
                    <p>Flooring</p>
                    <p>
                      {" "}
                      {property.flooring
                        ? property.flooring
                        : "Information Unknown"}
                    </p>
                  </div>
                  <div className="flex other gap-32">
                    <p>Architecture Style</p>
                    <p>
                      {" "}
                      {property.architectureStyle
                        ? property.architectureStyle
                        : "Information Unknown"}
                    </p>
                  </div>
                  <div className="flex other gap-32">
                    <p>Full Bathroom</p>
                    <p>
                      {" "}
                      {property.fullBathroom
                        ? property.fullBathroom
                        : "Information Unknown"}
                    </p>
                  </div>
                  <div className="flex other gap-32">
                    <p>Half Bathroom</p>
                    <p>
                      {" "}
                      {property.halfBathroom
                        ? property.halfBathroom
                        : "Information Unknown"}
                    </p>
                  </div>

                  <div className="flex other gap-32">
                    <p>Living Area</p>
                    <p>
                      {" "}
                      {property.livingArea
                        ? property.livingArea
                        : "Information Unknown"}
                    </p>
                  </div>
                  <div className="flex other gap-32">
                    <p>Year Built</p>
                    <p>
                      {" "}
                      {property.yearBuilt
                        ? property.yearBuilt
                        : "Information Unknown"}
                    </p>
                  </div>

                  <div className="flex other gap-32">
                    <p>Status</p>
                    <p>
                      {" "}
                      {property.status
                        ? property.status
                        : "Information Unknown"}
                    </p>
                  </div>
                </div>{" "}
              </div>
              <div className="flex agent_info gap-4 mt-14 justify-around">
                <img className="kum_banner" src="./../lapp.jpg" />
                <div>
                <p className='amarachi '>Amarachi Odife</p>
                  <p className="kum_bio">
                    Broker Associate, #1 Realtor in Austin (2020 & 2021), #3
                    Realtor in Texas, #35 Realtor in the Country, Member of
                    Elite25, Member of Luxury League Austin, Member of Sotheby’s
                    International Realty Market Leaders
                  </p>
                  <button className="inq_btn">CONTACT AGENT</button>
                </div>
                {/* <div className="flex gap-10 kum_contact_info">
            <div>
              <p className="phone_number">PHONE</p>
              <p className="cell">838392839</p>
            </div>
            <div>
              <p className="phone_number">EMAIL</p>
              <p className="cell">kumara@sothebyrealty.com</p>
            </div>
          </div> */}
              </div>
            </div>
            {/* Display other property details */}
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
