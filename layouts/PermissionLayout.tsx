import { AppProps } from "next/app";
import { useRouter } from "next/router";
import WebsiteLayout from "./website/websiteLayout";
import AdminLayout from "./admin/adminLayout";
const PermissionLayout = ({Component, pageProps}:AppProps) => {
  const { pathname, events } = useRouter();
  const isAdminPage = pathname.includes("/admin");
  return (
    <main>
        {isAdminPage ? (
            <AdminLayout>
              <Component {...pageProps} />
            </AdminLayout>
          ) : (
            <WebsiteLayout>
              <Component {...pageProps} />
            </WebsiteLayout>
          )}
    </main>
  )
};

export default PermissionLayout;
