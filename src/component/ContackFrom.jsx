import React from "react";
import GradientBtn from "./GradientBtn";
function ContackFrom() {
  return (
    <div className="p-4 text-left">
      <form action="" method="POST">
        <div className="grid lg:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col col-span-2 lg:col-span-1">
            <label className="capitalize text-sm py-2 font-light">Name:</label>
            <input
              type="text"
              name="name"
              className="border-2 text-gray-900 rounded-lg p-3 flex focus:outline-none"
            />
          </div>
          <div className="flex flex-col col-span-2 lg:col-span-1">
            <label className="capitalize text-sm py-2 font-light">Phone:</label>
            <input
              type="number"
              name="phone"
              className="border-2 text-gray-900 rounded-lg p-3 flex focus:outline-none"
            />
          </div>
          <div className="flex flex-col col-span-2  ">
            <label className="capitalize text-sm py-2 font-light">Email:</label>
            <input
              type="email"
              name="phone"
              className="border-2 text-gray-900 rounded-lg p-3 flex focus:outline-none"
            />
          </div>
          <div className="flex flex-col col-span-2  ">
            <label className="capitalize text-sm py-2 font-light">
              Message:
            </label>
            <textarea
              name="message"
              rows="10"
              className="border-2 text-gray-900 rounded-lg p-3 flex focus:outline-none"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <GradientBtn title="send message" clasName="ml-4 mt-4 capitalize" />
        </div>
      </form>
    </div>
  );
}

export default ContackFrom;
