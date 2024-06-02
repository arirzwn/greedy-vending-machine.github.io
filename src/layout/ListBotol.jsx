import { useEffect, useState } from "react";

export default function ListBotol({ data, setMinumanDipilih }) {
  const [pilihMinuman, setPilihMinuman] = useState();

  function handleClick(id) {
    setMinumanDipilih((prevMinumanDipilih) => {
      const existingProductIndex = prevMinumanDipilih.findIndex(
        (product) => product.id === id,
      );
      if (existingProductIndex !== -1) {
        // Jika produk sudah ada, tambahkan jumlahnya
        const existingProduct = { ...prevMinumanDipilih[existingProductIndex] };
        existingProduct.jumlah += 1;
        const newMinumanDipilih = [...prevMinumanDipilih];
        newMinumanDipilih[existingProductIndex] = existingProduct;
        return newMinumanDipilih;
      } else {
        // Jika produk belum ada, tambahkan ke array dengan jumlah 1
        const newProduct = data.find((product) => product.id === id);
        return [...prevMinumanDipilih, { ...newProduct, jumlah: 1 }];
      }
    });
  }

  function getSelectedBottle() {
    const selectedBottle = data.find((b) => b.id === pilihMinuman);
    if (selectedBottle) {
      setMinumanDipilih((prevMinumanDipilih) => {
        const existingBottle = prevMinumanDipilih.find(
          (b) => b.id === selectedBottle.id,
        );
        if (existingBottle) {
          // Jika botol sudah ada, tambahkan jumlahnya
          existingBottle.jumlah += 1;
          return [...prevMinumanDipilih];
        } else {
          // Jika botol belum ada, tambahkan ke array dengan jumlah 1
          return [...prevMinumanDipilih, { ...selectedBottle, jumlah: 1 }];
        }
      });
    }
  }

  useEffect(() => {
    getSelectedBottle();
  }, [pilihMinuman]);

  return (
    <>
      <ul className="flex gap-4 flex-wrap justify-center ">
        {data.map((objBotol) => (
          <li
            className="bg-white rounded-md shadow-md w-32 h-27  flex flex-col items-center p-2 active:ring-1 active:ring-amber-400 hover:bg-[#3AA6B9] hover:text-white"
            key={objBotol.id}
            onClick={() => handleClick(objBotol.id)}
          >
            <figure className="w-6">
              <img src={objBotol.img} alt={objBotol.nama} />{" "}
            </figure>
            <div className="text-center">
              <h5 className="text-sm"> {objBotol.nama} </h5>
              <span className="text-sm bg-[#FF9EAA] py-1  px-4 rounded-full">
                {" "}
                {objBotol.harga}{" "}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
