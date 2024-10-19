import { BsPersonFillLock } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { RiUserFill } from "react-icons/ri";

export const signInInputField = [
  {
    logo: <IoIosMail />,
    type: "email",
    placeHolder: "Email",
  },
  {
    logo: <BsPersonFillLock />,
    type: "password",
    placeHolder: "Password",
  },
];

export const signUpInputField = [
  {
    logo: <RiUserFill />,
    type: "text",
    placeHolder: "Name",
  },
  {
    logo: <IoIosMail />,
    type: "email",
    placeHolder: "Email",
  },
  {
    logo: <BsPersonFillLock />,
    type: "password",
    placeHolder: "Password",
  },
];
