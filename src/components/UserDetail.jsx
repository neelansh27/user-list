import React, { useEffect, useRef, useState } from "react";
import { formatDistanceToNowStrict } from "date-fns";
import {  FaRegImage } from "react-icons/fa6";
import "../css/UserDetail.css";
import ImageFallback from "./ImageFallback";
import { IoMdPerson, IoMdTime } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";
import { PiSuitcaseFill } from "react-icons/pi";
import { MdOutlineLibraryBooks } from "react-icons/md";
const UserDetail = ({ user }) => {
  const [age, setAge] = useState(null);
  // Find the Age of the Account
  useEffect(() => {
    setAge(
      "Member since last " +
        formatDistanceToNowStrict(new Date(user.createdAt)),
    );
  }, [user]);
  return (
    <>
      <div className="sticky top-0 sidebar rounded-l-3xl">
        <div className="relative isolate">
          <FaRegImage className="img-loader absolute text-4xl animate-pulse top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[-1]" />
     {/* using a key so that Image re renders everytime user is changed :) */}
     {/* https://stackoverflow.com/questions/30034265/trigger-child-re-rendering-in-react-js */}
          <ImageFallback source={user.avatar} className="w-full max-w-[20vw] min-h-[250px] min-w-[250px] mx-auto rounded-full p-10" key={user.id+user.profile.username}/>
        </div>
        <div className="info grid grid-cols-2 px-3 gap-2">
          <div className="col-span-2 chip">
            <div className="heading font-semibold">
    <IoMdTime className="text-xl"/>
            Account Age
    </div>
            <div>{age}</div>
          </div>
          <div className="chip">
            <div className="heading">
            <IoMdPerson className="text-xl"/>
    Username
    </div>
            <div className="break-words">{user.profile.username}</div>
          </div>
          <div className="chip">
            <div className="heading">
    <IoPersonCircle className="text-xl"/>
    Name
    </div>
            <div className="break-words">
              {user.profile.firstName + " " + user.profile.lastName}
            </div>
          </div>
          <div className="chip col-span-2">
            <div className="heading">
    <PiSuitcaseFill className="text-xl"/>
    Job Title
    </div>
            <div>{user.jobTitle}</div>
          </div>
          <div className="chip col-span-2">
            <div className="heading">
    <MdOutlineLibraryBooks className="text-lg"/>
    Bio
    </div>
            <div>{user.Bio}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
