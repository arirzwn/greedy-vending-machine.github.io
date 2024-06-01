import Button from "../components/Button.jsx";

export default function ListBarang() {
  return (
    <>
      <div className="flex gap-2 mt-2 ">
        <input className="block p-2 h-28 rounded-md flex-1" disabled />
        <Button className="rounded-md shadow-slate-800 shadow-sm  text-sm w-20 bg-white">
          Ambil{" "}
        </Button>
      </div>
    </>
  );
}
