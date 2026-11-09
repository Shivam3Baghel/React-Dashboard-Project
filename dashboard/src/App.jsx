import './App.css'
import Header from './Components/Header'
import StudentCard from './Components/StudentCard'

function App() {

  return (
    <>
      <h1>Welcome to My App</h1>
      <Header/>
      <StudentCard name="Shivam Singh Baghel" course="MERN" likes="3"/>
      <StudentCard name="Nikhil George" course="MERN" likes="2"/>
      <StudentCard name="Shivanshu Chaudhary" course="I.T." likes="1"/>
      <StudentCard name="Shrishti Jain" course="MBBS"  likes="3"/>
      <StudentCard name="Aarzoo Chaudhary" course="JS" likes="4"/>
    </>
  )
}

export default App
