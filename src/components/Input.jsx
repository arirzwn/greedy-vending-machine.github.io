import { useState } from "react";
import Button from "./Button.jsx";

export default function Input({ dataHarga, totalHarga }) {
  const [totalUang, setTotalUang] = useState(0);
  const [inputUang, setInputUang] = useState(0);

  function handleInputUang() {
    setTotalUang(totalUang + Number(inputUang));
    setInputUang(0); // reset input uang setelah ditambahkan ke total uang
  }

  function handleInputChange(event) {
    setInputUang(event.target.value);
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
            onClick={() => setTotalUang(0)}
          >
            Reset
          </Button>
        </div>
        <div className="flex gap-2">
          <input
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
