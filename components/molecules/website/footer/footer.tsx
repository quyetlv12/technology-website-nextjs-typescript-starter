import { SubmitHandler, useForm } from "react-hook-form";
import { MailItf } from "../../../../interfaces/mail.interface";
import InputCustom from "../../../atoms/input/InputCustom";
import { mailService } from "../../../../services/mailService";
import { useAlert } from "react-alert";
const Footer = () => {
  const alert = useAlert();
  const { register, handleSubmit , reset } = useForm<MailItf>();
  const onSubmit: SubmitHandler<MailItf> = async (data) => {
    const res = await mailService.sendEmail(data);
    if (res.status === 200) {
      alert.success(
        "Đăng kí thành công , chúng tôi sẽ gửi email đến bạn sớm nhất"
      );
      reset()
    }
  };
  return (
    <footer className="text-white bg-indigo-500 body-font">
      <div className="border-t border-gray-200">
        <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
          <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-center">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex items-center"
            >
              <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
                <div className="d-flex justify-center items-center">
                  <InputCustom
                    register={register}
                    className="text-black rounded-lg"
                    placeholder="Nhập địa chỉ email ..."
                    fieldName="email"
                    required
                  />
                </div>
              </div>
              <button
                className="inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none rounded"
                type="submit"
              >
                Đăng kí
              </button>
            </form>
          </div>
          <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
            <a className="text-white">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-3 text-white">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="ml-3 text-white">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a className="ml-3 text-white">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>
          </span>
        </div>
      </div>
      <div className="bg-indigo-500">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-white text-sm text-center sm:text-left">
            © 2022 Tailwind —
            <a
              href="https://twitter.com/knyttneve"
              className="text-white ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              @quyetdev
            </a>
          </p>
          <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-white text-sm">
            Enamel pin tousled raclette tacos irony
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
