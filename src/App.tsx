import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<h1>Home page coming soon</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;