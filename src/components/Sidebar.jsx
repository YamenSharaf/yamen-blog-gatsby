import React from 'react'
import Yamen from '../img/yamen.png'
import Icon from '@mdi/react'
import { mdiGithubCircle, mdiTwitterCircle } from '@mdi/js'

const Sidebar = () => (
  <div className="sidebar">
    <figure className="sidebar__mugshot image is-128x128">
      <img className="is-rounded" src={ Yamen } alt="Yamen Sharaf"/>
    </figure>
    <h1 className="sidebar__ghostwriter is-size-3">
      Yamen Sharaf
    </h1>
    <p className="sidebar__headstone is-size-5">
      A modern frontend developer who's trying to cope with the pressure of learning every new framework under the sun. So far it's been a mess.
    </p>
    <ul className="sidebar__links">
      <li>
        <a href="https://github.com/YamenSharaf">
          <Icon className="sidebar__social-icon" path={mdiGithubCircle} size={1.3} color="white"/>
        </a>
        <a href="https://twitter.com/YamenSharaf">
          <Icon className="sidebar__social-icon" path={mdiTwitterCircle} size={1.3} color="white"/>
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
