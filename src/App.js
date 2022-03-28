import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CreatNote from "./CreatNote";
import Header from "./Header";
import Note from "./Note";

function App() {
  const [item, setItem] = useState([]);

  const addNote = (note) => {
    setItem((oldVal) => {
      return [...oldVal, note];
    });
  };

  const onDelet = (id) => {
    setItem((oldVal) => {
      return oldVal.filter((currVal, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <Header />
      <CreatNote passEvent={addNote} />
      {item.map((itemVal, index) => {
        return (
          <Note
            title={itemVal.title}
            content={itemVal.content}
            key={index}
            id={index}
            deletItem={onDelet}
          />
        );
      })}
    </>
  );
}

export default App;
