import React from 'react';
import { Row, DropdownButton, Button } from 'react-bootstrap';
import "./MainNav.css";
import { AiFillPlusCircle, AiFillCreditCard } from "react-icons/ai";
import { MdOutlineFilterAlt, MdOutlineMoreVert } from "react-icons/md";
import { RiArchiveDrawerFill } from "react-icons/ri"; 
import { FiUsers } from "react-icons/fi";

const MainNav = () => {
  return(
    <Row id="sub-nav" >
         <DropdownButton id="dropdown-basic-button" className="first-item" title="Default View">
            </DropdownButton>
            <div className="collaberative-image">
            <FiUsers color="#0064FE" size="1.5rem" className="main-nav-collaberative-image"/>
              <DropdownButton id="dropdown-basic-button" title="Collaborative">
              </DropdownButton>
            </div>
            <div className="sub-nav-btn-wrapper">
              <Button id="btn-nav">+ Add task</Button>
            </div>
            <div className="parent-div">
              <div className="child-div"> 
                <AiFillCreditCard color="#0064FE" size="1.5rem" className="image-inline"/>
                <p className="tab-text">Custom Card</p> 
              </div>
            </div>
            <div className="parent-div">
              <div className="child-div">
                <MdOutlineFilterAlt color="#0064FE" size="1.5rem" className="image-inline"/>
                <p className="tab-text">Filter</p> 
              </div>
            </div>
            <div className="parent-div">
              <div className="child-div">
                <RiArchiveDrawerFill color="#0064FE" size="1.5rem" className="image-inline"/>
                <p className="tab-text">Grouping</p> 
              </div>
            </div>
            <div className="parent-div">
              <div className="child-div">
                <MdOutlineMoreVert size="1.5em" size={"2rem"} color="5A6375"/>
              </div>
            </div>
            <div className="last-child">
              <p data-letters="J"></p>
              <p data-letters="M"></p>
              <p data-letters="T"></p>
              <AiFillPlusCircle color="#0064FE" className="main-nav-circle" size={"2rem"}/>
            </div>
    </Row>
  )
}

export default MainNav;