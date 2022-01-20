import React from 'react';
import { Navbar, Button, Breadcrumb } from 'react-bootstrap';
import "./MainHeader.css";
import { AiFillQuestionCircle, AiFillHome } from "react-icons/ai";
import { MdNotifications, MdOutlineKeyboardArrowLeft, MdAddCircleOutline } from "react-icons/md";
import { BiClipboard } from "react-icons/bi";
import { RiTaskFill } from "react-icons/ri";
import { TiThLarge } from "react-icons/ti";

const MainHeader = () => {
  return(
   <>
   <Navbar expand="lg" id="nav-main">
        
        <div className="header-inner">
            <div className="left-box">
                <MdOutlineKeyboardArrowLeft size={"1.5rem"} color="666E8D" />
                <TiThLarge size={"1.5rem"} color="0064FE" />
            </div>
                <Button className="center-btn arrow-main"><BiClipboard size={"1.3rem"} color="#0064FE" />Task board</Button>
            <div className="right-box">
                <AiFillQuestionCircle size={"1.3rem"} color="666E8D" />
                <MdNotifications size={"1.5rem"} color="666E8D" />
                <p data-letters="J"></p>
                <p className="arrow nav-user-name">J.Herbst</p>
            </div>
       </div>

       <div className="menu-wrapper">
        <Breadcrumb>
                <Breadcrumb.Item ><AiFillHome size={"1.3rem"} color="#0064FE" className="icon-style-menu"/> Home</Breadcrumb.Item>
                <Breadcrumb.Item ><RiTaskFill size={"1.3rem"} color="#0064FE" className="icon-style-menu"/>Task <p id="task-item"></p></Breadcrumb.Item>
                <Breadcrumb.Item ><MdAddCircleOutline size={"1.3rem"} color="#0064FE" className="icon-style-menu"/>Add to </Breadcrumb.Item>
            </Breadcrumb>
       </div>

   </Navbar>
   </>
  )
}

export default MainHeader;