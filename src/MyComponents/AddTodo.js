import React, { useState } from "react";

export const AddTodo = ({ addTodo }) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
      e.preventDefault();
      if (!title || !desc) {
        alert("Title and Description are required");
      } else {
        addTodo(title, desc);
        setTitle("");
        setDesc("");
      }
    };
  return (
    <div className="container my-3" style={{backgroundColor: "#f8f9fa", width: "600px", border: ".7px solid green", padding: "50px", borderRadius: "10px"}}>
        <h3 className="text-center pb-3" style={{fontFamily: "Cochin, monospace",fontSize: "30px", fontWeight: "bold"}}>Add a Todo</h3>
      <form onSubmit={(submit)}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => {setTitle(e.target.value)}}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Todo Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => {setDesc(e.target.value)}}
            className="form-control"
            id="desc"
          />
        </div>
        <button type="submit" className="mb-3 btn btn-success btn-sm">
          Add Todo
        </button>
      </form>
    </div>
  );
};
