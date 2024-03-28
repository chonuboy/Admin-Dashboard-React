import "./user.css"
import Single from "../../Components/Single/Single"
import { singleUser } from "../../data"
const User = () => {
  return (
    <div className='single_user'>
        <Single {...singleUser}/>
    </div>
  )
}
export default User;
