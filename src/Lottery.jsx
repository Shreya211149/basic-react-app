import { useState } from "react";
import Ticket from "./Ticket";
import { genTicket,sum } from "./helper";

export default function Lottery({n=3,winningSum=15}){
    let [ticket,setTicket]=useState(genTicket(n));
    let isWinning=sum(ticket)==winningSum;

    let buyTicket=()=>{
        setTicket((genTicket(n)));
    };

    return(
      <div>
        <Ticket ticket={ticket} />
           <br /> <br />
        <button onClick={buyTicket}>Buy Ticket</button>

        <h3 style={{color:"green"}}>{isWinning && "Congratulations, you won!!"}</h3>
      </div>
    );
}