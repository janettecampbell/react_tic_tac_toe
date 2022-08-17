import { useState } from "react";

const Square = (props) => {
  const { value } = props;
  const [square, setSquare] = useState(null);

  return (
    <button className="square" onClick={() => setSquare("X")}>
      {square}
    </button>
  );
};

export default Square;
