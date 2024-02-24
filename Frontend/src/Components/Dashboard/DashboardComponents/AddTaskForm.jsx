import React from 'react'
import './AddTaskForm.css'
const AddTaskForm = ({form,setFormdata}) => {
  return (
    <div className='dialog'>
          <div className="add-task-container">
              <div className="inputs">
                  <div className="input">
                      <input type="text" placeholder='Tittle'/>
                  </div>
                  <div className="textarea">
                      <textarea type="text" placeholder='Description' rows={5}/>
                  </div>
                  <div className="input">
                      <input type="date" id='task-due-date' name='task-due-date'/>
                  </div>
              </div>
              <div className="submit-container">
                  <div className="submit">Add</div>
                  <div className="submit" onClick={()=>{setFormdata(false)}}>Cancel</div>
              </div>
          </div> 
    </div>
  )
}

export default AddTaskForm
