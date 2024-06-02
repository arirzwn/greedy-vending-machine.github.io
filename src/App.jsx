import { useEffect, useState } from "react";
import Input from "./components/Input.jsx";
import FormInput from "./layout/FormInput/FormInput.jsx";
import ListBarang from "./layout/ListBarang.jsx";
import TotalKembalian from "./layout/TotalKembalian.jsx";
import ListBotol from "./layout/ListBotol.jsx";
import AmbilKembalian from "./layout/AmbilKembalian.jsx";
import Button from "./components/Button.jsx";

const uang = [
  { nominal: 100000, gambar: "./src/assets/Uang/seratus.png" },
  {
    nominal: 50000,
    gambar: "./src/assets/Uang/limapuluh.png",
  },
  {
    nominal: 20000,
    gambar: "./src/assets/Uang/duapuluh.png",
  },
  {
    nominal: 10000,
    gambar: "./src/assets/Uang/sepuluh.png",
  },
  {
    nominal: 5000,
    gambar: "./src/assets/Uang/limarebu.png",
  },
  {
    nominal: 2000,
    gambar: "./src/assets/Uang/duarebu.jpg",
  },
  {
    nominal: 1000,
    gambar: "./src/assets/Uang/serebu.png",
  },
  {
    nominal: 500,
    gambar: "./src/assets/Uang/gopean.png",
  },
];

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
  const [minumanDipilih, setMinumanDipilih] = useState([]);
  const [totalHarga, setTotalHarga] = useState(0);
  const [totalUang, setTotalUang] = useState(0);
  const [totalKembalian, setTotalKembalian] = useState(0);
  const [uangmasuk, setUangMasuk] = useState(false);

  useEffect(() => {
    const total = calculateTotalBayar(minumanDipilih);
    setTotalHarga(total);
  }, [minumanDipilih]);

  useEffect(() => {
    const kembalian = calculateTotalKembalian(totalUang, totalHarga);
    setTotalKembalian(kembalian);
  }, [totalUang, totalHarga]);

  function calculateTotalBayar(minumanDipilih) {
    let total = 0;
    minumanDipilih.forEach((minuman) => {
      total += minuman.harga * minuman.jumlah;
    });
    return total;
  }

  function calculateTotalKembalian(totalUang, totalHarga) {
    return totalUang - totalHarga;
  }

  function handleBatal() {
    setMinumanDipilih([]);
    setTotalHarga(0);
    setTotalUang(0);
    setTotalKembalian(0);
  }

  function calculateKembalian(totalKembalian, uang) {
    // Sort the uang array in descending order
    uang.sort((a, b) => b.nominal - a.nominal);

    let result = [];

    for (let i = 0; i < uang.length; i++) {
      let count = 0;
      while (totalKembalian >= uang[i].nominal) {
        totalKembalian -= uang[i].nominal;
        count++;
      }
      if (count > 0) {
        result.push({ ...uang[i], jumlah: count });
      }
    }

    return result;
  }

  useEffect(() => {
    const kembalian = calculateTotalKembalian(totalUang, totalHarga);
    const uangKembalian = calculateKembalian(kembalian, uang);
    setTotalKembalian(uangKembalian);
  }, [totalUang, totalHarga]);

  function handleSelesai() {
    if (!uangmasuk && totalKembalian < 0) {
      alert("Selesaikan pembayaran terlebih dahulu");
    } else {
      setMinumanDipilih([]);
      setTotalHarga(0);
      setTotalUang(0);
      setTotalKembalian(0);
      setUangMasuk(false);
    }
  }

  return (
    <>
      <div className="w-[60%] h-1/2 bg-[#3AA6B9] rounded-md mx-auto min-h-screen  p-4 flex gap-2">
        <div className="bg-[#FF9EAA] rounded-md p-4 w-[70%]">
          <ListBotol data={botol} setMinumanDipilih={setMinumanDipilih} />
          <Input
            dataHarga={botol}
            setMinumanDipilih={setMinumanDipilih}
            totalHarga={totalHarga}
            handleBatal={handleBatal}
            setTotalKembalian={setTotalKembalian}
            setTotalHarga={setTotalHarga}
          />
          <div className="flex gap-2 mt-2">
            <div className="flex-1">
              {minumanDipilih.map((minuman, index) => (
                <ListBarang
                  key={index}
                  data={minuman}
                  jumlah={minuman.jumlah}
                />
              ))}
            </div>
            {minumanDipilih.length > 0 && (
              <Button
                className="rounded-md shadow-slate-800 shadow-sm  text-sm w-20 bg-white"
                onClick={handleSelesai}
              >
                Selesai
              </Button>
            )}
          </div>
        </div>
        <div>
          <TotalKembalian totalKembalian={totalKembalian} />
          <AmbilKembalian uang={uang} totalKembalian={totalKembalian} />
        </div>
      </div>
    </>
  );
}
