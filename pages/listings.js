import Link from "next/link";
import React, { useState, useEffect } from "react";
import googleOneTap from "google-one-tap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { fetchProperties } from "@/lib/contentful";
import {
  AnimatePresence,
  motion,
  stagger,
  useScroll,
  useTransform,
} from "framer-motion";

export default function Page({ properties }) {
  const option = {
    client_id:
      "711392695392-53glhbgfacnh3a5tatq5978oolannhk5.apps.googleusercontent.com", // required
    auto_select: false, // optional
    cancel_on_tap_outside: false, // optional
    context: "signin", // optional
  };

  useEffect(() => {
    googleOneTap(option, (response) => {
      // Log the response for debugging
      console.log(
        "Response from Google One Tap:",
        response,
        response.credential
      );
    });
  }, []);
  const [property, setProperty] = useState(null);
  console.log(property);
  useEffect(() => {
    setProperty(properties);
  }, [properties]); // Re-run only when properties changes

  const transformedData = properties.map((property) => {
    return {
      id: property.sys.id,
      bathroom: property.fields.bathroom,
      bedroom: property.fields.bedroom,
      squaremeter: property.fields.squareMeters,
      location: property.fields.location,
      title: property.fields.title,
      thumbnailUrl: property.fields.thumbnail.fields.file.url,
      price: property.fields.price.toLocaleString("en-NG", {
        style: "currency",
        currency: "NGN",
      }),
    };
  });

  if (!property) {
    return (
      <div className="loading_image">
        <center>
          <img className="logo_height" src="../../lg.png" alt="logo" />
        </center>
      </div>
    );
  }

  const listings = property.data;

  return (
    <div>
      <Header />
      <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.6,
            delay: 0.2,
          }}
          className=""
        > <p className="exclusive_listings text-center">
        Exclusive <br /> Listing
      </p>
          </motion.div>
     
      <div className="grid frame_div grid-cols-1 lg:grid-cols-3 ">
        {transformedData.map((property) => (
          <div key={property.id} className="property-card">
             <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.6,
            delay: 0.2,
          }}
          className=""
        > <Link href={`/property/${property.id}`}>
              <img
                className="listing_property"
                src={property.thumbnailUrl}
                alt={property.title}
              />
              <p className="property_price mt-2">{property.price}</p>
              <p className="property_location">{property.location}</p>
              <p className="prop_deb mb-10">
                {property.bedroom}  Bed | {property.bathroom}  bath |  {property.squaremeter} SQR/M
              </p>
            </Link>
          </motion.div>
           
          </div>
        ))}
      </div>
      <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.6,
            delay: 0.2,
          }}
          className=""
        > <div className="cta_div flex ">
        <div className="">
          <p className="amralux_text_head text-center">Amarlux Realty</p>
          <p className="amralux_text text-center">
            We make home buying and selling, easy and stress free. Ensuring you
            <br /> get the best deal FAST{" "}
          </p>
          <center>
            <button className="contact">Let us Talk</button>
          </center>
        </div>
      </div>
          </motion.div>
     
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const properties = await fetchProperties();
  return {
    props: {
      properties,
    },
  };
}
