import React from "react";
import { MdOutlineCancel } from "react-icons/md";

import { useStateContext } from "../contexts/ContextProvider";
import { userProfileData } from "../data/dummy";
import avatar from "../data/avatar.jpg";
import { Button } from ".";

const UserProfile = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="bg-half-transparent w-full fixed nav-item top-0 right-0 ">
      <div className="float-right h-screen  duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white md:w-400 p-8">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">User Profile</p>
          <Button
            type="button"
            icon={<MdOutlineCancel />}
            className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
          />
        </div>
        <div>
          <div className="flex items-center   leading-8 gap-5 border-b-1 border-color dark:border-gray-600 p-4">
            <img
              className="rounded-lg h-80 w-15"
              src={avatar}
              alt="user-profile"
            />
            <div>
              <p className="font-semibold text-2xl">Micheal Roberts</p>
              <p className="font-semibold text-sm">Administrator</p>
              <p className="font-semibold text-sm">info@email.com</p>
            </div>
          </div>
          <div>
            {userProfileData.map((item, index) => (
              <div
                key={index}
                className="flex gap-5 p-4 border-b-1 border-color dark:border-gray-600"
              >
                <button
                  type="button"
                  className="text-xl rounded-lg p-3 hover:bg-light-gray"
                  style={{
                    color: item.iconColor,
                    backgroundColor: item.iconBg,
                  }}
                >
                  {item.icon}
                </button>
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-gray-600 dark:text-gray-200 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            text="Logout"
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
