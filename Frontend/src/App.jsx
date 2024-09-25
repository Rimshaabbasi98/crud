import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GetAllUser from './components/GetAllUser'
import AddNewUser from './components/AddNewUser'
import UpdateUser from './components/UpdateUser'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<GetAllUser/>} />
        <Route path="/newuser" element={<AddNewUser/>} />
        <Route path="/update/:id" element={<UpdateUser/>} />
              </Routes>
    </>
  )
}

export default App