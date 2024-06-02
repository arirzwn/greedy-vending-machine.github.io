import { useEffect, useState } from "react";

export default function ListBotol({ data, setMinumanDipilih }) {
  const [pilihMinuman, setPilihMinuman] = useState();

  function handleClick(id) {
    setPilihMinuman(id);
  }

  function getSelectedBottle() {
    const selectedBottle = data.find((b) => b.id === pilihMinuman);
    if (selectedBottle) {
      setMinumanDipilih(selectedBottle);
      console.log(selectedBottle);
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
            className="bg-white rounded-md shadow-md w-32 h-27  flex flex-col items-center p-2 active:ring-1 active:ring-amber-400"
            key={objBotol.id}
            onClick={() => handleClick(objBotol.id)}
          >
            <figure className="w-6">
              <img src={objBotol.img} alt={objBotol.nama} />{" "}
            </figure>
            <div className="text-center">
              <h5 className="text-sm"> {objBotol.nama} </h5>
              <span className="text-sm bg-pink-200 py-1  px-4 rounded-full">
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
