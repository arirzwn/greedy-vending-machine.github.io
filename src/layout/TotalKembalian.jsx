export default function TotalKembalian({ totalKembalian }) {
  return (
    <input
      className="block p-2 bg-[#FF9EAA] rounded-md flex-1 text-white"
      value={totalKembalian}
      disabled
    />
  );
}
