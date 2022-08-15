import { useState } from "react";

const Square = (props) => {
  const { num } = props;
  const [square, setSquare] = useState("");

  return (
    <button className="square" onClick={() => setSquare("X")}>
      {square}
    </button>
  );
};

export default Square;
