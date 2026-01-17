import meme1 from './assets/Screenshot 2026-01-10 at 12.56.02.png'
import meme2 from './assets/Screenshot 2026-01-10 at 12.57.25.png'
import { useNavigate } from 'react-router-dom';
import React from 'react'




function CalorieTracker({cal, setCal}){
    const navigate = useNavigate();













return(

<div className={'tracker'}>
        <h1 className={'ct'}>Calorie Tracker</h1>

    <div className={'ex'}>


        <h3>Problem:</h3>

    <p> When you can't gain weight 🥲</p>

        <img
            className={'sadFace'}
            src={meme1}></img>


        <p>Being skinny and eating like a king… but the scale refuses to cooperate.
            This project helps users figure out exactly how many calories they should be eating based on their goal—gain weight, lose weight, or just maintain and vibe. Once the calorie goal is set, users can log what they eat (yes, even that late-night snack), add the calories, and hit Add to track everything in one place. Expect helpful tracking, clear goals, and a few memes along the way to keep things motivating when the scale is being disrespectful.</p>



        <p>Hopefully after using this Calorie-Tracker, you can be build like this! (Maybe).</p>

        <img
            className={'strongMan'}
            src={meme2}></img>

    </div>



        <div className={'goal'}>

            <h2>First we need to figure out what your goal is...</h2>
            <p> Since I am lazy person I am going to send a link, and you can fill this information out.
            After that type down what the calorie is under here. Also if you want to Gain weight add 500 to get you final total.</p>

            <a href={'https://www.calculator.net/calorie-calculator.html'}
                target={'_blank'}
                title={'Click here!'}>
                <h3> PRESS HERE 🙃</h3>
            </a>







            <input
                placeholder={'Calories'}
                type={'number'}
                value={cal}
                onChange={(e) => setCal(Number(e.target.value))}

            ></input>


        </div>





             <div className={'numberTracker'}>

                 <h1>Calorie Goal!</h1>
                 <h2 className={'num'}>{cal}</h2>



                     <button



                         className={'button'}
                         onClick={() => navigate('/page')}


                     title={'START HERE!'}>Start👏</button>






             </div>
















                </div>










);


}
export default CalorieTracker