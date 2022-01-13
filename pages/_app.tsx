import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import AdminLayout from "../layouts/admin/adminLayout";
import WebsiteLayout from "../layouts/website/websiteLayout";
import "../styles/globals.css";
function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const isAdminPage = pathname.includes("/admin");

  return (
    <div>
      {isAdminPage ? (
        <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout>
      ) : (
        <WebsiteLayout>
          <Component {...pageProps} />
        </WebsiteLayout>
      )}
    </div>
  );
}

export default MyApp;
