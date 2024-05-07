/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line no-unused-vars

import React, { useState, useEffect } from "react";


// props adalah parameter jenis object yang bebas dikasih nama, dan untuk aksesnya sama seperti tipe data object
// export default function navbar(props) {


// state = parameter yg masuk dalam useState akan dijadikan variablel ke array 1 dan 2
// let [nama, setNama] = useState();

export default function navbar(props) {

  const [angkaPertama, setAngkaPertama] = useState(props.angka1);

  useEffect(() => {
    alert('halo')
  }, [])

  return (
    <div className="">
      <div className="">

        <p className="pb-20 pt-14 text-white text-3xl"> {props.angka1} </p>
        <button className="bg-teal-100 text-xl p-2" onClick={ () => setAngkaPertama(alert(123)) }>tambah</button>

      </div>
    </div>
  );
}
