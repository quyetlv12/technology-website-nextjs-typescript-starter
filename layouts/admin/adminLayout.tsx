import { Children, FC, ReactNode, useState } from "react";
import Header from "../../components/molecules/website/header/header";
import Sidebar from "../../components/molecules/admin/sidebar/sidebar";
import HeaderAdmin from "../../components/molecules/admin/header/Header";

interface Props {
  children: ReactNode;
}
const AdminLayout: FC<Props> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      <HeaderAdmin />
      <main className="flex w-full h-screen overflow-hidden">
        <Sidebar />
        <section className="w-full p-4">
          <div className="w-full border-dashed border-4 p-4 text-md overflow-scroll h-screen overflow-x-hidden">
            {children}
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminLayout;
