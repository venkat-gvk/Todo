import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import RenderList from "./RenderList";

const Main = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    for (let i = 0; i < localStorage.length; i++) {
      const id = localStorage.key(i);
      const obj = JSON.parse(localStorage.getItem(id));

      setList(prevList => [obj, ...prevList]);
    }
  }, []);

  return (
    <div>
      <h1>TODO LIST</h1>
      <InputField
        input={input}
        setInput={setInput}
        list={list}
        setList={setList}
      />

      <RenderList list={list} setList={setList} />
    </div>
  );
};

export default Main;
