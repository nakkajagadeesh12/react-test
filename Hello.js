import React, { useState } from "react";

const Hello = ({ setGenerate, value, setValue,setIsText }) => {
  const changeFun = e => {
    setValue(e.target.value);
  };
  const generateFun = () => {
    setGenerate(true);
  };
  const clearFun = () => {
    setValue(0);
    setGenerate(false);
    setIsText(false);
  };
  return (
    <div>
      <form>
        <input
          value={value}
          placeholder="Enter the value"
          onChange={changeFun}
        />
        <div>
          <input type="button" onClick={generateFun} value="Gen" />
          <input type="reset" onClick={clearFun} value="Clear"/>
        </div>
      </form>
    </div>
  );
};

export default Hello;
