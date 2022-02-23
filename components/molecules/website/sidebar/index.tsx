import { useForm } from "react-hook-form";
import InputCustom from "../../../atoms/input/InputCustom";

const SideBar = () => {
  const {register} = useForm()
  return (
    <div>
      <h3 className="font-bold text-xl">Danh mục tìm kiếm nhiều nhất</h3>

      <InputCustom register={register} placeholder="Tìm kiếm bài viết" />
    </div>
  );
}

export default SideBar;