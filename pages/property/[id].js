import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import googleOneTap from "google-one-tap";
import { fetchProperties } from "@/lib/contentful";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

async function fetchData(id) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
  };
  try {
    const res = await fetch(
      `http://127.0.0.1:1337/api/properties/${id}?populate=*`,
      options
    );
    if (!res.ok) {
      console.error(`Error: ${res.status} ${res.statusText}`);
      return null;
    }
    const response = await res.json();
    console.log("Fetched data:", response);
    return response;
  } catch (err) {
    console.error("Fetch error:", err);
    return null;
  }
}

export default function PropertyPage({ entry }) {
  console.log(entry);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState(null);

  useEffect(() => {
    if (id) {
      async function getData() {
        const data = await fetchData(id);
        if (data) {
          setProperty(data);
        }
      }
      getData();
    }
  }, [id]);

  // if (!property) {
  //   return (
  //     <div className="loading_image">
  //       <center>
  //         <img className="logo_height" src="../../lg.png" alt="logo" />
  //       </center>
  //     </div>
  //   );
  // }

  const openModalWithImage = (index) => {
    setSelectedImageIndex(index);
    onOpen();
  };
  const {
    title,
    thumbnail,
    bathroom,
    bedroom,
    bq,
    stories,
    popCeiling,
    status,
    cinema,
    description,
    location,
    pool,
    squareMeters,
    price,
    smartHome,
    yearBuilt,
    media,

    // ... other fields you want to display
  } = entry.fields;

  let fee = price.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
  });
  return (
    <div>
      <Header />
      <div className="carousel">
        <div
          className="listing_details darken-background"
          style={{ backgroundImage: `url(${thumbnail.fields.file.url})` }}
        >
          <center>
            <p className="prop_name">{title}</p>
          </center>
        </div>
        <center>
          <p className="property_price mt-14">{fee}</p>
          <p className="property_list_name"></p>
          <p className="property_information">
            <span className="mr-4"> Beds {bedroom} |</span>{" "}
            <span className="mr-4"> Baths {bathroom} | </span>
            {squareMeters} SQRft
          </p>
          <Link href="../../contact">
            <button className="inq_btn">INQUIRE NOW</button>
          </Link>
        </center>
        <div className="propert_gallery">
          <p className="gallery">PROPERTY GALLERY</p>

          <div className="md:grid-cols-3 grid gap-4 ">
            {media.map((image, index) => {
              const imageUrl = `https:${image.fields.file.url}`; // Ensure URL is prefixed with "https:"
              return (
                <div
                  key={image.sys.id}
                  className="listing_details darken-background"
                  style={{ backgroundImage: `url(${imageUrl})` }}
                >
                  <center>
                    <Button onClick={() => openModalWithImage(index)}>
                      <img
                        className="eye_icon"
                        width="50"
                        height="50"
                        src="https://img.icons8.com/ios/50/visible--v1.png"
                        alt="visible--v1"
                      />
                    </Button>
                  </center>
                  <Modal isOpen={isOpen} onClose={onClose} size="full">
                    <ModalOverlay bg="rgba(0, 0, 0, 0.4)" />
                    <ModalContent
                      maxWidth={{
                        base: "90%",
                        sm: "90%",
                        md: "55%",
                        lg: "45%",
                      }}
                    >
                      <ModalHeader>
                        {" "}
                        <p className="">{title}</p>
                      </ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <Carousel
                          selectedItem={selectedImageIndex}
                          showThumbs={true}
                          thumbWidth={80}
                          infiniteLoop={true}
                          showIndicators={false}
                          dynamicHeight={true}
                        >
                          {media.map((image) => (
                            
                            <div key={image.id}>
                              <img
                                src={`https:${image.fields.file.url}`}
                                alt=""
                              />
                            </div>
                          ))}
                        </Carousel>
                      </ModalBody>
                      <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                          Close
                        </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </div>
              );
            })}
          </div>

          <div className="flex justify-between mt-8 gap-10">
            <div className="prop_information">
              <div className="propertt_detali ">
              <p className="gallery">PROPERTY DETAILS</p>

                <div>
                  <hr className="line" />
                  <div className="md:flex  lg:gap-10">
                    <p className="properties_des_header">DESCRIPTION</p>
                    <p className="properties_des">{description}</p>
                  </div>
                  <hr className="line" />

                  <div className="md:flex lg:gap-32 md:gap-32 gap-20">
                    <p className="properties_des_header">LOCATION</p>
                    <p className="properties_des">{location}</p>
                  </div>
                  <hr className="line" />
                  <div className="md:flex lg:gap-32 md:gap-32 gap-20">
                    <p className="properties_des_header">STATUS</p>
                    <p className="properties_des">{status}</p>
                  </div>
                </div>
                <hr className="line " />

                <div className=" md:flex lg:gap-32 md:gap-20 ">
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
                    <p className="properties_des_header md:text-center">
                      OTHER AMENITIES
                    </p>

                    <div className="flex justify-start">
                      <div className="grid grid-cols-2 gap-10 properties_des">
                        <p>Stories</p>
                        <p> {stories}</p>
                        <p>POOL</p>
                        <p> {pool ? "True" : "false"}</p>
                        <p>POP CEILING</p>
                        <p> {popCeiling ? "True" : "false"}</p>
                        <p>smartHome</p>
                        <p>{smartHome ? "True" : "false"}</p>
                        <p>Boy's QUater</p>
                        <p> {bq ? "True" : "false"}</p>
                        <p>Year Built</p>
                        <p> {yearBuilt ? yearBuilt : "false"}</p>
                        <p>Status</p>
                        <p> {status ? "True" : "false"}</p>
                      </div>
                    </div>
                    <div className="md:flex other gap-32"></div>
                    <div className="md:flex other gap-32"></div>
                    <div className="md:flex other gap-32"></div>

                    <div className="md:flex other gap-32"></div>
                    <div className="md:flex other gap-32"></div>

                    <div className="md:flex other gap-32"></div>
                  </div>{" "}
                </div>
                <div className="flex agent_info gap-4 mt-14 justify-around">
                  <img className="kum_banner" src="./../lapp.jpg" />
                  <div>
                    <p className="amarachi ">Amarachi Odife</p>
                    <p className="kum_bio">
                      Broker Associate, #1 Realtor in Lagos (2020 & 2021), #3
                      Realtor in Texas, #35 Realtor in the Country, Member of
                      Elite25, Member of Luxury League Austin, Member of
                      Sotheby’s International Realty Market Leaders
                    </p>
                    <p className="kum_bio">
                      Broker Associate, #1 Realtor in Lagos (2020 & 2021), #3
                      Realtor in Texas, #35 Realtor in the Country, Member of
                      Elite25, Member of Luxury League Austin, Member of
                      Sotheby’s International Realty Market Leaders
                    </p>
                    <Link href="../../contact">
                      <button className="inq_btn">CONTACT AGENT</button>
                    </Link>
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
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const entries = await fetchProperties();
  const paths = entries.map((entry) => ({
    params: { id: entry.sys.id },
  }));

  return {
    paths,
    fallback: false, // Set to false to return a 404 if the ID is not found
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const entries = await fetchProperties();
  const entry = entries.find((entry) => entry.sys.id === id);

  return {
    props: {
      entry,
    },
  };
}
