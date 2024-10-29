"use client";
import Header from "@/components/Header";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { useFormik } from "formik";
import { Yup } from "@/validation/Validation";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const ContactUs = () => {
  const { errors, values, handleSubmit, handleChange } = useFormik({
    validationSchema: Yup,
    initialValues: {
      name: "",
      email: "",
      phone: "",
      guestcount: 0,
      descaboutwedding: "",
      location: "",
      date: "",
      photography: false,
      films: false,
      both: false,
    },
    onSubmit: (value) => {
      axios
        .post(`${process.env.NEXT_PUBLIC_DATABASE_URL}/contact-us.json`, value)
        .then((res) => {
          if (res.data.name != "") {
            toast.success("Your Data Submited Succesful");
          } else {
            toast.error("Error Please Try Again");
          }
        });
    },
  });

  return (
    <>
      <div className="bg-[#f0e9e0]">
        <div className="min-h-[80vh] contactusimg">
          <Toaster />
          <Header textc={"white"} />
        </div>
        <div className="mt-10 gap-5 border-2 flex flex-col items-center mx-auto min-h-[400px] max-w-5xl">
          <p className="font-serif text-sm">
            Please fill in the form below and provide as much details as
            possible to help us create an accurate quote.
          </p>
          <p className="font-serif text-sm">
            We will try to get back within 48hrs , give us a call on the number
            below if you don’t hear from us or if its a last minute enquiry.
          </p>
          <p className="font-serif text-sm">
            Please go through our FAQ section to find answers to some common
            questions.
          </p>
          <p className="font-serif text-sm">hello@houseontheclouds.com</p>
          <p className="font-serif text-sm">+91 996467 27383</p>
          <p className="font-serif text-sm">Mumbai . Bangalore</p>
          <div className="w-full gap-5  flex h-[40px]  justify-center items-center">
            <FaInstagram className="text-2xl" />
            <FaFacebook className="text-2xl" />
            <FaTwitter className="text-2xl" />
          </div>

          <div class="max-w-3xl font-serif mx-auto bg-white p-8 rounded-xl shadow-md">
            <h1 class="text-2xl font-bold mb-6">Wedding Inquiry Form</h1>
            <form method="post" onSubmit={handleSubmit}>
              <div class="mb-4">
                <label class="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  class="w-full px-3 py-2 border rounded-xl"
                  placeholder="Your Name"
                />
              </div>
              <div class="mb-4">
                <label class="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  class="w-full px-3 py-2 border rounded-xl"
                  placeholder="Your Email"
                />
              </div>
              <div class="mb-4">
                <label class="block text-gray-700">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  class="w-full px-3 py-2 border rounded-xl"
                  placeholder="Your Phone"
                />
              </div>
              <div class="mb-4">
                <label class="block text-gray-700">Estimate Guest Count</label>
                <input
                  type="number"
                  name="guestcount"
                  value={values.guestcount}
                  onChange={handleChange}
                  class="w-full px-3 py-2 border rounded-xl"
                  placeholder="Estimate Guest Count"
                />
              </div>
              <div class="mb-4">
                <label class="block text-gray-700">
                  Tell us more about your wedding - event flow, venues
                </label>
                <textarea
                  name="descaboutwedding"
                  value={values.descaboutwedding}
                  onChange={handleChange}
                  class="w-full px-3 py-2 border rounded-xl"
                  placeholder="Event Flow, Venues"
                ></textarea>
              </div>
              <div class="mb-4">
                <label class="block text-gray-700">
                  Location of the wedding
                </label>
                <input
                  type="text"
                  name="location"
                  value={values.location}
                  onChange={handleChange}
                  class="w-full px-3 py-2 border rounded-xl"
                  placeholder="Location of the wedding"
                />
              </div>
              <div class="mb-4">
                <label class="block text-gray-700">Event Dates</label>
                <input
                  type="date"
                  name="date"
                  value={values.date}
                  onChange={handleChange}
                  class="w-full px-3 py-2 border rounded-xl"
                />
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 mb-2">
                  What services are you looking for?
                </label>
                <div class="flex items-center mb-2">
                  <input
                    type="checkbox"
                    name="photography"
                    value={values.photography}
                    onChange={handleChange}
                    class="mr-2"
                  />
                  <span>Photography</span>
                </div>
                <div class="flex items-center mb-2">
                  <input
                    type="checkbox"
                    value={values.films}
                    onChange={handleChange}
                    name="films"
                    class="mr-2"
                  />
                  <span>Films</span>
                </div>
                <div class="flex items-center">
                  <input
                    type="checkbox"
                    value={values.both}
                    onChange={handleChange}
                    name="both"
                    class="mr-2"
                  />
                  <span>Both</span>
                </div>
              </div>
              <button
                type="submit"
                onClick={() => {
                  if (
                    errors.name ||
                    errors.email ||
                    errors.phone ||
                    errors.guestcount ||
                    errors.descaboutwedding ||
                    errors.date ||
                    errors.location
                  ) {
                    toast.error(
                      errors.name ||
                        errors.email ||
                        errors.phone ||
                        errors.guestcount ||
                        errors.descaboutwedding ||
                        errors.date ||
                        errors.location
                    );
                  }
                }}
                class="w-full bg-amber-800 text-white py-2 rounded-xl mt-4"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
