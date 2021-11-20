import React from "react";
import { Link } from "react-router-dom";
import Styles from './SignupInterest.module.css';
const CommonNav = () => {
    return (
        <div>
            <div className={Styles.contSticky}>
                <div className={Styles.topCont}>
                    <img className={ Styles.contImg} src="https://secure.meetupstatic.com/s/img/642287997414509021596/logo/svg/logo--mSwarm--2color.svg" alt="logo"/>
                    <Link to="/"><button className={ Styles.contButton}>Next</button></Link>
                </div>
            </div>
        </div>

    )
}

export { CommonNav }