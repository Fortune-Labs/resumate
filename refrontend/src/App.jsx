import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import './App.css'

//pages 
import Home from './pages/home/home'
import Dashboard from './pages/dashboard/dashboard'
import CV from './pages/cv/cv'
import Resume from './pages/resume/resume'
import Jobs from './pages/job/job'
import Education from './pages/education/education'
import Blog from './pages/blog/blog'
import Login from './pages/accregister/login'
import Register from './pages/accregister/register'

//components
import Navbar from './components/header/navbar'
import Footer from './components/footer/footer'
import Showhide from './components/showhide/showhide'

function App() {
  return (
    <div>
      <Router basename="https://github.com/Fortune-Labs/resumate">
        <Showhide>
        <Navbar/>
        </Showhide>

          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/dashboard' element={<Dashboard/>}/>
            <Route exact path='/cv' element={<CV/>}/>
            <Route exact path='/resume' element={<Resume/>}/>
            <Route exact path='/job' element={<Jobs/>}/>
            <Route exact path='/education' element={<Education/>}/>
            <Route exact path='/blog' element={<Blog/>}/> 
            <Route exact path='/login' element={<Login/>}/> 
            <Route exact path='/register' element={<Register/>}/> 
          </Routes>
        <Footer/>
      </Router>
  
    </div>
  )
}

export default App
  