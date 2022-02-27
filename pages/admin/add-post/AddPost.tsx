import { type } from "os";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import Button from "../../../components/atoms/button/button";
import Title from "../../../components/atoms/title/Title";
let ReactQuill =
  typeof window === "object" ? require("react-quill") : () => false;
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/router";
import InputCustom from "../../../components/atoms/input/InputCustom";
import { SubmitHandler, useForm } from "react-hook-form";
import { PostInterface } from "../../../interfaces/post.interface";
import PostService from "../../../services/post.service";
import { OK } from "../../../configs";
const AddPost = () => {
  const router = useRouter();
  const { register, setValue, handleSubmit } = useForm<PostInterface>();
  const [text, setText] = useState("");
  const handleChange = (value: any) => {
    setValue("content", value);
  };
  const redirectUrl = (url: string) => {
    router.push(url);
  };
  const onSubmit: SubmitHandler<PostInterface> =async (data) => {
    console.log(data);
    const res = await PostService.AddPost(data)
    if (res.status === OK) {
      alert("thêm bài viết thành công")
      router.push('/admim/news')
    }else{
      alert("thất bại")
    }
  };
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <Title title="Quản lý bài viết" />
        </div>
        <div>
          <Button
            title="Quay lại"
            classname="w-full lg:w-[150px]  p-[10px] rounded-lg hover:bg-indigo-600 transition-all"
            icon={<BiArrowBack size={20} />}
            onClick={() => redirectUrl("/admin/news")}
          />
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputCustom placeholder="Tiêu đề bài viết" fieldName="title" register={register} />
        <ReactQuill value={text} onChange={handleChange} />
        <button className="flex items-center gap-1 justify-center bg-indigo-500 text-white p-2 w-full mt-3 rounded-lg transition-all hover:bg-indigo-700">Thêm bài viết</button>
      </form>
    </div>
  );
};

export default AddPost;
