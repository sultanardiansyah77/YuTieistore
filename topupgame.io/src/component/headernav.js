/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

// set waktu promo start
const waktuTarget = new Date("january 20 2023 00:00:00").getTime();

let countDownWaktu = setInterval(() => {
  let waktuSekarang = new Date().getTime();
  let jarakWaktu = waktuTarget - waktuSekarang;

  var days = Math.floor(jarakWaktu / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (jarakWaktu % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((jarakWaktu % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((jarakWaktu % (1000 * 60)) / 1000);

  document.getElementById(
    "counterWaktu"
  ).innerHTML = `tersisa ${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;

  if (jarakWaktu < 0) {
    clearInterval(countDownWaktu);
    document.getElementById("counterWaktu").innerHTML =
      "Promo telah kadaluarsa";
  }
}, 1000);
// set waktu promo end

// let angka = '256'
// let asal = Number.isNaN(angka)
// let asal = parseInt(angka)

// console.log(asal)

export default function headernav() {
  return (
    <section className="">
      <div className="">
        <div className="flex flex-col flex-wrap">
          {/* nav atas */}
          <div className="bg-slate-700 pt-2 pb-7">
            <div className="px-2 md:px-16">
              <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xl md:text-2xl md:justify-start text-zinc-100 font-semibold">
                <li className="block hover:bg-orange-200 rounded p-1 mx-auto md:mx-5 md:px-2 transition duration-300">
                  <a href="">Home</a>
                </li>
                <li className="block hover:bg-orange-200 rounded p-1 mx-auto md:mx-5 md:px-2 transition duration-300">
                  <a href="">Chat</a>
                </li>
                <li className="block hover:bg-orange-200 rounded p-1 mx-auto md:mx-5 md:px-2 transition duration-300">
                  <a href="">Top Up</a>
                </li>
                <li className="block hover:bg-orange-200 rounded p-1 mx-auto md:mx-5 md:px-2 transition duration-300">
                  <a href="">Mercandise</a>
                </li>
              </ul>
            </div>
          </div>

          {/* jam event */}
          <div className="bg-green-200">
            <div className="capitalize font-semibold text-lg text-orange-900 flex justify-between px-3 items-center">
              <h1>Promo aktif:</h1>
              <h1 id="counterWaktu" className="text-xs text-red-800"></h1>
            </div>
          </div>

          {/* sub category */}
          <div className="pt-10 pb-14 bg-slate-700">
            <div className="px-3">
              <ul className="flex justify-center flex-wrap gap-y-3 gap-x-2 font-semibold font-sans text-red-900">
                <li className="bg-zinc-100 rounded py-1 px-2 block ">
                  <a href="">Tahun baru</a>
                </li>
                <li className="bg-zinc-100 rounded py-1 px-2 block ">
                  <a href="">event saat ini</a>
                </li>
                <li className="bg-zinc-100 rounded py-1 px-2 block ">
                  <a href="">promo mingguan</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
