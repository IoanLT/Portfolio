import React from 'react';
// Import icons
import clock from '../assets/clock.svg';
import diaphragm from '../assets/diaphragm.svg';
import money from '../assets/money.svg';
import teamwork from '../assets/teamwork.svg';
import home2 from '../assets/home2.png';

const Services = () => {
    return (
        <div className="services">
            <div className="description">
                <h2>High <span>quality</span> services</h2>
            </div> 

            <div className="cards">
                <div className="card">
                    <div className="icon">
                        <img src={clock} alt="clock" />
                        <h3>Efficient</h3>
                    </div>
                    <p>lorem ipsum dolor sit amet</p>
                </div>

                <div className="card">
                    <div className="icon">
                        <img src={teamwork} alt="teamwork" />
                        <h3>Teamwork</h3>
                    </div>
                    <p>lorem ipsum dolor sit amet</p>
                </div>  

                <div className="card">
                    <div className="icon">
                        <img src={diaphragm} alt="diaphragm" />
                        <h3>Diaphragm</h3>
                    </div>
                    <p>lorem ipsum dolor sit amet</p>
                </div>  

                <div className="card">
                    <div className="icon">
                        <img src={money} alt="money" />
                        <h3>Affordable</h3>
                    </div>
                    <p>lorem ipsum dolor sit amet</p>
                </div>            
            </div> 
            
            <div className="image">
                <img src={home2} alt="camera" /> 
            </div>                   
        </div>
    )
}

export default Services;
