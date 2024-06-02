export default function AmbilKembalian({ uang, totalKembalian }) {
  uang.sort((a, b) => b.nominal - a.nominal);

  let coinCounts = uang.map(() => 0); // Array untuk melacak berapa kali setiap koin digunakan

  for (let i = 0; i < uang.length; i++) {
    while (totalKembalian >= uang[i].nominal) {
      totalKembalian -= uang[i].nominal;
      coinCounts[i]++; // Tambahkan 1 ke hitungan koin saat ini
    }
  }

  return (
    <>
      <div className="text-white ">
        <div className="my-2">
          <span className="text-white">Uang yang keluar</span>
        </div>

        <div className=" flex flex-col gap-2 bg-[#FF9EAA] p-2 rounded-md">
          {uang.map((objUang, index) => (
            <div
              className="flex items-center justify-between"
              key={objUang.nominal}
            >
              <figure>
                <img src={objUang.gambar} alt={objUang.nominal} />
              </figure>
              <span className="text-sm"> {coinCounts[index]} lembar </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
