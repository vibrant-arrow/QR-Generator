import "./App.css";
import QRCode from "./components/QRCode";
import { Nav, NavDrawer, Footer, Links } from "./components/common/common";
import useMediaQuery from "./useMediaQuery";
function App() {
  const matches = useMediaQuery("(min-width: 950px)");

  return (
    <>
      {matches ? (
        <>
          <Nav></Nav>
          <QRCode></QRCode>
          <Links></Links>
          <Footer></Footer>
        </>
      ) : (
        <>
          <NavDrawer></NavDrawer>
          <QRCode></QRCode>
        </>
      )}
    </>
  );
}

export default App;
