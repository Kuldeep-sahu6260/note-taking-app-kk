import React from 'react';
import {notes_icon} from "../../utils/images";
// import "./Sidebar.scss";
import {AiFillHome} from "react-icons/ai";
import {BsPlusLg} from "react-icons/bs";
import {MdNoteAlt} from "react-icons/md";
import {Link, useLocation} from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  let pathname = location.pathname.replace("/", "");

  return (
    <div className='w-[60px] bg-clrdark [transition:all_100ms_ease-in-out] h-screen md:w-[240px]'>
      <div className='sidebar-content py-3 flex flex-column'>
        <Link to = "/" className='p-3.2  border-b-1.5 border-solid border-slate-300  flex align-center justify-center'>
          <img src = {notes_icon} alt = ""  className='w-[25px]' />
        </Link>

        <ul className='links my-4'>
          <Link to = "/home" className={`text-white flex justify-center md:pl-4 md:justify-start align-center h-[40px] hover:bg-clrredsalsa flex items-center justify-center [transition:all_300ms_ease-in-out] ${pathname === 'home' ? 'bg-clrredsalsa' : ""}`}>
            <span className='flex align-center justify-center'>
              <AiFillHome size = {17} />
            </span>
            <span className='hidden text-[14px] font-light md:block md:ml-[6px]'>Home</span>
          </Link>
          <Link to = "/add" className={`text-white flex justify-center md:pl-4 md:justify-start align-center h-[40px] hover:bg-clrredsalsa flex items-center justify-center [transition:all_300ms_ease-in-out] ${pathname === 'home' ? 'bg-clrredsalsa' : ""}`}>
            <span className='flex align-center justify-center'>
              <BsPlusLg size = {17} />
            </span>
            <span className='hidden text-[14px] font-light md:block md:ml-[6px]'>Add</span>
          </Link>
          <Link to = "" className='text-white flex justify-center md:pl-4 md:justify-start align-center h-[40px] hover:bg-clrredsalsa flex items-center justify-center [transition:all_300ms_ease-in-out]'>
            <span className='flex align-center justify-center'>
              <MdNoteAlt size = {17} />
            </span>
            <span className='hidden text-[14px] font-light md:block md:ml-[6px]'>Notes</span>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
