import React from 'react'
import { FcCellPhone } from 'react-icons/fc'
import { CgDanger } from 'react-icons/cg'
import { FaChild } from 'react-icons/fa'
import ApexChart from './ApexChart'



const MainPage = () => {
  return (
    <div>
      <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 ">
        <div className="rounded-sm bg-slate-800 w-[350px] md:w-[200px] lg:w-[400px] h-[120px]  border-l-8 border-l-sky-500 p-4">
          <FcCellPhone />
          <p>ussd dials</p>
          <span className="font-bold text-3xl bottom">1700</span>
        </div>
        <div className="rounded-sm bg-slate-200 w-[350px] md:w-[200px] lg:w-[400px] h-[120px]  border-l-8 border-l-sky-500 p-4">
          <CgDanger />
          <p>reported cases</p>
          <span className="font-bold text-3xl bottom">1700</span>
        </div>
        <div className="rounded-sm bg-slate-200 w-[350px] md:w-[200px] lg:w-[400px] h-[120px]  border-l-8 border-l-sky-500 p-4">
          <FaChild />
          <p>rescured victims</p>
          <span className="font-bold text-3xl bottom">1700</span>
        </div>
      </div>
      <div className='max-h-[200px] w-[]200px'>
        <ApexChart />
      </div>
    </div>
  );
}

export default MainPage