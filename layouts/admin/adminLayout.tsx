import { ReactNode } from "react";
import Header from "../../components/molecules/website/header/header";
import Sidebar from "../../components/molecules/admin/sidebar/sidebar";

interface Props {
  children: ReactNode;
}
const AdminLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <main className="py-2 mx-auto">{children}</main>
      <Sidebar />
    </div>
  );
};

export default AdminLayout;
