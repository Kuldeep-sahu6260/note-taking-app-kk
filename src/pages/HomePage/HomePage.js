import React, {useState, useEffect} from 'react';
import { Outlet } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";


const HomePage = () => {
  const [greetText, setGreetText] = useState("");
  const currentDate = new Date();
  const day = currentDate.toLocaleDateString('default', {weekday: 'long'});
  const month = currentDate.toLocaleString('default', {month: 'long'});
  const date = `${day}, ${month} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  useEffect(() => {
    let currentHour = currentDate.getHours();
    if(currentHour < 12) setGreetText("Good Morning!")
    else if(currentHour < 18) setGreetText("Good Afternoon!");
    else setGreetText("Good Evening!");
  }, [])

  return (
    <div className='app flex'>
    <Sidebar />
    <div className='w-full h-screen overflow-y-scroll'>
      <header className='h-[60px] relative bg-red-600 [box-shadow:rgba(0,_0,_0,_0.16)_0px_1px_4px] w-100 flex align-center'>
        <div className='container w-100'>
          <div className='header-content flex align-center justify-between text-white py-3'>
            <div className='greetings'>
              <h3 className='fw-6'>{greetText}</h3>
            </div>
            <div className='date'>
              <span className='text-uppercase fs-13 fw-4'>{date}</span>
            </div>
          </div>
        </div>
      </header>
      <div className='notes-wrapper py-4 px-4'>
        <Outlet />
      </div>
    </div>
  </div>
  )
}

export default HomePage
