import React from "react";
import { TopNav } from "../../topNav/TopNav";
import ss from '../../icons/ss.jpg';
import { SingleDress } from "./SingleDress";

export const ShowDresses = () => {

    const dresses = [
        // { details: "ss", img: ss },
        // { details: "shhhs", img: ss },
        // {details:"ss",img:{ss}},
        // {details:"ss",img:{ss}},
    ]
    return (
        <>
            <TopNav />
            <p>showDresses</p>

            {/* {dresses &&
                dresses.map((dress: { details: string, img: string }, index: number) => (
                    <SingleDress details={dress.details} img={dress.img} key={index}></SingleDress>
                ))} */}
        </>
    )
}