import React, { useEffect, useContext } from "react";
import TodosContext from "../Context/TodoContext";
import { useNavigate } from "react-router-dom";
import { GetData } from "../Config/API";
import "./Table.css";
const Index = () => {
  const navigate = useNavigate();
  const [todoState, dispatch] = useContext(TodosContext);

  const getTodo = async () => {
    let res = await GetData();
    dispatch({ type: "setData", payload: res.data });
    };


  useEffect(() => {
    getTodo()
  }, []);

  const getID = async (id) => {
    console.log(id);
    navigate(`userDetails/${id}`);
    return null;
  };

  return (
    <>
      <div className="contailer">
        <table className="table">
          <thead className="table-light">
            <tr>
              <th className="head" scope="col">
                Todo id
              </th>
              <th className="head" scope="col">
                Title
              </th>
              <th className="head" scope="col">
                staus
              </th>
              <th className="head" scope="col">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {todoState.todoData === null || undefined
              ? "Loading....."
              : todoState.todoData.map((e) => {
                  return (
                    <tr>
                      <th>{e.id}</th>
                      <td>{e.title}</td>
                      {e.completed === true ? (
                        <td>Complete</td>
                      ) : (
                        <td>Incomplete</td>
                      )}
                      <td>
                        <button className="butn" onClick={() => getID(e.id)}>
                          view user
                        </button>
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Index;
