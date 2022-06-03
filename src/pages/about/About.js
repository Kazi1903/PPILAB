import React from 'react';
import styles from '../about/About.module.css';
import skel from 'C:/Users/dmitr/my-app/src/skeleton.gif'
import zagr from 'C:/Users/dmitr/my-app/src/space.gif'

const About = () => {
    return (
        
            <div className={styles.cardholder}>
                <center>
                    <br/>
                <h1 >Лабораторная работа №5</h1>
                <br/>
                <h2>Ильин Дмитрий РПИС-91</h2>
                <br/>
                <h3>Сайт о космосе</h3>
                <br />
                <img src={skel}  />
                
              
                </center>
            </div>
       
    );
};

export default About;