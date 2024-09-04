import { useEffect, useState } from "react";

export default function FirstComponent() {
  const [isActive, setIsActive] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(function () {
    console.log("first render");
    setIsActive(true);
  }, []);

  useEffect(
    function () {
      console.log("second reneder");
      if (isActive) {
        setVisible(true);
      }
    },
    [isActive]
  );
  return <div>{visible && <p style>React js library</p>}</div>;
}
