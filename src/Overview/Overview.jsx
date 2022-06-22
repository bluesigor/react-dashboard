/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import './Overview.scss'
import search from '../images/search.svg'
import notific from '../images/new.svg'
import vertical from '../images/vertical.svg'
import account from '../images/photo.svg'
import graphic from '../images/graph.svg'
function Overview() {
  return (
    <main className="overview">
      <header>
        <h2 className="title">Overview</h2>
        <div className="content">
          <a href="#">
            <img src={search} alt="search" />
          </a>
          <a href="#">
            <img src={notific} alt="notific" />
          </a>
          <a href="#">
            <img src={vertical} alt="vertical" />
          </a>
          <h2>Jones Ferdinand</h2>
          <a href="#">
            <img src={account} alt="vertical" />
          </a>
        </div>
      </header>
      <section className="cards">
        <div className="card">
          <h1 className="title">Unresolved</h1>
          <p>60</p>
        </div>
        <div className="card">
          <h1 className="title">Overdue</h1>
          <p>16</p>
        </div>
        <div className="card">
          <h1 className="title">Open</h1>
          <p>43</p>
        </div>
        <div className="card">
          <h1 className="title">On hold</h1>
          <p>64</p>
        </div>
      </section>
      <section className="chart">
        <div className="graph">
          <h1 className="title">Today's trends</h1>
          <div className="description">
            <p>as of 25 May 2019, 09:41 PM</p>
            <div className="day">
              <hr className="horizontal__today" />
              <span>Today</span>
              <hr className="horizontal__yesterday" />
              <span>Yesterday</span>
            </div>
          </div>
          <div className="graphic">
            <img src={graphic} alt="graphic" />
          </div>
        </div>
        <div className="stats">
          <div className="stat">
            <h1>Resolved</h1>
            <p>449</p>
          </div>
          <div className="stat">
            <h1>Received</h1>
            <p>426</p>
          </div>
          <div className="stat">
            <h1>Average first response time</h1>
            <p>33m</p>
          </div>
          <div className="stat">
            <h1>Average response time</h1>
            <p>3h 8m</p>
          </div>
          <div className="stat">
            <h1>Resolution within SLA</h1>
            <p>94%</p>
          </div>
        </div>
      </section>
      <footer>
        <div className="tickets">
          <header>
            <div className="title">
              <h2>Unresolved tickets</h2>
              <p>
                <span>Group:</span>support
              </p>
            </div>
            <a href="#">View details</a>
          </header>
          <ul>
            <li className="ticket__item">
              <span>Waiting on Feature Request</span>
              <span>4238</span>
            </li>
            <li className="ticket__item">
              <span>Awaiting Customer Response</span>
              <span>1005</span>
            </li>
            <li className="ticket__item">
              <span>Awaiting Developer Fix</span>
              <span>914</span>
            </li>
            <li className="ticket__item">
              <span>Pending</span>
              <span>281</span>
            </li>
          </ul>
        </div>
        <div className="tasks">
          <header>
            <div className="title">
              <h2>Tasks</h2>
              <p>Today:</p>
            </div>
            <p>
              <a href="#">View All</a>
            </p>
          </header>
          <ul>
            <li className="input">
              <input
                placeholder="Create new Task"
                type="text"
                name=""
                id="task__input"
              />
              <button type="Submit" htmlFor="task__input">
                +
              </button>
            </li>
            <li className="task__item">
              <div>
                <input type="radio" name="" id="task__urgent" />
                <h2>Finish ticket update</h2>
              </div>
              <label className="urgent" htmlFor="task__urgent">
                Urgent
              </label>
            </li>
            <li className="task__item">
              <div>
                <input type="radio" name="checked" id="task__new" />
                <h2>Create new ticket example</h2>
              </div>
              <label className="new" htmlFor="task__new">
                New
              </label>
            </li>
            <li className="task__item">
              <div>
                <input type="radio" name="" id="task__default" />
                <h2>Update ticket report</h2>
              </div>
              <label className="default" htmlFor="task__default">
                default
              </label>
            </li>
          </ul>
        </div>
      </footer>
    </main>
  )
}

export default Overview
