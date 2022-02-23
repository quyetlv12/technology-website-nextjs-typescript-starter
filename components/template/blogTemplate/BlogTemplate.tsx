import { FC, ReactNode } from "react";
import SideBar from "../../molecules/website/sidebar";
interface TemplateProps {
  children?: ReactNode;
}
const BlogTemplate: FC<TemplateProps> = ({ children }) => {
  return (
    <div>
      <div className="flex flex-wrap -m-3">
        <div className="md:w-1/4 w-full p-4">
          <SideBar />
        </div>
        <div className="md:w-3/4 w-full">{children}</div>
      </div>
    </div>
  );
};

export default BlogTemplate;
