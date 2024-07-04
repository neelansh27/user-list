import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import UserDetail from "./UserDetail";
import "../css/UserList.css";
import { IoMdPerson } from "react-icons/io";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { FaRegImage } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import fallback from '../assets/default.png';
const UserList = () => {
  const allUsers = useRef(null);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [activeUser, setActiveUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://602e7c2c4410730017c50b9d.mockapi.io/users")
      .then((res) => res.json())
      .then((res) => {
        // storing all users
        allUsers.current = res;
        // current putting all users in filtered users
        setUsers(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  function changeActive(user) {
    setActiveUser(user);
  }
  function handleInput(e) {
    setSearch(e.target.value);
  }
  // Hook to perform search on search input change
  useEffect(() => {
    if (allUsers.current != null) {
      setUsers(
        allUsers.current.filter((item) => {
          return item.profile.username
            .toLowerCase()
            .startsWith(search.toLowerCase());
        }),
      );
    }
  }, [search]);
  // function performSearch() {
  //   setUsers(allUsers.current.filter((item)=>{
  //       return item.profile.username.toLowerCase().startsWith(search.toLowerCase());
  //     })
  //   )
  // }
  // function handleKeyDown(e){
  //   if (e.keyCode===13){
  //     performSearch()
  //   }
  // }
  function handleImgError(e) {
    e.target.src = fallback;
  }
  return (
    <>
      <div className="flex">
        <div className="w-full">
          {loading && <div>Loading...</div>}
          {!loading && users.length == 0 && <div>No data to show</div>}
          {!loading && (
            <div className="flex flex-col md:flex-row w-full px-3 py-4">
              <div className="search-box w-full flex">
                {/* onKeyDown={handleKeyDown}  add this to use enter key for search*/}
                <input
                  className="w-[90%] mx-auto p-2.5 rounded-xl"
                  type="search"
                  value={search}
                  onChange={handleInput}
                  placeholder="Search by username.."
                />
              </div>
            </div>
          )}
          {users.length > 0 && (
            // Creating a list if users are available
            <ul>
              {users.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    onClick={() => changeActive(item)}
                    className="user-box flex gap-2 rounded-2xl select-none mb-5 p-4 w-[90%] mx-auto"
                  >
                    <div className="relative isolate">
                      <FaRegImage className="img-loader absolute text-xl animate-pulse top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[-1]" />
                      <img
                        className="w-16 rounded-full"
                        src={item.avatar}
                        alt=""
                        onError={handleImgError}
                      />
                    </div>
                    <div className="w-[80%] my-auto">
                      <div className="username flex items-center gap-3 font-semibold">
                        <span className="svg-container">
                          <IoMdPerson />
                        </span>
                        <span className="text-sky-400">
                          {item.profile.username}
                        </span>
                      </div>
                      <div className="job-title flex items-center gap-3 font-semibold">
                        <span>
                          <PiSuitcaseSimpleBold />
                        </span>
                        <span>{item.jobTitle}</span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <div className={`${activeUser ? "lg:w-[40%] sm:w-[70%]":"w-0 border-none"} overflow-y-scroll  sidebar-container sticky pb-6 top-0`}>
          <IoClose onClick={()=>{setActiveUser(null)}} className={`${activeUser ? 'inline':'hidden'} sticky top-3 ml-2 text-white z-10 text-2xl`}/>
          {activeUser != null && <UserDetail user={activeUser} />}
    </div>
      </div>
    </>
  );
};

export default UserList;
