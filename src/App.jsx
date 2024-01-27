import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import ListIssues from './components/ListIssues';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AddNewIssue from './components/AddNewIssue';
import UpdateIssue from './components/UpdateIssue';


const App = () => {
  return (
    <Router>
        <div>
          <Navbar/>
            <div className="container background">
                <Routes>
                    {/* <Route path='/' element={{}}/> */}
                    <Route path='/issues' element={ <ListIssues/> }/>
                    <Route path='/addissue' element={<AddNewIssue/>}/>
                    <Route path='/updateissue/:issueId' element={<UpdateIssue/>}/> 
                    <Route path='/updateissue' element={<UpdateIssue/>}/>
                </Routes>
            </div>
        </div>
    </Router>
  )
}

export default App;
