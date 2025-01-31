import "./App.css";
import QRCode from "./components/QRCode";
import { Nav, Footer, Links } from "./components/common/common";
function App() {
  return (
    <>
      <Nav></Nav>
      <QRCode></QRCode>
      <Links></Links>
      <Footer></Footer>
    </>
  );
}

export default App;
