const uang = [{ value: 100000 }];

export default function AmbilKembalian() {
  return (
    <>
      <div>
        <span>Ambil Kembalian</span>
        <form>
          <input
            type="text"
            name="kembalian"
            id="kembalian"
            className="p-2  rounded-md flex-1"
          />
        </form>
      </div>
    </>
  );
}
