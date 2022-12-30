import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const profile = () => {
  return (
    <div className="w-[60%] mx-auto my-[120px]">
      <form action="">
        <h1 className="font-semibold text-3xl text-center p-6">Profile</h1>
        <div className="grid grid-cols-2 text-[20px] font-semibold gap-[80px]">
          <div className="">
            <div>
              <label htmlFor="firstName">First Name</label>
              <br />
              <input
                type="text"
                name="firstName"
                id="firstName"
                value=""
                placeholder="First Name"
                required
                className="bg-gray-100 w-[100%] "
              />
            </div>
            <div className="my-10">
              <label htmlFor="firstName">First Name</label>
              <br />
              <input
                type="text"
                name="firstName"
                id="firstName"
                value=""
                placeholder="First Name"
                required
                className="bg-gray-100 w-[100%]"
              />
            </div>
            <div>
              <label htmlFor="firstName">First Name</label>
              <br />
              <input
                type="text"
                name="firstName"
                id="firstName"
                value=""
                placeholder="First Name"
                required
                className="bg-gray-100 w-[100%]"
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="firstName">First Name</label>
              <br />{' '}
              <input
                type="text"
                name="firstName"
                id="firstName"
                value=""
                placeholder="First Name"
                required
                className="bg-gray-100 w-[100%]"
              />
            </div>
            <div className="my-10">
              <label htmlFor="firstName">First Name</label>
              <br />
              <input
                type="text"
                name="firstName"
                id="firstName"
                value=""
                placeholder="First Name"
                required
                className="bg-gray-100 w-[100%]"
              />
            </div>
            <div>
              <label htmlFor="firstName">First Name</label>
              <br />
              <input
                type="text"
                name="firstName"
                id="firstName"
                value=""
                placeholder="First Name"
                required
                className="bg-gray-100 w-[100%]"
              />
            </div>
          </div>
        </div>
      </form>
      <div className="flex justify-center my-12">
        <div className="bg-black text-white px-8 py-4 font-semibold flex items-center">
          <span className="mr-1">Next</span> <span><BsArrowRight /></span>
        </div>
      </div>
    </div>
  );
};

export default profile;
