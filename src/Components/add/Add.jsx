import { useState } from "react";
import "./add.css"
import axios from "axios";
import BASE_URL from "../../url";
const Add = (props) => {

  const [formData, setFormData] = useState([])


  const handleInput = (e, index) => {
    const { value } = e.target;
    const updatedData = { ...formData };
    updatedData[index] = { ...updatedData[index], value };
    setFormData(updatedData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setOpen(false);
    postData();
  };
  const postData = async () => {
    await axios.post(`${BASE_URL}/api/${props.slug}`, { formData })
      .then(res => console.log(res))
      .catch(err => { console.log(err) })
  };

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Add new {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column, index) => (
              <div className="item" key={index}>
                <label>{column.headerName}</label>
                <input type={column.type} placeholder={column.field} onChange={(e) => handleInput(e, index)} />
              </div>
            ))}
            <button className="send" type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;