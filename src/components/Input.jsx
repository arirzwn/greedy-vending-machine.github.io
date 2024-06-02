import { useState } from "react";
import Button from "./Button.jsx";

export default function Input({ totalHarga, handleBatal, setTotalKembalian }) {
  const [totalUang, setTotalUang] = useState(0);
  const [inputUang, setInputUang] = useState(0);

  function handleInputUang() {
    const newTotalUang = totalUang + Number(inputUang);
    setTotalUang(newTotalUang);
    const kembalian = newTotalUang - totalHarga;
    setTotalKembalian(kembalian);
    setTotalUang(0); // reset total uang setelah uang dimasukkan
    setInputUang(0); // reset input uang setelah ditambahkan ke total uang
  }

  function handleInputChange(e) {
    setInputUang(e.target.value);
  }

  return (
    <>
      <div className="mt-4 flex flex-col gap-2">
        <div className="flex gap-2">
          <input
            className="block p-2  rounded-md flex-1"
            disabled
            value={totalHarga}
          />
          <Button
            className="rounded-md shadow-slate-800 shadow-sm  text-sm w-20 bg-white"
            onClick={handleBatal}
          >
            Batal
          </Button>
        </div>
        <div className="flex gap-2">
          <input
            type="number"
            className="block p-2 rounded-md flex-1"
            value={inputUang}
            onChange={handleInputChange}
          />
          <Button
            className="rounded-md shadow-slate-800 shadow-sm  text-sm w-20 bg-white"
            onClick={handleInputUang}
          >
            Masukan
          </Button>
        </div>
      </div>
    </>
  );
}
