import { useRouter } from "next/router";
import { FC } from "react";
import Footer from "../../components/molecules/website/footer/footer";
import Header from "../../components/molecules/website/header/header";
interface Props {
  children: React.ReactNode;
}
const WebsiteLayout: FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="max-w-5xl mx-auto overflow-y-hidden">
        <div className="flex flex-wrap overflow-hidden">
          <div className="w-full">
          {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WebsiteLayout;
