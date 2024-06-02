export default function TotalKembalian({ totalKembalian }) {
  return (
    <input
      className="block p-2  rounded-md flex-1"
      value={totalKembalian}
      disabled
    />
  );
}
