import React from 'react'
import "./widget.scss"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Widget = ({ type }) => {
    let data;

    //temporary
    const amount = 100;
    const diff = 20;

    switch(type){
        case "user":
            data = {
              title: "USERS",
              isMoney: false,
              link: "See all users",
              icon: (
                <PersonOutlineOutlinedIcon
                  className="icon"
                  style={{
                    color: "crimson"
                  }}
                />
              ),
            };
            break;
          case "estimates":
            data = {
              title: "ESTIMATES",
              isMoney: false,
              link: "View all estimates",
              icon: (
                <ShoppingCartOutlinedIcon
                  className="icon"
                  style={{
                    color: "goldenrod",
                  }}
                />
              ),
            };
            break;
          case "earning":
            data = {
              title: "EARNINGS",
              isMoney: true,
              link: "View net earnings",
              icon: (
                <MonetizationOnOutlinedIcon
                  className="icon"
                  style={{ 
                      color: "green" 
                    }}
                />
              ),
            };
            break;
          case "balance":
            data = {
              title: "BALANCE",
              isMoney: true,
              link: "See details",
              icon: (
                <AccountBalanceOutlinedIcon
                  className="icon"
                  style={{
                    color: "purple",
                  }}
                />
              ),
            };
            break;
            default:
                break;
    }

  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"} {amount} </span>
            <span className="link"> {data.link} </span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpOutlinedIcon/>
                {diff} %
            </div>
            {data.icon}
        </div>
    </div>

  )
}

export default Widget