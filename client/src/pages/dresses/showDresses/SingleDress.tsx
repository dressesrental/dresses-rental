import React from 'react';

export const SingleDress=(props: { img: string | undefined;details:string })=>{

    return(
        <>
        <p>singleDress</p>
        <img src={props.img}></img>
        </>
    )

}