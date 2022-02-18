import { Routes, Route } from "react-router-dom";

// 전 페이지 공통사항 컴포턴트에서 불러옴
import Header from "./components/Header";
import Footer from "./components/Footer";

// 라우팅 처리 될 페이지
import Main from "./pages/Main";
import Info from "./pages/Info";

function App() {
  return (
    <div>
      <Header />
      <hr />
      <Routes>
        <Route path="/" element={<Main />} exact={true} />
        <Route path="/info/*" element={<Info />} />
      </Routes>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
