import { useState } from 'react'

export function list(){

    const getMovieJson= async()=>{
        const url= 'http://www.omdbapi.com/?s=star%20wars&apikey=19fcf6c1'
        const response= await fetch(url)
        const responseJson=await response.json();
       // console.log(responseJson)
        return responseJson;
    } 
}