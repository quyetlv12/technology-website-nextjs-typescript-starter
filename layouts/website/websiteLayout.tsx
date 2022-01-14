import { FC } from "react";
import Footer from "../../components/molecules/website/footer/footer";
import Header from "../../components/molecules/website/header/header";
interface Props {
    children: React.ReactNode;
}
const WebsiteLayout:FC<Props> = ({children}) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

export default WebsiteLayout;