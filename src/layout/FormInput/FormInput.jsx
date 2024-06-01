import Input from "../../components/Input.jsx";
import Button from "../../components/Button.jsx";

export default function FormInput() {
  return (
    <>
      <div className="flex gap-2">
        <div className="  ">
          <Input />
          <Button className="p-2 bg-white">Reset</Button>

          <Button className="p-2 bg-white">Masukan</Button>
        </div>
      </div>
    </>
  );
}
