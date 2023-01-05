import { Button } from '@mui/material'
import React from 'react'
import '../Common-Comp/Common.css'
import './Banner.css'
import { NavLink } from 'react-router-dom'
export const Banner = ({name, image, bannerText}) => {
    return (
        <>
            <div className="container">
                <div className="banner-data">
                    <p className='banner-heading'>This is me</p>
                    <h1 className='banner-name'>{name}</h1>
                    <p className="banner-text">{bannerText} </p>
                    <Button variant="contained">
                        <NavLink className='btn' to='/contact'>CONTACT ME</NavLink>
                    </Button>
                </div>
                <div className="banner-img">
                    <picture>
                        <img src={image} alt="" />
                    </picture>
                </div>
            </div>
        </>
    )
}
