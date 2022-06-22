/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Sidebar.scss'
import logo from '../images/logo.svg'
import agents from '../images/agents.svg'
import articles from '../images/articles.svg'
import contacts from '../images/contacts.svg'
import overview from '../images/overview.svg'
import tickets from '../images/tickets.svg'
import ideas from '../images/ideas.svg'
import settings from '../images/settings.svg'
import subscription from '../images/subscription.svg'

function Sidebar() {
  return (
    <aside className="sidebar">
      <header className="title">
        <img src={logo} alt="logo" />
        <h2>Dashboard Kit</h2>
      </header>
      <ul className="list">
        <li className="list__item">
          <img src={overview} alt="overview" />
          <a href="#">Overview</a>
        </li>
        <li className="list__item">
          <img src={tickets} alt="tickets" />
          <a href="#">Tickets</a>
        </li>
        <li className="list__item">
          <img src={ideas} alt="ideas" />
          <a href="#">Ideas</a>
        </li>
        <li className="list__item">
          <img src={contacts} alt="contacts" />
          <a href="#">Contacts</a>
        </li>
        <li className="list__item">
          <img src={agents} alt="agents" />
          <a href="#">Agents</a>
        </li>
        <li className="list__item">
          <img src={articles} alt="articles" />
          <a href="#">Articles</a>
        </li>
        <hr className="horizontal__line" />
        <li className="list__item">
          <img src={settings} alt="settings" />
          <a href="#">Settings</a>
        </li>
        <li className="list__item">
          <img src={subscription} alt="subscription" />
          <a href="#">Subscription</a>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
