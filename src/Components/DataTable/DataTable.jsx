import "./datatable.css"
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import view from "./external-link.png"
import del from "./delete.png"
import axios from "axios";
import {Link} from 'react-router-dom'
import { useEffect, useState } from "react";

const DataTable = (props) => {

    
    const handleDelete=async (id)=>{
        console.log("Deleted"+id)
        try{
        await axios.delete(`http://localhost:3001/api/${props.slug}/delete/${id}`).then(()=>{console.log("Data Deleted...")})
        }
        catch(err){
            console.log(err)
        }

    }

    
    

    const actionColumn={
            field:"action",
            headerName:"Action",
            width:230,
            renderCell:(params)=>{
                return(
                    <div className="action">
                        <Link to={`/${props.slug}/${params.row.id}`}>
                            <img src={view} alt=""  className="view_one"/>
                        </Link>
                        <div className="delete" onClick={()=>handleDelete(params.row.id)}>
                            <img src={del} alt="" className="del"/>
                        </div>
                    </div>
                )
            }
        }
    
    return (
        <div className="datatable">
            <DataGrid
                className="datagrid"
                rows={props.rows}
                columns={[...props.columns,actionColumn]}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                disableColumnFilter
                disableDensitySelector
                disableColumnSelector
            />
        </div>
    )
}

export default DataTable