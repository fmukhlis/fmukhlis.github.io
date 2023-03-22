import React from "react"

const TextInput = (props) => {
    const transitionClass = "ease-in-out duration-300 delay-75"

    return (
        <>
            <input onChange={props.onChange} type="text" id={props.id} name={props.id} className={"peer w-full appearance-none bg-gray-200 dark:bg-gray-600 rounded-sm text-gray-800 dark:text-gray-50 px-4 py-3 focus:outline-none focus:bg-transparent dark:focus:bg-transparent transition " + transitionClass} placeholder={props.placeholder}/>
            <div className={"w-0 pb-0.5 rounded-sm bg-transparent peer-focus:w-full peer-focus:bg-main transition-all " + transitionClass}></div>
        </>
    )
}

export default TextInput