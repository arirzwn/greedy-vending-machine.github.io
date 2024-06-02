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

export default function ListBotol() {
  return (
    <>
      <ul className="flex gap-4 flex-wrap justify-center ">
        {botol.map((objBotol) => (
          <li
            className="bg-white rounded-md shadow-md w-32 h-27  flex flex-col items-center p-2 active:ring-1 active:ring-amber-400"
            key={objBotol.id}
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
