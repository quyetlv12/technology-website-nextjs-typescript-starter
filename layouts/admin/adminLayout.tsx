import { FC, ReactNode, useState } from "react";
import Header from "../../components/molecules/website/header/header";
import Sidebar from "../../components/molecules/admin/sidebar/sidebar";
import HeaderAdmin from "../../components/molecules/admin/header/Header";

interface Props {
  children: ReactNode;
}
const AdminLayout: FC<Props> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
   <div></div>
  );
};

export default AdminLayout;
