import React from "react";
import { useEffect, useState } from "react";

export const CountdownMinutes = (props: { date: Date }) =>
{

    
    const fechaFin    = props.date.getTime();
    


    const [minutes, setMinutes] = useState(() => calculateMinutesLeft(fechaFin));

    useEffect(() =>
    {
        const timer = setInterval(() =>
        {
            setMinutes(calculateMinutesLeft(fechaFin));
        }, 1000);

        return () => clearInterval(timer);
    }, [props.date]);

    return <>{ Math.floor(minutes) }</>
}



const calculateMinutesLeft = (fechaFin: number) => 
{  
    var fechaInicio = new Date().getTime();
    var diff = fechaFin -fechaInicio;
    var min = diff/0o167;
    
    return Math.abs(min);
}