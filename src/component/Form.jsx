import React from 'react'
import { useContext, useState } from 'react'
import { MovieContext } from '../MovieContext'

const Form = () => {
    const{setSearchKey}=useContext(MovieContext)
    
    const [michael, setMichael]=useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        setMichael(setSearchKey)
        setMichael('')
    };
  return (
    <>
<div style={{display:'flex', alignItem:'center', justifyContent:'space-between'}}>
        <h1 style={{color:'red'}}>Netflix</h1>
        <form onSubmit={handleSubmit} >
            <div style={{display:'flex', alignItem:'center'}}>
                <div style={{backgroundColor:'grey', padding:'6px', borderRadius:'20px'}}>
                    <input type="text" placeholder='search...' style={{border:'none', outline:'none', backgroundColor:'grey'}} value={michael} onChange={(e)=> setMichael(e.target.value)} />
                </div>
                <input type="submit" value='search' />
            </div>
        </form>
    </div>
    </>
  )
}

export default Form