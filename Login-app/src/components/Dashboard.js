import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { getUser, removeUserSession } from "../Utils/Common";



const Dashboard = () => {
    const [lists, setLists] = useState([]);

  useEffect(() => {
    loadLists();
  }, []);

  const loadLists = async () => {
    const result = await axios.get("config.json");
    console.log(result)
    setLists(result.data.lists);
  };
    const navigate = useNavigate();
    const logOut = () => {
      removeUserSession();
      navigate('/login')}
    const buildLink = (listName) => {return `/lists/?listName=${listName}`};
    return (
      <div>
        <div className="container">
         <div className="py-4">
         <h1 className="text-center">Welcome to Dashboard!</h1>
         <button className="btn col-md-12 mt-2 text-center btn-primary btn-block"
            type="button"
            value="logout"
            onClick={logOut}
            >Log out</button>
         
         <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {lists.filter(list => list.users.includes(getUser())).map((lists, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{lists.name}</td>
                <td>
                  <Link to={buildLink(lists.name)} className="btn btn-primary">View list</Link>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
         </div>
       </div>
     </div>
    )

}

export default Dashboard;

