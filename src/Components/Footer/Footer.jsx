import "./footer.css"

const Footer = () => {
  const date=new  Date()
  return (
    <div className='footer'>
      <span style={{fontWeight:"bold"}}>Admin Dashboard</span>
      <span>&copy; {date.getFullYear()}</span>
    </div>
  )
}

export default Footer