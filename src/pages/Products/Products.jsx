import DataTable from '../../Components/DataTable/DataTable'
import "./products.css"
import user from "../../Components/DataTable/user.png"
import Add from '../../Components/add/Add'
import BASE_URL from '../../url'
import { useState,useEffect } from 'react'
import axios from 'axios'
const Products = () => {


  const [rowData, setRowData] = useState([]);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "img",
      headerName: "Image",
      width: 100,
      renderCell: (params) => {
        return <img className='product_user' src={params.row.img || user} alt="" />;
      },
    },
    {
      field: "title",
      type: "string",
      headerName: "Title",
      width: 110,
    },
    {
      field: "color",
      type: "string",
      headerName: "Color",
      width: 110,
    },
    {
      field: "price",
      type: "string",
      headerName: "Price",
      width: 120,
    },
    {
      field: "producer",
      headerName: "Producer",
      type: "string",
      width: 120,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 100,
      type: "string",
    },
    {
      field: "inStock",
      headerName: "In Stock",
      width: 120,
      type: "boolean",
    },
  ];

  const fetchData = async () => {
    await axios.get(`${BASE_URL}/api/product`).then(function (res) {
      setRowData(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }
  useEffect(() => {
    fetchData()
  }, [rowData])

  const [open, setOpen] = useState(false)

  return (
    <div className='products'>
      <div className="info">
        <h1>Products</h1>
        <button className="product_btn" onClick={() => setOpen(true)}>Add New Product</button>
      </div>
      <DataTable slug="products" columns={columns} rows={rowData} />
      {open && <Add slug="product" open={open} setOpen={setOpen} columns={columns} />}
    </div>
  )
}

export default Products; 