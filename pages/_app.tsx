import type { AppProps } from "next/app";
import WebsiteLayout from "../layouts/website/websiteLayout";
import "../styles/globals.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WebsiteLayout>
      <Component {...pageProps} />
    </WebsiteLayout>
  );
}

export default MyApp;
