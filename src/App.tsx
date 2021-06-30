import React, { ChangeEvent } from "react";



export default function App() {
  var endDate = new Date();
  const firstDate = new Date();
  
  var timeLeft = calculateTimeLeft(endDate, firstDate);
  var [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft(endDate, firstDate));
  
  function calculateTimeLeft(date: Date, date2:Date) {
    const difference = +date - +date2;
    let timeLeft = [];
  
    if (difference > 0) {
        
      timeLeft[0] = Math.floor(difference / (1000 * 60 * 60 * 24));
      timeLeft[1] = Math.floor((difference / (1000 * 60 * 60)) % 24);
      timeLeft[2] = Math.floor((difference / 1000 / 60) % 60);
      timeLeft[3] = Math.floor((difference / 1000) % 60);
  
    }
  
    return timeLeft;
  }

  React.useEffect(() => {
    var id = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(endDate, firstDate));
      timeLeft = calculateTimeLeft(endDate, firstDate);
    }, 2000);

    return () => {
      clearTimeout(id);
    };
  });

  const onChange = (event: ChangeEvent<HTMLInputElement>) =>
    {

        if (event.target.value)
        {
            endDate = new Date(event.target.value)
            timeLeft = calculateTimeLeft(endDate, firstDate);
        }
    };

  return (
  
    <div>
      {"Quedan "+timeLeft[0]+" dias, "+timeLeft[1]+" horas, "+timeLeft[2]+" minutos, "+timeLeft[3]+" segundos "+"para las "} <input type="datetime-local" onChange={onChange}></input>
    </div>
  );
}
