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
        dataProps={posts.map((_elt: any, index: any) => (
          <tr key={index}>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center justify-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <Image
                    width={50}
                    height={50}
                    objectFit="cover"
                    src={_elt.image}
                    alt=""
                    className="h-10 w-10 rounded-full"
                  />
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900 text-center">
                {_elt.title}
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-center">
              {_elt.content}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
              {_elt.author}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                {convertIsoStringToDate(_elt.createdDate)}
              </a>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium flex justify-center items-center gap-3">
              <button>
                <AiFillEdit size={20} className="text-green-700 mt-3" />
              </button>
              <button>
                <AiFillDelete size={20} className="text-red-600 mt-3" />
              </button>
            </td>
          </tr>
        ))}
      />
    </div>
  );
};

export default News;
