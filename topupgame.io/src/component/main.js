/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";


// js

// const img1 = '../assets/image/3.jpg'


// export
export default function Main() {

  //    returnnya
  return (
    <section className="bg-gray-800 min-h-[60vh]">
      <div className="py-3">
        <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-5">
          
          {/* main set start*/}
          <div className="bg-white shadow-xl bg-opacity-20 rounded-xl">
              <div className="py-1 font-semibold rounded-tl-lg rounded-tr-lg bg-slate-500 px-7">
                <h3>Top Up Game Dengan Sekali Login</h3>
              </div>
              <div className="">
                <img src={require('../assets/image/3.jpg')} alt="gambar 1" className="block rounded-bl-lg rounded-br-lg h-52 " />
              </div>
          </div>
          <div className="bg-white shadow-xl bg-opacity-20 rounded-xl">
              <div className="py-1 font-semibold rounded-tl-lg rounded-tr-lg bg-slate-500 px-7">
                <h3>Jual Beli Akun game Terpercaya:D</h3>
              </div>
              <div className="">
                <img src={require('../assets/image/2.jpg')} alt="gambar 1" className="block rounded-bl-lg rounded-br-lg h-52 " />
              </div>
          </div>
          <div className="bg-white shadow-xl bg-opacity-20 rounded-xl">
              <div className="py-1 font-semibold rounded-tl-lg rounded-tr-lg bg-slate-500 px-7">
                <h3>Coming Soon Features</h3>
              </div>
              <div className="">
                <img src={require('../assets/image/4.jpg')} alt="Coming Soon" className="block rounded-bl-lg rounded-br-lg h-52 " />
              </div>
          </div>

          


          {/* main set end*/}

        </div>
      </div>
    </section>
  );
}
