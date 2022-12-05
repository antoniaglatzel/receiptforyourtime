import React, {useContext} from "react";
import { ListContext } from "../App";
import "./landing.css";
import arrow from "./assets/arrow.png";
import linkedin from "./assets/linkedin.png";
import instagram from "./assets/instagram.png";
import Img1 from "./assets/Img1.jpg";
import Img2 from "./assets/Img2.jpg";


const Landing = () => {
    const {dest, food} = useContext(ListContext);

    return(
    <div class="container"> 

            <section class="back-item-wrapper" style={{backgroundColor: "#E4381D",}}>  
                <h1 class="title">Hi, I am Antonia.</h1>
                <img class="arrow" src={arrow} alt="" />
            </section>

            <section class="back-wrapper" style={{backgroundColor: "white",}}> 
                <div class="back-item-wrapper"><img class="photos1" src={Img1} alt=""/></div>
                <div class="back-item-wrapper"><img class="photos2" src={Img2} alt=""/></div>
            </section>

            <section class="back-item-wrapper-half" style={{backgroundColor: "#B5D2E3",}}>
                <p class="aboutme">
                    My name is Antonia Glatzel and I study management and technology in my Masters at TUM.
                    Born in Leipzig, a city in the east of Germany, I moved around quite a bit and just now moved to Berkeley for a semester abroad. 
                    Super excited to study here, meet exciting new people, explore the area and take a lot of pictures (<span style={{fontStyle:"italic",}}>analog photography is a passion of mine</span>).<br/><br/>
                    Great to meet you in class!
                </p> 
            </section>

            <section class="back-wrapper" >
                <section class="back-item-wrapper-half" style={{backgroundColor: "#B5D2E3",}}>
                    <section style={{padding: "5%",}}>
                        <p class="mylist" style={{fontSize: "1.2em",}}>Let's talk about my top five travel destinations:</p>
                        <hr style={{border: "0.5px solid white", width: "70%",}} />
                        <ol class="mylist" style={{fontSize: "1.2em",}}>
                            {dest.map(destination => {
                                return <li>{destination}</li>;
                            })}
                        </ol> 
                    </section>
                 </section>
                 <section class="back-item-wrapper-half" style={{backgroundColor: "#B5D2E3",}}>
                    <section style={{padding: "5%",}}>
                        <p class="mylist" style={{fontSize: "1.2em",}}>Let's talk about some of my favorite meals:</p>
                        <hr style={{border: "0.5px solid white", width: "70%",}}/>
                        <ul class="mylist" style={{fontSize: "1.2em",}}>
                            {food.map(meal => {
                                    return <li>{meal}</li>;
                                })}
                                
                            </ul> 
                    </section>
                 </section>
            </section>

            <section class="back-item-wrapper" style={{height: "56.3vw", backgroundColor: "#f18473",}}>
                <iframe style={{height: "56.3vw", width: "100vw",}} src="https://www.youtube.com/embed/3PZ65s2qLTE?start=61&autoplay=1&mute=1" title="Alps" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>

            <section class="back-item-wrapper" style={{backgroundColor: "#f18473",}}>
                <p class="aboutme" style={{position: "relative", top: "25vh", fontSize: "1.5em", margin: "0",}}>Happy to connect! <br/> Just leave your name and mail address:</p>
               
                <form>
                    <input type="text" id="name" name="name" placeholder="Name"/>
                    <input type="mail" id="mail" name="mail" placeholder="Mail"/>
                    <br/>
                    <input type="radio" id="consent" name="consent" value="yes"/>
                    <label for="consent" style={{fontSize:"1em",}}>I want to share my data with big tech.</label>
                    <br/>
                    <input type="radio" id="noconsent" name="consent" value="no"/>
                    <label for="noconsent" style={{fontSize:"1em",}}>Please keep my info top secret.</label>
                    <br/>
                    <input type="submit" value="Send" style={{position: "relative",}} id="submit"/>    
                  </form> 

                <div class="logos_container">
                    <a href="https://www.instagram.com/dugluecklicher/"><img class="logo" src={instagram} alt="Instagram"/></a>
                    <a href="https://www.linkedin.com/in/antonia-glatzel/"><img class="logo" src={linkedin} alt="Linkedin"/></a>
                </div>
            </section>
    </div>
  );
};

export default Landing;