import React from 'react'
import './header.css';

const Header = ({quickLinks}) => {
    return (
        <div className = "header">
            <img className='thumbnail' alt="logo" src="https://avatars.githubusercontent.com/u/9051629?v=4"/>
            
            <div className='quickLinks'>
                <a href= {`#${quickLinks[0]}`} > {quickLinks[0]}</a>
                <a href={`#${quickLinks[1]}`}>{quickLinks[1]}</a>                    
                <a href={`#${quickLinks[2]}`}>{quickLinks[2]}</a>                   
            </div>
        </div>
    )
}

export default Header
