import { wrapper } from "@/store";
import "@/styles/index.css";
import { AppProps } from "next/app";

function CustomApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(CustomApp);
