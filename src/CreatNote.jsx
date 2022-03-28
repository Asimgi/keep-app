import React, { useState } from "react";

const CreatNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const inputEvent = (event) => {
    // console.log(event.target.value);
    const {value,name}=event.target;
    setNote((oldVal)=>{
        return{
            ...oldVal,
            [name]:value
        }
    })
  };

  const addEvent=()=>{
      props.passEvent(note)
    
      setNote({
          title:'',
          content:''
      })

  }
  return (
    <>
      <div className="note-div">
        <input
          type="text"
          placeholder="Title"
          className="i-feild"
          autoComplete="off"
          name="title"
          value={note.title}
          onChange={inputEvent}
        />
        <textarea
          cols=""
          rows=""
          className="t-area"
          placeholder="Write a note"
          name="content"
          value={note.content}
          onChange={inputEvent}
        ></textarea>
        <button className="b-btn" onClick={addEvent}> + </button>
      </div>
    </>
  );
};
export default CreatNote;
