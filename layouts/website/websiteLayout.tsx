import { useRouter } from "next/router";
import { FC } from "react";
import { useDispatch } from "react-redux";
import Footer from "../../components/molecules/website/footer/footer";
import Header from "../../components/molecules/website/header/header";
import {
  changeLoginStatus,
  saveInfoAccount,
} from "../../redux/slices/authSlice";
import { checkTypeWindow } from "../../utility";
interface Props {
  children: React.ReactNode;
}
const WebsiteLayout: FC<Props> = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter()  
  let items;
  if (checkTypeWindow()) {
    if (localStorage.getItem('user') !== null) {
      items = { ...localStorage };
      const user = items ? JSON.parse(items?.user) : {};
      dispatch(saveInfoAccount(user));
      if (user) {
        dispatch(changeLoginStatus(true));
      }
    }
  }
  return (
    <div>
      <Header />
      <main className={`${router.pathname === '/' ? null : "max-w-[90%] py-5 mx-auto" }  overflow-y-hidden`}>
        <div className="flex flex-wrap overflow-hidden min-h-screen">
          <div className="w-full">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WebsiteLayout;
