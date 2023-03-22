import React from "react"
import DefaultButton from "./DefaultButton"
import { faArrowsSpin } from "@fortawesome/free-solid-svg-icons"
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import { faRepeat } from "@fortawesome/free-solid-svg-icons"

const Tenzies = (props) => {
    const [gameStats, setGameStats] = React.useState({status:'Ready', rollCount: 0})
    const hoverClass = "hover:bg-slate-100 hover:dark:bg-slate-400 hover:border-b-slate-500 hover:dark:border-b-slate-800"
    const typographyClass = "text-slate-800 dark:text-slate-50 font-bold"
    const bgBorderClass = "border-b-slate-400 dark:border-b-slate-700 bg-slate-300 dark:bg-slate-500"
    const hoverClassFrozen = "hover:bg-red-300 hover:dark:bg-red-300 hover:border-b-red-600 hover:dark:border-b-red-600" 
    const typographyClassFrozen = "text-slate-50 dark:text-slate-50 font-bold"
    const bgBorderClassFrozen = "border-b-red-800 dark:border-b-red-800 bg-main dark:bg-main"

    const [currentDices, setCurrentDices] = React.useState(Array.from({length: 10}, (element, index) => ({id: index + 1, isMutable: true, value: Math.floor((Math.random() * 6) + 1)})))
    
    const handleFreeze = (diceId) => setCurrentDices((prevDices) => prevDices.map((dice) => {
        return gameStats.status === 'Playing' && dice.id === diceId
            ? {...dice, isMutable: !dice.isMutable}
            : dice
    }))

    const diceElements = currentDices.map((dice) => (
        <button key={dice.id} onClick={() => handleFreeze(dice.id)} className={`${!dice.isMutable ? `${bgBorderClassFrozen} ${typographyClassFrozen} ${hoverClassFrozen}` : `${bgBorderClass} ${typographyClass} ${hoverClass}`} relative overflow-hidden transition-all duration-75 w-14 h-14 rounded flex items-center justify-center border-b-4`}>
            <div className="animate-sparkling-sm-slow bg-white h-16 w-3 absolute"></div>
            <span>{dice.value}</span>
        </button>)
    )

    const startBtnEvt = {
        onClick: 
        () => setGameStats((prevGameStats) => ({...prevGameStats, status: 'Playing'}))
    }

    const rollBtnEvt = {
        onClick: 
        () => {
            setGameStats((prevGameStats) => ({...prevGameStats, rollCount: prevGameStats.rollCount + 1}))
            setCurrentDices(prevDices => prevDices.map((dice) => {
                return gameStats.status === 'Playing' && dice.isMutable 
                    ? {...dice, value: Math.floor((Math.random() * 6) + 1)}
                    : dice
            }))
        }
    }
    
    const restartBtnEvt = {
        onClick: 
        () => setGameStats((prevGameStats) => {
            setCurrentDices((prevDices) => prevDices.map((dice) => ({...dice, isMutable: true, value: Math.floor((Math.random() * 6) + 1)})))
            return ({...prevGameStats, status: 'Playing', rollCount: 0})
        })
    }

    React.useEffect(() => {
        document.title = `(${gameStats.status}) ${props.docTitle}`
    }, [gameStats])

    React.useEffect(() => {
        const isAllEquals = currentDices.every(dice => dice.value === currentDices[0].value)
        isAllEquals && setGameStats((prevGameStats) => ({...prevGameStats, status: 'Finished'}))
    }, [currentDices])

    return (
        <div className="mt-12 w-1/3 mx-auto">
            <h1 className='text-main font-bold text-4xl mb-7 inline-block text-shadow-sm t-s-main'>Game Tenzies</h1>
            <p className="text-slate-800 dark:text-slate-50">Roll until all dice are the same. Click each dice to freeze it at its current value between rolls</p>
            <p className={`${typographyClass} text-xl mt-3 flex items-center justify-center gap-3`}>Total Rolls : <span className="text-3xl text-main">{gameStats.rollCount}</span></p>

            <div className="relative my-3 p-7 bg-slate-200 dark:bg-slate-600 rounded flex flex-wrap justify-between gap-4 border-b-8 border-b-slate-900">
                {diceElements}
                {gameStats.status !== 'Playing' && <div className="absolute inset-0 -mx-4 -mb-4 -mt-2 bg-slate-blur dark:text-slate-100 text-slate-700 flex items-center justify-center text-3xl font-bold backdrop-blur-sm border-t-4 border-t-slate-600 dark:border-t-slate-300 border-x-4 border-x-transparent">
                    {gameStats.status === 'Ready' ? 'Are you ready kids ?' : <span><span className="block mb-5 font-extrabold text-shadow-sm t-s-main text-main-analogous-1 rounded bg-main py-3 text-5xl">YOU WIN</span><span>All dice are all the same</span></span>}
                </div>}
            </div>

            {gameStats.status === 'Ready' 
                ? <DefaultButton events={startBtnEvt} text='Start' icon={faPlay} additionalClass='mb-10'/> 
                : gameStats.status === 'Playing' 
                    ? <DefaultButton events={rollBtnEvt} text='Roll' icon={faArrowsSpin} additionalClass='mb-10'/>
                    : <DefaultButton events={restartBtnEvt} text='Restart' icon={faRepeat} additionalClass='mb-10'/>
                }
            
        </div>
    )
}

export default Tenzies