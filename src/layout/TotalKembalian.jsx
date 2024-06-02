export default function TotalKembalian({ totalKembalian }) {
  return (
    <input
      className="block p-2 bg-[#FF9EAA] rounded-md flex-1 text-white placeholder:text-slate-50 placeholder:text-sm"
      value={totalKembalian}
      disabled
      placeholder="Total kembalian "
    />
  );
}
