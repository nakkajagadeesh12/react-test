import React, { useState } from "react";

const Hello = ({ generate, setGenerate }) => {
  const changeFun = e => {
    setGenerate({ ...generate, inputValue: e.target.value });
  };
  const generateFun = () => {
    setGenerate({ ...generate, isGenerate: true });
  };
  const clearFun = () => {
    setGenerate({ ...generate, inputValue: 0, isGenerate: false });
  };
  
  return (
    <div>
      <form>
        <input
          value={generate.inputValue}
          placeholder="Enter the value"
          onChange={changeFun}
        />
        <div>
          <input type="button" onClick={generateFun} value="Gen" />
          <input type="reset" onClick={clearFun} value="Clear" />
        </div>
      </form>
    </div>
  );
};

export default Hello;
