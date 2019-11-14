import React, { useState } from "react";
import Hello from "./Hello";
import Generate from "./generate";

const Map = () => {
  const [generate, setGenerate] = useState(false);
  const [value, setValue] = useState(0);
  return (
    <div>
      <Hello setGenerate={setGenerate} value={value} setValue={setValue} />
      {generate && value > 0 && <Generate value={value} />}
    </div>
  );
};

export default Map;
