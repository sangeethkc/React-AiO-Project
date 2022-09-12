import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { useStateContext } from "../contexts/ContextProvider";
import { chatData } from "../data/dummy";
import { Button } from ".";

const Chat = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="bg-half-transparent w-full fixed nav-item top-0 right-0 ">
      <div className="float-right h-screen  duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white md:w-400 p-8">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">Chats</p>
          <Button
            type="button"
            icon={<MdOutlineCancel />}
            className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
          />
        </div>
        {chatData?.map((item, index) => (
          <div key={index}>
            <div>
              <div className="flex items-center   leading-8 gap-5 border-b-1 border-color dark:border-gray-600 p-4">
                <img className="rounded-lg h-80 w-15" src={item.image} alt="" />
                <div>
                  <p className="semi-bold">{item.message}</p>
                    <p className="font-semibold text-sm">{item.desc}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">
                      {item.time}
                    </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
