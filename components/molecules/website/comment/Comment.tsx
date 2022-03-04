import Image from "next/image";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import InputCustom from "../../../atoms/input/InputCustom";
import ListComment from "./ListComment";

const Comment = () => {
  const { user, loginStatus } = useSelector((state: RootState) => state?.auth);
  const { register } = useForm();
  return (
    <div className="bg-grey w-full">
      <div className="max-w-full mx-auto mt-10">
        <div className="bg-white p-5 modal__content rounded">
          <div className="modal__header mb-4">
            <div className="p-2 rounded-full bg-purple-lightest inline-block">
              <i className="fas fa-comments text-2xl text-purple-dark" />
            </div>
          </div>
          <div className="modal__body">
            <p className="text-grey-darkest font-medium mb-1 text-base">
              Bình luận
            </p>
            <div className="flex gap-3">
              <img src="" alt="" />
              <InputCustom placeholder="Nhập bình luận" register={register} />
            </div>
            <div className="mt-6  border" />
            <ListComment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
