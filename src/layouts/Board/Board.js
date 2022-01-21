import React from 'react';
import "./Board.css";
import List from "../List/List";
import { Row, Button } from 'react-bootstrap';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        lists: [
          {
            title: 'Unspecified stage',
            id: 0,
            cards: [{
              taskText: "Read the HIPA Center",
              taskDescription: "Open to fully understand the HIPA platform and it's features",
              taskResponsible: "",
              taskResponsibleInitials: "",
              listNumber: 0,
              timeId: 0
            }, 
            {
              taskText: "Create two apps",
              taskDescription: "",
              taskResponsible: "Maxim Jaders",
              taskResponsibleInitials: "M",
              listNumber: 0,
              timeId: 1
            }]
          },
          {
            title: 'Has not started',
            id: 1,
            cards: []
          },
          {
            title: 'Processing',
            id: 2,
            cards: [{
                taskText: 'Read the HIPA Center',
                taskDescription: "Open to fully understand the HIPA platform and it's features",
                taskResponsible: "",
                taskResponsibleInitials: "",
                listNumber: 3,
                timeId: 2
            },
            {
              taskText: 'Read the HIPA Center once',
              taskDescription: "Open to fully understand the HIPA platform and it's features",
              taskResponsible: "Niclas Anders",
              taskResponsibleInitials: "N",
              listNumber: 3,
              timeId: 3
            }, 
            {
              taskText: 'Create an application using a simple Kanban template',
              taskDescription: "Open to fully understand the HIPA platform and it's features",
              taskResponsible: "",
              listNumber: 3,
              timeId: 4
            }]
          },
          {
            title: 'Completed',
            id: 3,
            cards: []
          }
        ],
        dragInfo : {}
    }
  }

  onDragStart = (e, fromList) => {
    const dragInformation = {
      taskId: e.currentTarget.id,
      fromList: fromList
    }
    this.setState({ dragInfo: dragInformation });
  }

  onDragOver = (e) => {
    e.preventDefault();
  }

  onDrop = (e, listNum) => {
    const dropList = JSON.parse(JSON.stringify(this.state.lists));
    const cardsArray = dropList[this.state.dragInfo.fromList].cards
    const taskCard = cardsArray.find(card => card.timeId == this.state.dragInfo.taskId)
    const indexOfCard = cardsArray.findIndex(card => card.timeId == this.state.dragInfo.taskId)
    dropList[this.state.dragInfo.fromList].cards.splice(indexOfCard, 1)
    dropList[listNum].cards.push({...taskCard, listNumber: parseInt(listNum)})
   
    this.setState({
      lists: dropList
    });
  }

  render(){
    const lists = this.state.lists.map((list, index) => (
        <List {...list} 
          onAdd={(taskText, listNumber) => this.addTaskCard(taskText, listNumber)} 
          onDragStart={(e, fromList) => this.onDragStart(e, `${list.id}`)}
          onDragOver={(e) => this.onDragOver(e)} 
          onDrop={(e, listNum) => {this.onDrop(e, `${list.id}`)}}
          key={index}
        />
    ));
     return(
        <div className="main-board-container">
            <div className="outer-title-board">
              <h3>Task board</h3>
            <div>
              <Button>+ Add task</Button>
            </div>
            </div>
            <Row id="board-wrapper">
              {lists}
            </Row>
        </div>
    )
  }
}