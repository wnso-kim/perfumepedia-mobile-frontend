import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import Test from "./page/Test";
import Manager from "./page/Manager";
import RequestList from "./page/RequestList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="test" element={<Test />} />
          <Route path="manager">
            <Route index element={<Manager />} />
            <Route path="request-list" element={<RequestList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
