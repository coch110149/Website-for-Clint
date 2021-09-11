import React from 'react'

const Contact = () => {
    return (
        <div section="Contact">
            <form>
                <input required type="text" value={firstName}></input>
                <input type="text" value ={company}></input>
                <input type="email" value ={email}></input>
                <textarea></textarea>
                <button type="submit"></button>
            </form>
        </div>
    )
}

export default Contact
