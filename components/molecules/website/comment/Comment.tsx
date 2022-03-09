import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { CommentProps } from "../../../../interfaces/comment.interface";
import { RootState } from "../../../../redux/store";
import Button from "../../../atoms/button/button";
import InputCustom from "../../../atoms/input/InputCustom";
import ListComment from "./ListComment";
import _ from "lodash";
import { commentService } from "../../../../services/commentService";
import { OK } from "../../../../configs";
import { useAlert } from "react-alert";
interface CommentPrps {
  comment?: any;
}
const Comment: FC<CommentPrps> = ({ comment }) => {
  const router = useRouter();
  const { id } = router.query;
  const alert = useAlert();
  const { user, loginStatus } = useSelector((state: RootState) => state?.auth);
  const { register, handleSubmit, reset } = useForm<CommentProps>();
  const onSubmit: SubmitHandler<CommentProps> = async (data) => {
    const comment = _.assign(data, {
      postId: id,
      user: {
        id: user.methodLogin === "google" ? user._id : user._id,
        name: user.methodLogin === "google" ? user.displayName : user.login,
        photo:
          user.methodLogin === "google"
            ? user.photos[0].value
            : user.avatar_url,
      },
    });
    const res = await commentService.writeComment(comment);
    if (res.status === OK) {
      alert.success("Thêm bình luận thành công !");
      router.replace(router.asPath);
      reset();
    } else {
      alert.error("Có lỗi xảy ra , vui lòng thử lại!");
    }
  };
  const handleRedirectPage = () => {
    router.push("/login");
  };
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
            <form onSubmit={handleSubmit(onSubmit)}>
              {loginStatus ? (
                <div>
                  <div className="flex gap-3">
                    <Image
                      width={50}
                      height={50}
                      objectFit="cover"
                      src={
                        user?.methodLogin === "google"
                          ? user?.photos[0].value
                          : user?.avatar_url
                      }
                      className="rounded-full"
                    />
                    <InputCustom
                      placeholder="Nhập bình luận"
                      register={register}
                      fieldName="comment"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-3 w-full p-2 rounded-lg  flex items-center gap-1 justify-center bg-indigo-500 text-white"
                  >
                    Bình luận
                  </button>
                </div>
              ) : (
                <Button
                  classname="w-full p-3 rounded-xl hover:bg-indigo-600 ease-in-out transition-all"
                  title="Vui lòng đăng nhâp để bình luận !"
                  onClick={handleRedirectPage}
                />
              )}
            </form>

            <div className="mt-6  border" />
            <ListComment arrComment={comment}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
