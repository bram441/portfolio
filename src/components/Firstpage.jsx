import React from 'react'
import foto_bram from '../images/Bram.jpeg'


export default function Firstpage() {
    return (
        <>
        <div className="FirstPage">
            <h1> Bram De Coster </h1>
        </div>
        <img className="foto_bram" src={foto_bram} alt="foto" />
        </>
    )
}


