import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask,setShowAddTask]=useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor Appointment',
      day: '12th Dec 2023',
      reminder: true,
    },
    {
      id: 2,
      text: 'Market Fest',
      day: '1st Jan 2023',
      reminder: true,
    },
    {
      id: 3,
      text: 'School Ed',
      day: '19 Mar 2023',
      reminder: false,
    },
    {
      id: 4,
      text: 'Christmas',
      day: '25th Dec 2023',
      reminder: false,
    },
  ])

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask={id,...task}
    setTasks([...tasks,newTask])
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }

  return (
    <div className='container'>
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Task to Show'
      )}
    </div>
  )
}

export default App
