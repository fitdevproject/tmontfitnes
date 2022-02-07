import { useState } from "react";

const Newsletter = () => {
  return (
    <div className="flex flex-col items-center px-2 my-8">
      <form
        action="https://www.getrevue.co/profile/tmontfitness/add_subscriber"
        method="post"
        id="revue-form"
        name="revue-form"
        target="_blank"
      >
        <div className="flex flex-col items-center">
          <div id="formInfoTitle">
            <h1 className="mb-6 text-center text-neutral-50 text-3xl md:text-4xl lg:text-5xl">
              Want a free program?
            </h1>
          </div>
          <div id="formInfo" className="w-3/4">
            <h1 className=" mb-6 text-center text-neutral-50 text-md md:text-l">
              Get the first 3 weeks of my program,{" "}
              <span className="font-extrabold italic">
                Strength Foundations
              </span>
              , completely free when you sign up for my newsletter.
            </h1>
          </div>
          <div id="inputContainer" className="flex flex-col md:flex-row">
            <div id="firstName">
              <input
                className="mb-2 md:mb-0 md:mr-2 rounded w-60"
                placeholder="First Name"
                type="text"
                name="member[first_name]"
                id="member_first_name"
              />
            </div>
            <div id="email">
              <input
                className="mb-2 md:mb-0 md:mr-2 rounded w-60"
                placeholder="Your Email Address"
                type="email"
                required
                name="member[email]"
                id="member_email"
              />
            </div>
          </div>
          <div id="submitButton">
            <button
              type="submit"
              name="member[subscribe]"
              className="w-52 my-6 py-2 px-4 rounded bg-gradient-to-r bg-tmontGreen-100 hover:scale-110"
            >
              Subscribe
            </button>
          </div>
          <div id="formInfo" className="w-3/4">
            <h1 className="text-center text-neutral-50 text-xs md:text-sm">
              * I will not spam your inbox, and you can opt out any time. I will
              occasionally send deals for my programs.
            </h1>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
