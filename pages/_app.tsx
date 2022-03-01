import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import WebsiteLayout from "../layouts/website/websiteLayout";
import AdminLayout from "../layouts/admin/adminLayout";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "../styles/globals.css";
import "../styles/style.css";
// use ngprogress create snipet loading
NProgress.configure({ showSpinner: true });
Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});
Router.events.on("routeChangeError", () => {
  NProgress.done();
});
// ==== end loading snipet ====
function MyApp({ Component, pageProps }: AppProps) {
  const { pathname, events } = useRouter();
  const isAdminPage = pathname.includes("/admin");
  return isAdminPage ? (
    <AdminLayout>
      <Component {...pageProps} />
    </AdminLayout>
  ) : (
    <WebsiteLayout>
      <Component {...pageProps} />
    </WebsiteLayout>
  );
}

export default MyApp;
