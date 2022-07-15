import React from 'react'
import './style.scss'
import avatar from './images/avatar.svg'
import vertical from './images/vertical.svg'

function Person({ name }) {
  return (
    <div className="person">
      <div className="person-main">
        <img src={avatar} alt="avatar" />
        <div className="person-main-message">
          <h3> Contact Email not Linked </h3> <p> Updated 1 day ago </p>{' '}
        </div>{' '}
      </div>{' '}
      <div className="person-details">
        <div className="person-details-name">
          <h3> {name} </h3> <p> on 24.05 .2019 </p>{' '}
        </div>{' '}
        <div className="person-details-date">
          <h3> May 24, 2019 </h3> <p> 6: 30 PM </p>{' '}
        </div>{' '}
        <label htmlFor="" className="person-details-caution">
          High{' '}
        </label>{' '}
      </div>{' '}
      <img src={vertical} alt="" />
    </div>
  )
}

export default Person
