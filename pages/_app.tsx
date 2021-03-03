import { AppProps } from "next/app";
import 'antd/dist/antd.css';
import SiderDemo from "../components/Layout";

function AppLayout({ Component, pageProps }: AppProps) {
  return (
    <SiderDemo>
      <Component {...pageProps} />
    </SiderDemo>
  );
}

export default AppLayout
