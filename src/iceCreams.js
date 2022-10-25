import { useEffect, useState, useContext } from "react";
import { Context } from "./provider";
import { useParams } from "react-router-dom";
import Items from "./Items";

export default function IceCreams() {
  const [iceCreams, setIceCreams] = useState([]);
  const params = useParams();
  const [state, setState] = useContext(Context);

  useEffect(() => {
    Items.getIceCreams(params.category).then((res) => setIceCreams(res.data));
  }, [params.category]);

  const handleSelect = (id, name) => {
    setState((prevState) => {
      return {
        ...prevState,

        [id]: {
          quantity: prevState[id] ? prevState[id].quantity + 1 : 1,
          name,
        },
      };
    });
  };

  return (
    <div className="card-wrapper">
      {iceCreams.map((iceCream) => {
        const { imageUrl, name, price, availableQuantity, id } = iceCream;
        return (
          <div className="card">
            <div>
              <img src={imageUrl} />
            </div>
            <div>name: {name} </div>
            <div>price: {price} </div>
            <div>
              available Quantity:
              {state[id]?.quantity
                ? availableQuantity - state[id]?.quantity
                : availableQuantity}
              /{availableQuantity}
            </div>
            <button
              disabled={availableQuantity === state[id]?.quantity}
              onClick={() => {
                handleSelect(id, name);
              }}
            >
              Select
            </button>
          </div>
        );
      })}
    </div>
  );
}
