import React, { useState, useEffect } from "react";
import "./color.scss";

const Generate = ({ value }) => {
  const [update, setUpdate] = useState([]);







  useEffect(() => {
    if (update.length > 0) {
      setUpdate([]);
    }
    for (var i = 0; i < value; i++) {
      update.push(i);
    }
    setUpdate(update);
  }, []);

  return (
    <div className="main">
      {update &&
        update.map((i, index) => {
          const color = Math.floor(Math.random() * 1000000);
          return (
            <button className="button">
              <div
                className="child"
                style={{
                  backgroundColor: `#${color}`
                }}
                key={index}
                title={`#${color}`}
              >
                {}
              </div>
            </button>
          );
        })}
    </div>
  );
};

export default Generate;
