import React, {useState} from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)





function Page2({cal}){

    const [rows, setRows] = useState([{}]);




    function createLog() {
        setRows([...rows, {}]);
    }


    const [eaten, setEaten] = useState(0)
    const [amount, setAmount] = useState('')

    const remaining = Math.max(cal - eaten, 0)

    const data = {
        labels: ['Eaten', 'Remaining'],
        datasets: [
            {
                data: [eaten, remaining],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.3)',
                ],
                borderWidth: 0,
            },
        ],
    }

    function addCalories() {
        const value = Number(amount)
        if (value <= 0) return

        setEaten(prev => prev+ value)
        setAmount('')
    }





    return(

       <div className={'page2'}>

           <div className={'pie'}>
               <Doughnut data={data} options={'data'} />
           </div>


           <h1 className={'title'}>Track your Calories!</h1>




           {rows.map((_, index) => (
               <div key={index}>
                   <input
                       className="log"
                       placeholder="Pizza, Apple..."
                       type="text"
                   />

                   <input
                       className="cal"
                       type="number"
                       placeholder="Amount of Calories..."
                       onChange={(e) => {
                           const value = Number(e.target.value);
                           if (value > 0) {
                               setEaten(prev => prev + value);
                           }
                       }}
                   />


                   <button className={'addFood'}
                           onClick={createLog}> + </button>
               </div>
           ))}














       </div>








    );


}
export default Page2;