import "./App.css";
import { Route, Routes } from "react-router-dom";
import Provider from "./provider";
import Categories from "./categories";
import IceCreams from "./iceCreams.js";
import ShoppingCard from "./shoppingCard";

export default function App() {
  return (
    <>
      <Provider>
        <Categories />
        <Routes>
          <Route path="/:category" element={<IceCreams />} />
        </Routes>
        <ShoppingCard />
      </Provider>
    </>
  );
}
