import React from 'react'
import Helmet from 'react-helmet'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div className="app">
    <Helmet title="Home | Yamen Sharaf">
    </Helmet>
    <Sidebar />
    <div className="main-content">
      <Navbar />
      <div>{children}</div>
    </div>
  </div>
)

export default TemplateWrapper
