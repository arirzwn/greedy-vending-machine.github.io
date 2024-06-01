import { useState } from "react";
import Button from "./Button.jsx";

export default function Input() {
  const [totalUang, setTotalUang] = useState(0);

  const [inputUang, setInputUang] = useState(0);

  return (
    <>
      <div className="mt-4 flex flex-col gap-2">
        <div className="flex gap-2">
          <input
            className="block p-2  rounded-md flex-1"
            disabled
            value={totalUang}
          />
          <Button className="rounded-md shadow-slate-800 shadow-sm  text-sm w-20 bg-white">
            Reset
          </Button>
        </div>
        <div className="flex gap-2">
          <input className="block p-2 rounded-md flex-1 " />
          <Button className="rounded-md shadow-slate-800 shadow-sm  text-sm w-20 bg-white">
            Masukan
          </Button>
        </div>
        {/*<label htmlFor="sisa">Total uang</label>*/}
        {/*<input className="block p-2 mb-4" disabled value={totalUang} />*/}
        {/*<label htmlFor="sisa">Masukan uang</label>*/}
        {/*<input className=" block p-2" value={inputUang} />*/}
      </div>
    </>
  );
}
