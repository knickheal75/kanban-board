import React,{useEffect} from 'react';
import "./CardMain.css";


const CardDescription = (props) => {
  useEffect(()=>{
    console.log(props,"inside card description")
  },[props])
  return(
    <>        
      { 
        props?.showDescription &&
      <>
      <div className="card-detail-section">
        {props.logo}
        <p className="card-detail-text">DESCRIPTION</p>
      </div>
        
      <p className="card-description-name">{props.description}</p>
      </>
      }

      { props?.showResponsible &&
      <>
        <div className="card-detail-section">
        {props.logo}
        <p className="card-detail-text">RESPONSIBLE</p> 
      </div>

      <div className="card-detail-section">
        <p data-letters={props.initials}></p>
        <p className="card-responsible-name">{props.responsible}</p>
      </div>
      </>
      }
    </>
  )
}

export default CardDescription;