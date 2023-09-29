import { ILayout } from "../../types";
import Footer from "./Footer";
import Header from "./Header";

const DefaultLayout = ({ children }: ILayout) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
