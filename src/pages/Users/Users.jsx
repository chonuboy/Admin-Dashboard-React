import React from 'react'
import axios from "axios";
import DataTable from '../../Components/DataTable/DataTable'
import "./users.css"
import user from "../../Components/DataTable/user.png"
import Add from '../../Components/add/Add'
import { useState,useEffect } from 'react'
const Users = () => {
  
  const [rowData,setRowData]=useState([]);

  const columns=[
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "img",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => {
        return <img className='profile_user' src={params.row.img || user} alt="" />;
      },
    },
    {
      field: "firstName",
      type: "string",
      headerName: "First name",
      width: 110,
    },
    {
      field: "lastName",
      type: "string",
      headerName: "Last name",
      width: 110,
    },
    {
      field: "email",
      type: "string",
      headerName: "Email",
      width: 120,
    },
    {
      field: "phone",
      type: "string",
      headerName: "Phone",
      width: 120,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 100,
      type: "string",
    },
    {
      field: "verified",
      headerName: "Verified",
      width: 120,
      type: "boolean",
    },
  ];

   const fetchData = async() => {
    await axios.get("http://localhost:3001/api/user").then(function(res){
      setRowData(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    fetchData()
  },[rowData])
  
  const [open,setOpen]=useState(false)
  
  return (
    <div className='users'>
      <div className="info">
        <h1>Users</h1>
        <button className="user_btn" onClick={()=>setOpen(true)}>Add New User</button>
      </div>
      <DataTable slug="users" columns={columns} rows={rowData}/>
      {open && <Add slug="user" open={open} setOpen={setOpen} columns={columns} userRows={rowData}/>}
    </div>
  )
}

export default Users;