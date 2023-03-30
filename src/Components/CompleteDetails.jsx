import React, { useEffect, useContext, useState } from "react";
import TodosContext from "../Context/TodoContext";
import { useParams } from "react-router-dom";
import { GetUserData } from "../Config/API";
import "./Table.css";
const CompleteDetails = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState([]);
  const [todo, setTodo] = useState({});
  const [todoState] = useContext(TodosContext);

  const func = async () => {
    let newId = id - 1;
    let res = await GetUserData(id);
    setUserData(res.data);

    if (todoState.todoData === null || undefined) {
      let data = localStorage.getItem("todoData");
      setTodo(JSON.parse(data));
      return;
    }
    setTodo(todoState.todoData[newId]);
    let data = JSON.stringify(todoState.todoData[newId]);
    localStorage.setItem("todoData", data);
  };
  useEffect(() => {
    func();
  }, []);

  return (
    <>
      <div className="container">
        <h5>User details</h5>
        <div className="container detailsContainer">
          <div className="row">
            <div className="col-3">User Id</div>
            <div className="col-9 rightCol">{userData.id}</div>
            <div className="col-3">Todo ID</div>
            <div className="col-9 rightCol">{todo.id}</div>
            <div className="col-3">Todo title</div>
            <div className="col-9 rightCol">{todo.title}</div>
            <div className="col-3">UserName</div>
            <div className="col-9 rightCol">{userData.username}</div>
            <div className="col-3">Name</div>
            <div className="col-9 rightCol">{userData.name}</div>
            <div className="col-3">Email</div>
            <div className="col-9 rightCol">{userData.email}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompleteDetails;
