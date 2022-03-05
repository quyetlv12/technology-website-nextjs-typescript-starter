import type { AppProps } from "next/app";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { positions, Provider as AlertProvider, transitions } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { Provider } from "react-redux";
import AdminLayout from "../layouts/admin/adminLayout";
import WebsiteLayout from "../layouts/website/websiteLayout";
import { store } from "../redux/store";
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
  // console.log(process.env.CLIENT_ID_GITHUB);
  
  const { pathname } = useRouter();
  const isAdminPage = pathname.includes("/admin");
  const options = {
    // you can also just use 'bottom center'
    position: positions.TOP_RIGHT,
    timeout: 5000,
    offset: "20px",
    // you can also just use 'scale'
    transition: transitions.FADE,
  };  
  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...options}>
        {isAdminPage ? (
          <AdminLayout>
            <Component {...pageProps} />
          </AdminLayout>
        ) : (
          <WebsiteLayout>
            <Component {...pageProps} />
          </WebsiteLayout>
        )}
      </AlertProvider>
    </Provider>
  );
}

export default MyApp;
