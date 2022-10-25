import { useContext } from "react";
import { Context } from "./provider";

export default function ShoppingCard() {
  const [state] = useContext(Context);
  console.log(state);
  return (
    <>
      {Object.keys(state).map((obj) => {
        return (
          <div>
            name: {state[obj].name} quantity: {state[obj].quantity}
          </div>
        );
      })}
    </>
  );
}
