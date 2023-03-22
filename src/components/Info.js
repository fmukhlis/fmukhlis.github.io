import userPhoto from '../assets/images/FajarMukhlisI.jpeg'
import React from 'react'

import DefaultButton from './DefaultButton'
import '../assets/css/Info.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Info = (props) => {    
    React.useEffect(() => {
        document.title = props.docTitle
    }, [])
    return (
        <>
            <img src={userPhoto} alt='Foto Fajar Mukhlis Imananda' className='profile-photo'/>
            <div className='pb-3'>
                <h2 className='my-2 w- sub-title text-2xl'>Fajar Mukhlis Imananda</h2>
                <p className='text-main'>Fullstack Developer</p>
                <small>FMI.Website</small>
            </div>
            <div className='flex justify-around'>
                <DefaultButton text='Email' additionalClass="w-2/5" icon={faEnvelope}/>
                <DefaultButton text='LinkedIn' additionalClass="w-2/5" icon={faLinkedin}/>
            </div>
        </>
    )
}

export default Info