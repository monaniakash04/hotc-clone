"use client";
import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import first from "../../media/carres/first.jpg";
import second from "../../media/carres/second.jpg";
import { useFormik } from "formik";
import { carres_validation } from "@/validation/Validation";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const Carees = () => {
  const { values, handleChange, handleSubmit, errors } = useFormik({
    validationSchema: carres_validation,
    initialValues: {
      name: "",
      email: "",
      phone: "",
      ccity: "",
      tellaboutyourself: "",
      linkport: "",
      opentorelocate: "yes",
      experiance: "",
    },
    onSubmit: (val) => {
      axios
        .post(`${process.env.NEXT_PUBLIC_DATABASE_URL}/carres.json`, val)
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
        <Toaster />
        <Header />
        <div className="max-w-full min-h-[60vh]">
          <div className="max-w-full relative mt-32 overflow-hidden">
            <div className="max-w-2xl min-h-[300px]  absolute inset-0 z-20">
              <Image
                src={first}
                className="w-full rounded-xl h-full object-contain "
                alt="first"
              />
            </div>
            <div className="max-w-xl hidden md:block min-h-[300px]  inset-0  left-[50%]  absolute  z-20">
              <Image
                src={second}
                className="w-full   h-full object-contain"
                alt="first"
              />
            </div>
            <div className="scrolling-text">
              <span className="names text-6xl font-serif">
                Siddharth Sharma. Ashwin Kumar. Aayush Dodia. Lonav Bharali.
                Dushyant. Sameer... Siddharth Sharma. Ashwin Kumar. Aayush
                Dodia. Lonav Bharali. Dushyant. Sameer... Dushyant. Sameer...
                Siddharth Sharma. Ashwin Kumar. Aayush Dodia. Lonav Bharali.
                Dushyant. Sameer...
              </span>
            </div>
            <div className="scrolling-text2">
              <span className="names text-6xl font-serif">
                Siddharth Sharma. Ashwin Kumar. Aayush Dodia. Lonav Bharali.
                Dushyant. Sameer... Siddharth Sharma. Ashwin Kumar. Aayush
                Dodia. Lonav Bharali. Dushyant. Sameer... Dushyant. Sameer...
                Siddharth Sharma. Ashwin Kumar. Aayush Dodia. Lonav Bharali.
                Dushyant. Sameer...
              </span>
            </div>
            <div className="scrolling-text3">
              <span className="names text-6xl font-serif">
                Siddharth Sharma. Ashwin Kumar. Aayush Dodia. Lonav Bharali.
                Dushyant. Sameer... Siddharth Sharma. Ashwin Kumar. Aayush
                Dodia. Lonav Bharali. Dushyant. Sameer... Dushyant. Sameer...
                Siddharth Sharma. Ashwin Kumar. Aayush Dodia. Lonav Bharali.
                Dushyant. Sameer...
              </span>
            </div>
          </div>
          <div className="max-w-4xl mt-32 flex flex-col items-center mx-auto min-h-[500px]">
            <h1 className="md:text-4xl text-xl font-serif">Join Our Team</h1>
            <h1 className="md:text-lg text-center font-light text-sm font-serif">
              We are constantly on a lookout for extraordinary talents in both
              photography and film domain. Fill in the form below with your
              details and work links and we will get back to you if there is an
              opportunity matching your profile.
            </h1>
            <ul className="gap-5 p-4 list-disc items-center flex flex-col text-sm">
              <li className="">
                please note : All positions are full time for our Bangalore
                Office
              </li>
              <li className="">
                Ensure you meet the experience criteria mentioned
              </li>
              <li>
                Its advised to include links to your personal work as well.
              </li>
              <li className="">
                Its advised to include links to your personal work as well.
              </li>
              <li className="">
                Link to your portfolio is a must , if sending google drive links
                ensure the permissions are granted. .
              </li>
            </ul>
          </div>
          <div class="max-w-3xl font-serif mx-auto bg-white p-8 rounded-xl shadow-md">
            <h1 class="text-2xl font-bold mb-6">Join Our Team</h1>
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
                  value={values.email}
                  onChange={handleChange}
                  name="email"
                  class="w-full px-3 py-2 border rounded-xl"
                  placeholder="Your Email"
                />
              </div>
              <div class="mb-4">
                <label class="block text-gray-700">Phone</label>
                <input
                  type="tel"
                  value={values.phone}
                  onChange={handleChange}
                  name="phone"
                  class="w-full px-3 py-2 border rounded-xl"
                  placeholder="Your Phone"
                />
              </div>
              <div class="mb-4">
                <label class="block text-gray-700">
                  Current City of Residence
                </label>
                <input
                  type="text"
                  name="ccity"
                  value={values.ccity}
                  onChange={handleChange}
                  class="w-full px-3 py-2 border rounded-xl"
                  placeholder="Current City of Residence"
                />
              </div>
              <div class="mb-4">
                <label class="block text-gray-700">
                  Tell Us About Yourself
                </label>
                <textarea
                  type="text"
                  value={values.tellaboutyourself}
                  onChange={handleChange}
                  name="tellaboutyourself"
                  class="w-full px-3 py-2 border rounded-xl"
                  placeholder="Tell Us About Yourself
"
                />
              </div>
              <div class="mb-4">
                <label class="block text-gray-700">
                  Link to your Professional Portfolio
                </label>
                <input
                  name="linkport"
                  type="text"
                  value={values.linkport}
                  onChange={handleChange}
                  class="w-full px-3 py-2 border rounded-xl"
                />
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 mb-2">
                  Open to relocate to Bangalore ?
                </label>
                <div class="flex items-center mb-2">
                  <select
                    name="opentorelocate"
                    value={values.opentorelocate}
                    onChange={handleChange}
                    class="w-full px-3 py-2 border rounded-xl"
                    placeholder="Event Flow, Venues"
                  >
                    <option value="yes">YES</option>
                    <option value="no">NO</option>
                  </select>
                </div>

                <div class="mb-4">
                  <label class="block text-gray-700">
                    Tell us about your professional experience. ( Years ,
                    Companies , Awards etc)
                  </label>
                  <input
                    type="text"
                    value={values.experiance}
                    onChange={handleChange}
                    name="experiance"
                    class="w-full px-3 py-2 border rounded-xl"
                  />
                </div>
              </div>
              <button
                type="submit"
                onClick={() => {
                  if (
                    errors.name ||
                    errors.email ||
                    errors.phone ||
                    errors.experiance ||
                    errors.linkport ||
                    errors.tellaboutyourself ||
                    errors.ccity
                  ) {
                    toast.error(
                      errors.name ||
                        errors.email ||
                        errors.phone ||
                        errors.experiance ||
                        errors.linkport ||
                        errors.tellaboutyourself ||
                        errors.ccity
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

export default Carees;
