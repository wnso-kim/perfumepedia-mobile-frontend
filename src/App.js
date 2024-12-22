import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import Test from "./page/Test";
import Manager from "./page/Manager";
import RequestList from "./page/RequestList";
import RequestAdd from "./page/RequestAdd";
import RequestRemove from "./page/RequestRemove";
import RequestEdit from "./page/RequestEdit";
import UserAdd from "./page/UserAdd";
import UserRemove from "./page/UserRemove";
import UserEdit from "./page/UserEdit";

function App() {
  return (
    <div className="max-w-[375px] min-h-screen mx-auto bg-gray-fa shadow-md">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Main />} />
            <Route path="add" element={<UserAdd />} />
            <Route path="remove" element={<UserRemove />} />
            <Route path="edit" element={<UserEdit />} />
          </Route>
          <Route path="test" element={<Test />} />
          <Route path="manager">
            <Route index element={<Manager />} />
            <Route path="request-list">
              <Route index element={<RequestList />} />
              <Route path="add" element={<RequestAdd />} />
              <Route path="remove" element={<RequestRemove />} />
              <Route path="edit" element={<RequestEdit />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
