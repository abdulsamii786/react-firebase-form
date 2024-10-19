import React from "react";

const Input = ({ data }) => {
  const { logo, type, placeHolder } = data;
  return (
    <div className="w-[350px] relative my-6">
      <input
        type={type}
        placeholder={placeHolder}
        className="bg-secondaryClr pl-12 py-3 rounded-lg w-full placeholder:text-black "
      />
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-2xl">
        {logo}
      </span>
    </div>
  );
};

export default Input;
