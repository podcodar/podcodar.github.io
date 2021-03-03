import { AppProps } from "next/app";
import LandingPageLayout from "../components/LandingPageLayout";

import 'antd/dist/antd.css';

function AppLayout({ Component, pageProps }: AppProps) {
  return (
    <LandingPageLayout>
      <Component {...pageProps} />
    </LandingPageLayout>
  );
}

export default AppLayout
