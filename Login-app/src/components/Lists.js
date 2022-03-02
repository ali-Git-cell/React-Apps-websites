import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { getToken, removeUserSession, setModel } from "../Utils/Common";


const Lists = () => {

    const [listVW, setlistVW] = useState([]);
    const [listName, setListName] = useState();
    // const [endpoint, setEndPoint] = useState();
    // const [server, setServer] = useState();


    // useEffect(() => {
    //     loadUrl();
    //   }, []);
    
    //   const loadUrl = async () => {
    //     const result = await axios.get("config.json");
    //     console.log(result)
    //     setEndPoint(result.data.apiEndpoint);
    //   };

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
      }, []);

      useEffect(() => {
          loadLists();
   }, [])

    const navigate = useNavigate();
    const backToDash = () => {
        removeUserSession();
        navigate('/dashboard')
    }

    const loadLists = async () => { 
        const query = new URLSearchParams(window.location.search);
        const result = await axios.get("http://localhost/RESTfulAPI/csrest/v1.2/common/selectionLists", 
        { params: { 
        domain: "AS-WIN-O1DNKP7D7O9" , 
        listName: query.get('listName') + ".sel"},
        headers: {
            'X-ARCHIVETOKEN': getToken()
          }  } )
           setlistVW(result.data);
           console.log(listVW);
           setModel(result.data);
           setListName(query.get('listName'));
           
        }

    return (
        <div>
            <div className="container">
            <div className="py-4">
            <button className="btn col-md-12 mt-4 text-center btn-primary btn-block"
            value="logout"
            onClick={backToDash}
            >Back to the Dashboard</button>
            <Link  to={`/lists/add?listName=${listName}`} className="btn btn-primary col-md-12 border text-center">Add Entry</Link>
            <table class="table border shadow">
            <thead>
                <tr>
                <th scope="col">Short Name</th>
                <th scope="col">Long Name</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    listVW.map((list, index) => 
                        <tr>
                            <td>{list.shortName}</td>
                            <td>{list.longName}</td>
                            <td><Link to={`/lists/edit?id=${index}&listName=${listName}`} className="btn btn-primary mr-2">Edit</Link></td>
                            
                        </tr>
                    )    
                }
            </tbody>
            </table>
            </div>
            </div>
        </div>
    )

}





export default Lists;




// {
//     "language": "string",
//     "description": "string",
//     "selectionList": [
//       {
//         "filterList": [
//           "string"
//         ],
//         "shortName": "string",
//         "longName": "string"
//       }
//     ]
//   }