import Helmet from "react-helmet";
import Header from "./header";
import Footer from "./footer";

const MainFrame = (props) => {
  return (
    <div className="w-full flex flex-col main-frame content-center min-h-full">
      <Helmet>
        <title>{props.title}</title>
      </Helmet>
      <Header />
      <main
        id="main-content-area"
        className="flex-grow flex flex-row content-center"
      >
        <div className="mx-auto page-content">{props.children}</div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default MainFrame;
