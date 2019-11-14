import React, { useState, useEffect } from "react";
import "./color.scss";

const Generate = ({ inputValue, setGenerate, generate }) => {
  const [update, setUpdate] = useState([]);
  const setColor = (e, col) => {
    setGenerate({
      ...generate,
      isText: true,
      color: col
    });
  };

  useEffect(() => {
    if (update.length > 0) {
      setUpdate([]);
    }
    let a = [];
    for (let i = 0; i < inputValue; i++) {
      a.push(i);
    }
    setUpdate(update.concat(a));
  }, []);

  return (
    <div className="main">
      {update &&
        update.map((i, index) => {
          const col = Math.floor(Math.random() * 1000000);
          console.log("color--->", col);
          return (
            <button className="button" onClick={e => setColor(e, col)}>
              <div
                id={`div_${index}`}
                className="child"
                style={{
                  backgroundColor: `#${col}`
                }}
                key={index}
                title={`#${col}`}
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
