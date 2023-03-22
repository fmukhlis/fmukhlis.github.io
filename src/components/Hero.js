import '../assets/css/Hero.css'
import foto_1 from '../assets/images/image 30.png'
import foto_2 from '../assets/images/image 29.png'
import foto_3 from '../assets/images/image 28.png'
import foto_4 from '../assets/images/image 27.png'
import foto_5 from '../assets/images/image 26.png'
import foto_6 from '../assets/images/image 25.png'
import foto_7 from '../assets/images/image 24.png'
import foto_8 from '../assets/images/image 23.png'
import foto_9 from '../assets/images/image 22.png'
import React from 'react'

const Hero = (props) => {
    React.useEffect(() => {
        document.title = props.docTitle
    }, [])
    return (
        <section className='w-def mx-auto'>
            <div className="d-flex justify-content-center">
                <div className='mx-1 d-flex-col align-self-center mb-5'>
                    <img src={foto_1} className='my-1 hero-img-1'/>
                </div>
                <div className='mx-1 d-flex-col mt-2'>
                    <img src={foto_2} className='my-1 hero-img-2'/>
                    <img src={foto_3} className='my-1 hero-img-1'/>
                </div>
                <div className='mx-1 d-flex-col mt-5'>
                    <img src={foto_4} className='my-1 hero-img-1'/>
                    <img src={foto_5} className='my-1 hero-img-1'/>
                </div>
                <div className='mx-1 d-flex-col'>
                    <img src={foto_6} className='my-1 hero-img-1'/>
                    <img src={foto_7} className='my-1 hero-img-1'/>
                </div>
                <div className='mx-1 d-flex-col mt-4'>
                    <img src={foto_8} className='my-1 hero-img-1'/>
                    <img src={foto_9} className='my-1 hero-img-1'/>
                </div>
            </div>
            <div className='text-start text-slate-800 dark:text-slate-50'>
                <h1 className='font-bold text-4xl mt-4 mb-2'>Online Experiences</h1>
                <p className='w-75 '>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </section>
    )
}

export default Hero