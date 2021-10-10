import React from 'react'
import "./Section.css"
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

function Section(props) {
    return (
        <div className="section"
        style={{
            backgroundImage:`url(/images/${props.image})`
        }}
        >
            <div className="section_parent">
                <Fade bottom >
                    <div className={`section__info ${!props.downarrow?"section_para":""}`}>
                        
                        {props.medium &&
                            <p className="medium">{props.medium}</p>
                        }

                        <p className="large">{props.large}</p>

                        {props.small && 
                            <p className="small">{props.small}</p>
                        }
                        
                        
                        <button className="btn">
                            <div className="btn-hover"></div>
                            <span className="btn-txt">{props.btn}</span>
                        </button>
                    </div>
                </Fade>
            </div>
           
           {props.downarrow &&
   
                <div className="section__downarrow">
                    <Zoom>
                        <img src="https://cdn.iconscout.com/icon/free/png-256/keyboard-down-arrow-1780093-1518654.png" alt=""/>
                    </Zoom>
                </div>
           
           }
            
        </div>
    )
}

export default Section
