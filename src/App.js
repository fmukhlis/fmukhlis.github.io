import React from "react"
// import logo from './logo.svg';
import './App.css';
import Info from './components/Info.js';
import About from './components/About.js';
import Interests from './components/Interests.js';
import Footer from './components/Footer.js';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Card from './components/Card.js';
import Journal from './components/Journal.js'
import Tenzies from './components/Tenzies'

import { courseMetaData } from './AppData';
import { travelJournalMetaData } from './AppData';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MemeGenerator from './components/MemeGenerator';

function reducer(state, id) {
  const newState = state.map(item => ({...item}))
  newState.find(item => item.id === id).isFavourite = !newState.find(item => item.id === id).isFavourite
  return newState
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, travelJournalMetaData)
  const journalElements = state.map(journal => <Journal docTitle="Travel Journal" key={journal.id} toggle={dispatch} {...journal}/>)
  const cardElements = courseMetaData.map(course => <Card key={course.id} {...course} />)
  const [isDarkMode, setMode] = React.useState(true)

  const handleMode = () => {
    setMode((prevMode) => !prevMode)
  }

  React.useEffect(() => {
    isDarkMode ? document.body.classList.add('dark') : document.body.classList.remove('dark')
  }, [isDarkMode])

  React.useEffect(() => {

  }, [])

  return (
    <BrowserRouter>
      <div className="App bg-slate-50 dark:bg-slate-800 min-h-screen h-auto">
        <Navbar modeHandler={handleMode} mode={isDarkMode}/>

        <Routes>
          <Route path='/' element={            
            <>
              <Hero docTitle="AirBnB Clone"/>
              <div className='overflow-auto w-def gap-1 mx-auto py-5 d-flex'>
                {cardElements}
              </div>
            </>
          }></Route>

          <Route path="/dbc" element={
            <div className='d-flex'>
              <div className='mx-auto w-sm bg-slate-100 dark:bg-slate-700 ring-4 text-slate-800 dark:text-slate-50 ring-main  rounded my-3 overflow-hidden'>
                <Info docTitle="Digital Business Card" />
                <About/>
                <Interests/>
                <Footer/>
              </div>
            </div>
          }></Route>

          <Route path='/travel-journal' element={
            <div className='d-flex flex-col gap-8'>
              {journalElements}
            </div>
          }></Route>
          
          <Route path='/meme-generator' element={
            <div className='mt-12'>
              <MemeGenerator docTitle='Meme Generator' />
            </div>
          }></Route>

          <Route path="/tenzies" element={
            <Tenzies docTitle='Tenzies'/>
          }></Route>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;