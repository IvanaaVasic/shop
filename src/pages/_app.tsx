import { ReactNode } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper, store } from "../../store/store";
import { Provider } from "react-redux";
import { NextPage } from "next";

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type Props = AppProps & {
  Component: Page;
};

function App({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);
  return (
    <>
      <Provider store={store}>
        {getLayout(<Component {...pageProps} />)}
      </Provider>
    </>
  );
}

export default wrapper.withRedux(App);
