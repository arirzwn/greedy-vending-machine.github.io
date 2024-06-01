import ListBotol from "./ListBotol.jsx";
import Input from "./components/Input.jsx";
import FormInput from "./layout/FormInput/FormInput.jsx";
import ListBarang from "./layout/ListBarang.jsx";

export default function App() {
  return (
    <>
      <div className="w-1/2 h-1/2 bg-slate-400 mx-auto min-h-screen my-4 p-4">
        <div className="bg-pink-400  p-4 w-[70%]">
          <ListBotol />
          <Input />
          <ListBarang />
        </div>
      </div>
    </>
  );
}
