import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import "./CardMain.css";
import { MdDescription } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import CardDescription from './CardDescription';

const CardMain = (props) => {
  useEffect(()=>{
    console.log(props,"inside card")
  },[props])
  return(
      <>
      {props.listNumber !== -1 ? <Card className="main-card-outer">
          <Card.Body draggable="true" id={[props.timeId]} onDragStart={props.onDragStart}>
              
              <Card.Title id="card-inner" >{props.taskText}</Card.Title>
              
              { 
                <CardDescription 
                  logo={ <MdDescription color="#A6ACC4" size="0.94rem" className="main-card-icon"/> }
                  description={props.taskDescription}
                  showDescription={ (props.taskDescription !== "" || !props.taskDescription || props.taskDescription === null) ? true : false}
                  />
              }

              { 
                <CardDescription 
                  logo={<FaUserAlt color="#A6ACC4" size="0.94rem" className="main-card-icon"/> }
                  responsible={props.taskResponsible}
                  initials={props.taskResponsibleInitials}
                  showResponsible={ props.taskResponsible !== ""  || !props.taskResponsible || props.taskResponsible === null ? true : false}
              />
              }

          </Card.Body>
        </Card> : 
        
        <Card className="main-card">
            
            <Card.Body>
                <Card.Title id="card-inner-option">{props.taskText}</Card.Title>
            </Card.Body>

        </Card>
        }
      </>
  )
}

export default CardMain;
