import React, { useState } from "react";
import Hello from "./Hello";
import Generate from "./generate";
import Text from "./Text";

const Map = () => {
  const [generate, setGenerate] = useState({
    isGenerate: false,
    inputValue: 0,
    color: '',
    isText: false
  });
  return (
    <div>
      <Hello generate={generate} setGenerate={setGenerate} />
      {generate.isGenerate && generate.inputValue > 0 && (
        <Generate
          inputValue={generate.inputValue}
          setGenerate={setGenerate}
          generate={generate}
        />
      )}
      {generate.isText && <Text color={generate.color} />}
    </div>
  );
};

export default Map;
