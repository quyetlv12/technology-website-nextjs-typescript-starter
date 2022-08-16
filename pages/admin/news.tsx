import Image from "next/image";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Button from "../../components/atoms/button/button";
import InputCustom from "../../components/atoms/input/InputCustom";
import Title from "../../components/atoms/title/Title";
import Tables from "../../components/molecules/admin/table/Tables";
import PostService from "../../services/post.service";
import { convertIsoStringToDate } from "../../utility";
import { AiFillEdit, AiFillDelete, AiFillPlusCircle } from "react-icons/ai";

export const getStaticProps = async () => {
  const res = await PostService.getPosts();
  const data = res.data || [];
  if (!data) {
    return {
      props: true,
    };
  }
  return {
    props: {
      posts: data,
    },
  };
};
const News = ({ posts }: any) => {
  const { register } = useForm();
  const router = useRouter()
  const field = [
    "hình ảnh",
    "Tiêu đề bài viết",
    "Nội dung",
    "Người viết",
    "Ngày tạo",
    "Hành động",
  ];
  const redirectUrl = (url:string) =>{
    router.push(url)
  }
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <Title title="Quản lý bài viết" />
        </div>
        <div>
          <Button
            title="Thêm bài viết"
            classname="w-full lg:w-[150px]  p-[10px] rounded-lg hover:bg-indigo-600 transition-all"
            icon={<AiFillPlusCircle size={20} />}
            onClick={() => redirectUrl('/admin/add-post')}
          />
        </div>
      </div>
      <div className="mb-2">
        <InputCustom placeholder="Tìm kiếm bài viết" register={register} />
      </div>
      <Tables
        thProps={field}
        dataProps={''}
      />
    </div>
  );
};

export default News;
