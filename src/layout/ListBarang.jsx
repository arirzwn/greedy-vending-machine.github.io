import Button from "../components/Button.jsx";

export default function ListBarang({ data, jumlah }) {
  return (
    <>
      {data.nama ? (
        <div className="flex gap-2 mt-2  ">
          <div className="p-2  rounded-md flex-1 bg-white ">
            <div className="flex items-center gap-2">
              <img src={data.img} alt={data.nama} className="w-7 " />
              <span>{data.nama}</span>
              <span> {jumlah}</span>
            </div>
          </div>
        </div>
      ) : (
        <p>Tidak ada minuman yang dipilih</p>
      )}
    </>
  );
}
