import React from "react";
import "./Form.css"

export default function Form() {

return (

    <form className="userForm">
        <label>Question: <input className="inputField" type="text" /></label>
        <label>Answer: <input className="inputField" type="text" /></label>
        <button className="addButton">Add</button>
    </form>


)

}