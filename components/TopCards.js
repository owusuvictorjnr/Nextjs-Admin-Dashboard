import React from 'react';

const TopCards = () => {
  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4 ">
      <div className="lg:col-span-2 col-span-1 bg-[#3a0ca3] flex justify-between w-full border p-4 rounded-lg ">
        <div className="flex flex-col w-full pb-4 gap-4">
          <p className="text-2xl font-bold text-[#ffffff]">&#x20B5; 4300</p>
          <p className="text-[#e42d2d] capitalize text-lg">daily revenue</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-green-700 text-lg ">+10%</span>
        </p>
      </div>

      <div className="lg:col-span-2 col-span-1 bg-[#3a0ca3] flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4 gap-4">
          <p className="text-2xl font-bold text-[#ffffff]">&#x20B5; 1194300</p>
          <p className="text-[#e42d2d] capitalize text-lg">
            year to date revenue
          </p>
        </div>

        <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-green-700 text-lg">+20%</span>
        </p>
      </div>

      <div className="bg-[#3a0ca3] flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4 gap-4">
          <p className="text-2xl font-bold text-[#ffffff]">&#x20B5; 3300</p>
          <p className="text-[#e42d2d] capitalize text-lg">
            registered students
          </p>
        </div>

        <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-green-700 text-lg ">+80%</span>
        </p>
      </div>
    </div>
  );
};

export default TopCards;
