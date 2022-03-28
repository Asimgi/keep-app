import React from "react";

const Note = (props) => {

const deletNote=()=>{
  props.deletItem(props.id)
}

  return (
    <>
      <div className="note">
        <div className="inner-note">
          <h3>{props.title}</h3>
          <br />
          <p>{props.content}</p>
          <button className=" d-btn" onClick={deletNote}> - </button>
        </div>
        {/* <div className="inner-note">
          <h3>title</h3>
          <br />
          <p>this is a note</p>
          <button className="b-btn"> - </button>
        </div> */}
      </div>
    </>
  );
};
export default Note;
