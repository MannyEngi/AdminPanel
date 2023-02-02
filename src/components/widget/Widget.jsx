import React from 'react'
import "./widget.scss"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const Widget = ({ type }) => {
  return (
    <div className='widget'>
        <div className="left">
            <span className="title">Users</span>
            <span className="counter">23123</span>
            <span className="link">See all Users</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpOutlinedIcon/>
                20%
            </div>
            <PersonOutlineOutlinedIcon className='icon'/>
        
        </div>
    </div>

  )
}

export default Widget