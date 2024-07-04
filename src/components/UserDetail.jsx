import React, { useEffect, useState } from "react";
import {
  formatDistance,
  formatDistanceToNow,
  formatDistanceToNowStrict,
} from "date-fns";
import { FaRegImage } from "react-icons/fa6";
import "../css/UserDetail.css";
import fallback from "../assets/default.png";
const UserDetail = ({ user }) => {
  const [age, setAge] = useState(null);

  // Find the Age of the Account
  useEffect(() => {
    const today = new Date();
    const created = new Date(user.createdAt);
    setAge("Joined since last " + formatDistanceToNowStrict(created));
    // const years = differenceInYears(today, created);
    // let res = "Joined";
    // if (years > 0) {
    //   res +=` ${years} year`;
    // }
    // const months = differenceInMonths(today, created-(years*1000*60*60*24*365));
    // if (months>0){
    //   res+=`Joined ${months} months`;
    // }
    // const days = differenceInDays(today,created)
    // if ()
  }, [user]);

  function handleImgError(e) {
    e.target.src = fallback;
  }
  return (
    <>
      <div className="sticky top-0 sidebar rounded-l-3xl">
        <div className="relative isolate">
          <FaRegImage className="img-loader absolute text-4xl animate-pulse top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[-1]" />
          <img
            className="w-full max-w-[20vw] min-w-[200px] mx-auto rounded-full p-10"
            src={user.avatar}
            alt="avatar"
            onError={handleImgError}
          />
        </div>
        <div className="info grid grid-cols-2 px-3 gap-2">
          <div className="col-span-2 chip">
            <div className="heading font-semibold">Age</div>
            <div>{age}</div>
          </div>
          <div className="chip">
            <div className="heading">Username</div>
            <div className="break-words">{user.profile.username}</div>
          </div>
          <div className="chip">
            <div className="heading">Name</div>
            <div className="break-words">
              {user.profile.firstName + " " + user.profile.lastName}
            </div>
          </div>
          <div className="chip col-span-2">
            <div className="heading">Job Title</div>
            <div>{user.jobTitle}</div>
          </div>
          <div className="chip col-span-2">
            <div className="heading">Bio</div>
            <div>{user.Bio}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
