import React from "react";

function GradientBtn({ title, clasName }) {
  return (
    <button
      className={`bg-gradient-to-r from-orange-600 to-blue-600 px-6 py-2 text-black rounded-lg duration-300 hover:scale-110 ${clasName}`}
    >
      {title}
    </button>
  );
}

export default GradientBtn;
