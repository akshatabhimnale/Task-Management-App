import React, { useState } from 'react'
import './Dashboard.css'
import AddTaskForm from './DashboardComponents/AddTaskForm'

const Dashboard = () => {
    const [form,setFormdata]=useState(false)
  return (
    <>
          <button className='btn add-task open-button' onClick={() => {
              setFormdata(true)
          }}>Add Task</button>
          {form && <AddTaskForm form={form} setFormdata={setFormdata}/>}
          
    </>
  )
}

export default Dashboard
