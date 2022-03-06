import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardsList from "./pages/CardsList";
import Lesson from "./pages/Lesson";
import Report from "./pages/Report";
import { ReactQueryProvider } from "./ReactQueryProvider";

function App() {
  return (
    <ReactQueryProvider>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<CardsList />} />
          <Route path="/lesson" element={<Lesson />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </BrowserRouter>
    </ReactQueryProvider>
  );
}

export default App;
