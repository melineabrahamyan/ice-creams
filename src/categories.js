import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Items from "./Items";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    Items.getCategories().then((res) => setCategories(res.data));
  }, []);

  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <>
      {categories.map((category) => {
        return (
          <div>
            <button
              onClick={() => {
                handleClick(`/${category}`);
              }}
            >
              {category}
            </button>
          </div>
        );
      })}
    </>
  );
}
