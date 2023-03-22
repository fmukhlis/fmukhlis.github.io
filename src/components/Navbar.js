import logoWeb from '../assets/images/Vector.png'
import '../assets/css/Navbar.css'

import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

const Navbar = (props) => {
    return (
        <nav className='nav bg-slate-50 dark:bg-slate-800 mb-5'>
            <a><img src={logoWeb} alt="Logo AirBNB" className='main-logo'/></a>
            <ul className='flex gap-4 ms-auto text-dark'>
                <li><NavLink to="/" className={({ isActive }) => (isActive && "bg-slate-200 dark:bg-slate-700") + ' px-3 py-2 rounded-sm font-bold text-main'}>Home</NavLink></li>                
                <li><NavLink to="/dbc" className={({ isActive }) => (isActive && "bg-slate-200 dark:bg-slate-700") + ' px-3 py-2 rounded-sm font-bold text-main'}>DBC</NavLink></li>
                <li><NavLink to="/travel-journal" className={({ isActive }) => (isActive && "bg-slate-200 dark:bg-slate-700") + ' px-3 py-2 rounded-sm font-bold text-main'}>TraveL</NavLink></li>
                <li><NavLink to="/meme-generator" className={({ isActive }) => (isActive && "bg-slate-200 dark:bg-slate-700") + ' px-3 py-2 rounded-sm font-bold text-main'}>MemeGen</NavLink></li>
                <li><NavLink to="/tenzies" className={({ isActive }) => (isActive && "bg-slate-200 dark:bg-slate-700") + ' px-3 py-2 rounded-sm font-bold text-main'}>Tenzies</NavLink></li>
            </ul>

            <div className='ml-auto flex align-items-center'>
                <div className='text-main mr-3 text-sm font-semibold'>
                    {props.mode ? 'Light' : 'Dark'} Mode ?
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" onChange={props.modeHandler} checked={props.mode} className="sr-only peer"/>
                    <div className="w-11 h-7 bg-slate-200 peer-focus:outline-none peer-focus:ring rounded-full dark:bg-slate-500 peer-checked:bg-main"></div>
                    <div className='absolute rounded-full left-1 w-5 h-5 bg-slate-400 peer-checked:translate-x-4 peer-checked:bg-red-700 transition-all duration-150 flex'>
                        <FontAwesomeIcon icon={props.mode ? faMoon : faLightbulb} className="text-white opacity-60 text-xs mx-auto my-auto"/>
                    </div>
                </label>
            </div>
        </nav>
    )
}

export default Navbar