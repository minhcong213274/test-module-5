import React from 'react';
import {Route, Routes} from "react-router-dom";
import ListTour from "./components/List";
import CreateTour from "./components/Create";
import EditTour from "./components/Edit";
import DetailTour from "./components/Detail";


function App() {
  return (
        <div>
          <Routes>
            <Route path={"/"} element={<ListTour/>}></Route>
            <Route path={"/create"} element={<CreateTour/>}></Route>
            <Route path={"/edit/:id"} element={<EditTour/>}></Route>
              <Route path={"/detail/:id"} element={<DetailTour/>}></Route>
          </Routes>
        </div>
  );
}

export default App;