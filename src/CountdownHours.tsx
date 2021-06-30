import React from "react";
import { useEffect, useState } from "react";

export const CountdownHours = (props: { date: Date }) =>
{
    const [hours, setHours] = useState(() => calculateHoursLeft(props.date));


    useEffect(() =>
    {
        const timer = setInterval(() =>
        {
            setHours(calculateHoursLeft(props.date));
        }, 1000);

        return () => clearInterval(timer);
    }, [props.date]);

    return <>{ Math.floor(hours) }</>
}

let fakeCounter = 0;

const calculateHoursLeft = (date: Date) => 
{
    console.log(date);
    return fakeCounter++;
}