import React from 'react';
import "./List.css";
import { Col, Card } from 'react-bootstrap';
import CardMain from '../../components/Card/CardMain';
import { AiFillPlusCircle } from "react-icons/ai";

const List = (props) => {

    const cards = props.cards.map((card, index) => {
        return ( 
          <li key={index} className="list-single-item">
            <CardMain {...card} onDragStart={props.onDragStart}/>
          </li>
        );
    })

    const newTaskCard = () => {
        let cardOne = {
            taskText: '+ Add Task',
            listNumber: -1,
            timeId: -1
          }
        return ( 
            <li className="list-single-item">
              <CardMain {...cardOne}/>
            </li>
          );
    }

  return(
    <Col md={3} sm={6} className="main-list-column">
        <Card className="list-card">
            <Card.Body onDragOver={props.onDragOver} onDrop={props.onDrop}>
                <Card.Title id="list-card-title">
                  {props.title}
                  <p className="card-count">{cards.length}</p> 
                  <AiFillPlusCircle size="1.5em"  color="#C0D6FA" className="list-add-icon"/>
                </Card.Title>
                    <ul className="card-inner-list" >
                        {cards.length > 0 ? cards : newTaskCard()}
                    </ul>
            </Card.Body>
        </Card>
    </Col>
  )
}

export default List;