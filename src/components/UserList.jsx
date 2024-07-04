import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import UserDetail from "./UserDetail";
import "../css/UserList.css";
import { IoMdPerson } from "react-icons/io";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { FaArrowDown, FaRegImage } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import notFound2 from "../assets/nothing_found.png";
import { FaArrowUp } from "react-icons/fa";
import ImageFallback from "./ImageFallback";
const UserList = () => {
  const allUsers = useRef(null);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [activeUser, setActiveUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState(true)
  const sortMenu = useRef(null);
  // const [showSort,setShowSort]
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
  function changeOrder(){
    setOrder(!order);
    setUsers(users.slice().reverse());
  }
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
  function performSort(e) {
    if (e.target.textContent === "Username") {
      setUsers(
        users.slice().sort((a, b) => {
          return a.profile.username.localeCompare(b.profile.username);
        }),
      );
    } else {
      setUsers(
        users.slice().sort((a, b) => {
          // Subtracting b from a to get newest accounts first
          return new Date(b.createdAt) - new Date(a.createdAt);
        }),
      );
    }
    toggleSortMenu();
  }
  function toggleSortMenu() {
    if (sortMenu.current.classList.contains("show-menu")) {
      sortMenu.current.classList.remove("show-menu");
    } else {
      sortMenu.current.classList.add("show-menu");
    }
  }
  return (
    <>
      <div className="flex">
        <div className="w-full">
          {loading && <div>Loading...</div>}
          {!loading && (
            <div className="flex flex-col md:flex-row mx-10 gap-4 px-3 py-4">
              <div className="search-box w-full flex">
                {/* onKeyDown={handleKeyDown}  add this to use enter key for search*/}
                <input
                  className="w-full p-2.5 rounded-xl"
                  type="search"
                  value={search}
                  onChange={handleInput}
                  placeholder="Search by username.."
                />
              </div>
            <div className="flex gap-2">
                <div className="relative h-full inline-block text-left">
                  <div className="h-full">
                    <button
                      type="button"
                      className="whitespace-nowrap select-none inline-flex h-full w-full justify-center gap-x-1.5 rounded-md px-3 py-2.5 font-semibold text-white shadow-sm ring-1 ring-inset ring-gray"
                      id="menu-button"
                      aria-expanded="true"
                      onClick={toggleSortMenu}
                      aria-haspopup="true"
                    >
                      Sort by
                      <svg
                        className="-mr-1 h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  <div
                    className="select-none hidden absolute bg-[var(--bg)] border-2 border-[var(--border-color)]  right-0 z-10 mt-2 w-40 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    ref={sortMenu}
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                  >
                    <div className="" role="none">
                      <div
                        className="block px-4 py-3 hover:bg-[var(--hover-bg)] text-sm text-white"
                        role="menuitem"
                        tabIndex="-1"
                        onClick={performSort}
                        id="menu-item-0"
                      >
                        Username
                      </div>
                      <div
                        className="block px-4 py-3 hover:bg-[var(--hover-bg)] text-sm text-white"
                        role="menuitem"
                        tabIndex="-1"
                        onClick={performSort}
                        id="menu-item-1"
                      >
                        Account Age
                      </div>
                    </div>
                </div>
              </div>
              <div onClick={changeOrder} className="order cursor-pointer flex text-lg items-center border border-[var(--border-color)] px-3 py-1 rounded-md">
            {(order) ? <FaArrowUp/>:<FaArrowDown/>}
              </div>
            </div>
            </div>
          )}
          {!loading && users.length === 0 && (
            <div className="not-found">
              <img
                className="w-[50%] max-w-[600px] mx-auto"
                src={notFound2}
                alt="not-found"
              />
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
                  <ImageFallback source={item.avatar} className={"w-16 rounded-full"} key={item.id+item.username}/>
                    </div>
                    <div className="w-[80%] my-auto">
                      <div className="username flex items-center gap-3 mb-2 font-semibold">
                        <span className="svg-container text-lg">
                          <IoMdPerson />
                        </span>
                        <span className="text-sky-400 text-lg">
                          {item.profile.username}
                        </span>
                      </div>
                      <div className="job-title flex items-center gap-3 font-semibold">
                        <span>
                          <PiSuitcaseSimpleBold />
                        </span>
                        <span className="text-sm">{item.jobTitle}</span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <div
          className={`${activeUser ? "lg:w-[50%] md:w-[70%]" : "w-0 border-none"} overflow-y-scroll  sidebar-container sticky pb-6 top-0`}
        >
          <IoClose
            onClick={() => {
              setActiveUser(null);
            }}
            className={`${activeUser ? "inline" : "hidden"} cursor-pointer sticky top-3 ml-2 text-white z-10 text-2xl`}
          />
          {activeUser != null && <UserDetail user={activeUser} />}
        </div>
      </div>
    </>
  );
};

export default UserList;
