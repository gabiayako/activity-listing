import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ActivitiesList, Report, Student } from "./pages";
import { ReactQueryProvider } from "./ReactQueryProvider";

function App() {
  return (
    <ReactQueryProvider>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<ActivitiesList />} />
          <Route path="/report" element={<Report />} />
          <Route path="/student" element={<Student />} />
        </Routes>
      </BrowserRouter>
    </ReactQueryProvider>
  );
}

export default App;
