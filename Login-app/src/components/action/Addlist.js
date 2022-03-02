
import axios from "axios";
import { useEffect, useState } from "react";
import { getModel, setModel, getToken } from "../../Utils/Common";
import { useNavigate } from "react-router-dom";


const Addlist = () => {

    const [list, setList] = useState({
        shortName: "",
        longName: ""
    });
     
    const [id, setId] = useState();
    const {shortName, longName} = list;

    const onInputChange = e => {
        setList({...list,[e.target.name]: e.target.value})
    }

    const navigate = useNavigate();
    
    useEffect(() => {
      const query = new URLSearchParams(window.location.search);
      const iD = query.get("id");
      setId(iD);
      const model = getModel();
}, [])

 const onSubmit = async e => {
  e.preventDefault();
  const model = getModel();
  model.push({"filterList": null, shortName: list.shortName, "longName": list.longName})
  setModel(model);
  let body = {selectionList:model};
  const query = new URLSearchParams(window.location.search);
  await axios.post("http://localhost/RESTfulAPI/csrest/v1.2/common/selectionLists", body,
  { params: { 
  domain: "AS-WIN-O1DNKP7D7O9" ,
  listName: query.get('listName') + ".sel"},
  headers: {
      'X-ARCHIVETOKEN': getToken()
     }}).then(function (response) {
       console.log(response);
     })
     navigate('/dashboard')
};


    return (
        <div  className="container">
          <div className="w-75 mt-4 border mx-auto shadow p-5">
        <h2 className="text-center mb-4 border">Add Entries</h2>
        <form onSubmit={e => onSubmit(e)}>

        <div className="form-group">
        <input 
        placeholder="Enter a shortname" 
        type="text" 
        className="form-control form-control-lg" 
        value={shortName} 
        onChange={e => onInputChange(e)} 
        name="shortName"  
        />
        </div>

        <div className="form-group">
          <input 
          placeholder="Enter a longname" 
          type="text"  
          className="form-control form-control-lg" 
          value={longName} 
          onChange={e => onInputChange(e)}  
          name="longName"   />
        </div>
        <button className="btn col-md-12 mt-2 text-center btn-primary btn-block">Update Entry</button>
        </form>
        </div>
      </div>
    )
}


export default Addlist;


