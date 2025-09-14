import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto",
  };

  return (
    <>
      <div className="container my-3" style={myStyle}>
        <h3
          className="text-center my-3"
          style={{
            fontFamily: "Cochin, monospace",
            fontSize: "30px",
            fontWeight: "bold",
            paddingTop: "50px",
          }}
        >
          Todos List
        </h3>
        <div className="text-center" style={{ border: ".2px solid pink", padding: "50px", borderRadius: "0 40px 0 40px" }}>
          {props.todos.length === 0
            ? "No Todos to display"
            : props.todos.map((todo) => {
                return (
                  <TodoItem
                    todo={todo}
                    onDelete={props.onDelete}
                    key={todo.sno}
                  />
                );
              })}
        </div>
      </div>
    </>
  );
};
