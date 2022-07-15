/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import search from './images/search.svg'
import notific from './images/new.svg'
import vertical from './images/vertical.svg'
import account from './images/photo.svg'
import sort from './images/sort.svg'
import filter from './images/filter.svg'
import './style.scss'
import Person from '../../components/Person/Person'
const Tickets = () => {
  const [users, setUsers] = useState([])
  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, [])
  return (
    <main className="tickets-page">
      <header className="tickets-page-header">
        <h2 className="title"> Tickets </h2>{' '}
        <div className="content">
          <a href="#">
            <img src={search} alt="search" />
          </a>{' '}
          <a href="#">
            <img src={notific} alt="notific" />
          </a>{' '}
          <a href="#">
            <img src={vertical} alt="vertical" />
          </a>{' '}
          <h2> Jones Ferdinand </h2>{' '}
          <a href="#">
            <img src={account} alt="vertical" />
          </a>{' '}
        </div>{' '}
      </header>{' '}
      <section className="list">
        <header className="list-header">
          <h3 className="list-header-title">All tickets</h3>
          <ul className="list-header-functionality">
            <button>
              <img src={sort} alt="sort" />
            </button>
            <li className="list__item">Sort</li>
            <img src={filter} alt="filter" />
            <li className="list__item">Filter</li>
          </ul>
        </header>
        <div className="list-subnav">
          <h4 className="list-subnav-title">Ticket details</h4>
          <div className="list-subnav-description">
            <h5>Customer name</h5>
            <h5>Date</h5>
            <h5>Priority</h5>
          </div>
        </div>
        {users.map((user) => {
          const { name, id } = user
          return <Person key={id} name={name} />
        })}
      </section>
    </main>
  )
}

export default Tickets
