import React,{useState,useEffect} from 'react'
import { MdOutlineInventory } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'
import { RxDashboard } from 'react-icons/rx'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { AiOutlineMail } from 'react-icons/ai'
import { VscAccount } from 'react-icons/vsc'



const Nav = () => {
  const [nav, setNav] = useState(true);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setNav(true);
      }
      else{ setNav(false); }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  },[])
  
  return (
    <div className=" ">
      <header className="flex justify-between items-center  bg-slate-300 py-4 px-6 ">
        <div className="">
          <AiOutlineMenu onClick={() => setNav(!nav)} size={"20px"} />
        </div>
        <div className="bg-gray-200 rounded-full flex items-center mx-2 px-2 w-[200px] sm:w-[100px] lg:w-[500px] md:w-[300px]">
          <AiOutlineSearch size={25} />
          <input
            className="bg-transparent p-2 w-full focus:outline-none "
            type="text"
            placeholder="search here"
          />
        </div>
        <div className="flex mr-0">
          
            <IoIosNotificationsOutline size={"25px"} />
            
            <AiOutlineMail size={"25px"} className='ml-3' />
          
            <VscAccount size={"25px"} className=' ml-3'/>
          </div>
      </header>
      {nav ? (
        <div className=" fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}
      <aside
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-[#21232d] z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-[#21232d] z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer text-white"
        />
        <div className="sideBarTitle flex">
          <div className="text-3xl flex m-2 text-white">
            <MdOutlineInventory size={"30px"} className="mr-5" /> Dashboard
          </div>
        </div>

        <ul className="flex flex-col p-4">
          <li className="py-4 flex text-2xl text-white">
            <RxDashboard size={"30px"} className="mr-4" />
            Something
          </li>
          <li className="py-4 flex text-2xl text-white">
            <RxDashboard size={"30px"} className="mr-4" />
            Something
          </li>
          <li className="py-4 flex text-2xl text-white">
            <RxDashboard size={"30px"} className="mr-4" />
            Something
          </li>
          <li className="py-4 flex text-2xl text-white">
            <RxDashboard size={"30px"} className="mr-4" />
            Something
          </li>
          <li className="py-4 flex text-2xl text-white">
            <RxDashboard size={"30px"} className="mr-4" />
            Something
          </li>
          <li className="py-4 flex text-2xl text-white">
            <RxDashboard size={"30px"} className="mr-4" />
            Something
          </li>
          <li className="py-4 flex text-2xl text-white">
            <RxDashboard size={"30px"} className="mr-4" />
            Something
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default Nav
