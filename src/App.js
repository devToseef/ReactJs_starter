import React from 'react'
import Home from 'pages/home/Home'
import Unauthorized from 'pages/unauthorized/Unauthorized'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import NotFound from 'pages/notFound/NotFound'
import Layout from 'layout/Layout'
import Blogs from 'pages/blogs/Blogs'
import Contacts from 'pages/contacts/Contacts'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/contact" element={<Contacts />} />
          <Route exact path="/unauthorized" element={<Unauthorized />} />
          <Route exact path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
