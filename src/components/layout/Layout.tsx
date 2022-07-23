import { ToastContainer } from "react-toastify";

import { Footer } from "@/components/part/shared/Footer";
import { Header } from "@/components/part/shared/Header";

import "react-toastify/dist/ReactToastify.css";

interface Props {
  children: JSX.Element;
}

export const Layout = (props: Props) => {
  const { children } = props;

  return (
    <>
      <ToastContainer position="top-center" />
      <Header />
      <main className="mx-auto max-w-screen-sm p-4 leading-7">{children}</main>
      <Footer />
    </>
  );
};
