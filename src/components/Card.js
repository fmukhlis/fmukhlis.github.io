import '../assets/css/Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Card = (props) => {

    const coverImg = props.coverImg ? require('../assets/images/' + props.coverImg) : 'https://source.unsplash.com/300x400?programmer'
    const badgeText = props.location !== 'OFFLINE' 
        ? props.openSpots > 0 
            ? props.location 
            : 'SOLD OUT'
        : ''

    return (
        <div className='w-card'>
            <a href='#' className="card pos-relative">
                <img src={coverImg} alt='Foto Kursus' className="card-photo"/>
                {badgeText && <small className='p-1 py-xs m-1 bg-light pos-absolute rounded-xs fs-sm font-bold'>{badgeText}</small>}
            </a>
            <div className='text-start d-flex align-items-center text-slate-800 dark:text-slate-50 fs-md mt-1'>
                <FontAwesomeIcon icon={faStar} className="text-ored pb-0.5"/>
                <span className='ml-1 font-bold'>{props.stats.rating.toFixed(1)}</span>
                <span className='text-slate-500 dark:text-slate-400 ml-0.5'>({props.stats.reviewCount})</span>
                <FontAwesomeIcon icon={faCircle} className='fs-xs text-muted ml-1'/>
                <span className='ml-1'>{props.country}</span>
            </div>
            <a href="#" className='text-slate-800 dark:text-slate-50 text-start my-1 d-block no-decorate'>{props.title}</a>
            <div className='text-start fs-md text-slate-800 dark:text-slate-50'>
                <span className='fw-bold'>From ${props.price}</span>
                <span className='ml-1'>/</span>
                <span className='ml-1'>Person</span>
            </div>
        </div>
    )
}

export default Card