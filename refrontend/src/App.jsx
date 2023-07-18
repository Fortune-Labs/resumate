import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import './App.css'

//pages 
import Home from './pages/home/home'
import CV from './pages/cv/cv'
import Jobs from './pages/job/job'
import Education from './pages/education/education'
import Blog from './pages/blog/blog'
import About from './pages/about/about'
import Login from './pages/accregister/login'
import Register from './pages/accregister/register'
import Dashboard from './pages/dashboard/dashboard'

//components
import Navbar from './components/header/navbar'
import Footer from './components/footer/footer'
import Showhide from './components/showhide/showhide'

function App() {
  return (
    <div>
      {/* basename="/resumate */}
      <Router>
        <Showhide>
        <Navbar/>
        </Showhide>

          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/cv' element={<CV/>}/>
            <Route exact path='/job' element={<Jobs/>}/>
            <Route exact path='/education' element={<Education/>}/>
            <Route exact path='/blog' element={<Blog/>}/> 
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='/login' element={<Login/>}/> 
            <Route exact path='/register' element={<Register/>}/> 
            <Route exact path='/dashboard' element={<Dashboard/>}/>
          </Routes>
        <Footer/>
      </Router>
  
    </div>
  )
}

export default App
  