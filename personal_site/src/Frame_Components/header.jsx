import React from 'react'
import './header.css';

const Header = ({quickLinks,onClick, logoUrl}) => {
    return (
        <div className = "header">
            <img className='thumbnail' alt="logo" src={logoUrl}/>
            
            <div className='quickLinks'>
                <a onClick={onClick} href= {`#${quickLinks[0]}`} > {quickLinks[0]}</a>
                <a onClick={onClick} href={`#${quickLinks[1]}`}>{quickLinks[1]}</a>                    
                <a onClick={onClick} href={`#${quickLinks[2]}`}>{quickLinks[2]}</a>                   
            </div>
        </div>
    )
}

export default Header
