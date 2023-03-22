import React from 'react';
import TextInput from './TextInput'
import DefaultButton from './DefaultButton'
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import memeImg from '../assets/images/memeImage.jpg'

const MemeGenerator = (props) => {
    React.useEffect(() => {
        document.title = props.docTitle
    }, [])
    
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        isDarkText: false,
        memeImage: memeImg,
    })
    const [memeData, setMemeData] = React.useState(null)

    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(result => result.json())
            .then(data => setMemeData(() => (data.data.memes)))
    }, [])

    const memeGeneratorBtnEvt = {
        onClick: () => {
            setMeme((prevMeme) => ({...prevMeme, memeImage:memeData[Math.floor(Math.random() * 99)].url }))
        },
    }

    const handleChange = (event) => {
        const {name, value, type, checked} = event.target
        setMeme(prevData => {
            return {
                ...prevData,
                [name]: type === 'checkbox' ? checked : value,
            }
        })
    }

    return (
        <form>
            <div className='relative inline-block'>
                <h1 className='text-main font-bold text-4xl mb-10 inline-block text-shadow-sm t-s-main'>Meme Generator</h1>
            </div>
            <div className='max-w-xl mx-auto text-start flex flex-wrap pb-10'>
                <div className="w-1/2 px-3">
                <TextInput placeholder="Top Text" id="topText" onChange={handleChange} value={meme.bottomText}/>
                </div>
                <div className="w-1/2 px-3">
                <TextInput placeholder="Bottom Text" id="bottomText" onChange={handleChange} value={meme.bottomText}/>
                </div>
                <div className='w-full px-3 mt-4'>
                <DefaultButton type="button" events={memeGeneratorBtnEvt} additionalClass="w-full text-center" text="Generate a New Meme Image" icon={faImage}/>
                </div>            
                <div className='px-3 mt-2 mx-auto'>
                    <label className='text-slate-800 dark:text-slate-50 mr-2' htmlFor='isDarkText'>Dark text?</label>
                    <input name='isDarkText' type='checkbox' id='isDarkText' checked={meme.isDarkText} onChange={handleChange}/>
                </div>
                <div className={`relative px-3 w-full mt-5 text-center ${meme.isDarkText ? 'text-black' : 'text-white'} font-extrabold`}>
                    <p className='w-11/12 absolute top-5 left-1/2 -translate-x-1/2 text-4xl drop-shadow'>{meme.topText}</p>
                    <p className='w-11/12 absolute bottom-5 left-1/2 -translate-x-1/2 text-4xl drop-shadow'>{meme.bottomText}</p>
                    <img src={meme.memeImage} className='object-cover rounded-md min-h-[20rem] h-auto w-full no-repeat'/>
                </div>
            </div>
            {/* <DefaultButton type="button" additionalClass="text-center mb-10" text="Download Meme!" icon={faDownload}/> */}
        </form>
    )
}

export default MemeGenerator