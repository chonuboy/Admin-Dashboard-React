import React from 'react'
import "./topBox.css"
import { topDealUsers } from '../../data'

const Topbox = () => {
  return (
    <div className='topbox'>
      <h1>Top Deals</h1>
      {topDealUsers.map(function (user) {
        return (
          <div className='user_items' key={user.id}>
            <div className='user'>
              <img src={user.img} alt="" className='user_img' />
              <div className='userTexts'>
                <span className='username'>{user.username}</span>
                <span className='email'>{user.email}</span>
              </div>
            </div>
            <span className='amount'>${user.amount}</span>
          </div>
        )
      })}

    </div>
  )
}

export default Topbox