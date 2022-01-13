import { FC } from "react";
import Footer from "../../components/website/footer/footer";
import Header from "../../components/website/header/header";
interface Props {
    children: React.ReactNode;
}
const WebsiteLayout:FC<Props> = ({children}) => {
    return (
        <div>
            <Header />
            <main className="container mx-auto p-2">{children}</main>
            <Footer />
        </div>
    );
}

export default WebsiteLayout;