import { useState } from "react";
import Input from "./components/Input.jsx";
import FormInput from "./layout/FormInput/FormInput.jsx";
import ListBarang from "./layout/ListBarang.jsx";
import TotalKembalian from "./layout/TotalKembalian.jsx";
import ListBotol from "./layout/ListBotol.jsx";
import AmbilKembalian from "./layout/AmbilKembalian.jsx";

const botol = [
  {
    id: 1,
    nama: "Cool Cola",
    img: "./src/assets/botol/Cool_Cola.png",
    harga: 1000,
  },
  {
    id: 2,
    nama: "Green Cola",
    img: " ./src/assets/botol/Green_Cola.png",
    harga: 2000,
  },
  {
    id: 3,
    nama: "Orange Cola",
    img: "./src/assets/botol/Orange_Cola.png",
    harga: 2000,
  },
  {
    id: 4,
    nama: "Original Cola",
    img: "./src/assets/botol/Original_Cola.png",
    harga: 1000,
  },
  {
    id: 5,
    nama: "Violet Cola",
    img: "./src/assets/botol/Violet_Cola.png",
    harga: 1000,
  },
  {
    id: 6,
    nama: "Yellow Cola",
    img: "./src/assets/botol/Yellow_Cola.png",
    harga: 1000,
  },
];

export default function App() {
  const [minumanDipilih, setMinumanDipilih] = useState({});
  return (
    <>
      <div className="w-[60%] h-1/2 bg-slate-400 mx-auto min-h-screen my-4 p-4 flex gap-2">
        <div className="bg-pink-400  p-4 w-[70%]">
          <ListBotol data={botol} setMinumanDipilih={setMinumanDipilih} />
          <Input />
          <ListBarang data={minumanDipilih} />
        </div>
        <div>
          <TotalKembalian />
          <AmbilKembalian />
        </div>
      </div>
    </>
  );
}
