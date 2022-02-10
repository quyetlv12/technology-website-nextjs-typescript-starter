import { useRouter } from "next/router";
import { FC } from "react";
import Footer from "../../components/molecules/website/footer/footer";
import Header from "../../components/molecules/website/header/header";
interface Props {
  children: React.ReactNode;
}
const WebsiteLayout: FC<Props> = ({ children }) => {
  const router = useRouter()  
  if (typeof window !== undefined) {
    console.log(router);
    
  }else{
    console.log("server");
    
  }
  
  return (
    <div>
      <Header />
      <main className="max-w-5xl mx-auto">
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
