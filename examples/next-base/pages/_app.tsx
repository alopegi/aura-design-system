import type { AppProps } from "next/app";
import "@aura-design/system/main.css";
import "nprogress/nprogress.css";

import "@/styles/main.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
