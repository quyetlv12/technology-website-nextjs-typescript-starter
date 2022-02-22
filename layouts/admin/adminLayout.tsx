import { FC, ReactNode, useState } from "react";
import Header from "../../components/molecules/website/header/header";
import Sidebar from "../../components/molecules/admin/sidebar/sidebar";

interface Props {
  children: ReactNode;
}
const AdminLayout:FC<Props> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden">
    {/* Sidebar */}
    <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

    {/* Content area */}
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
    {children}
    </div>
  </div>
  );
};

export default AdminLayout;
