import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

interface Props {
    children: React.ReactNode;
}
const WebsiteLayout = ({children}:Props) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default WebsiteLayout;