import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from "../../components/widget/Widget"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
        <Sidebar/>
        <div className='homeContainer'>
          <Navbar/>
          <div className="widget">
            <Widget type="User"/>
            <Widget type="Estimates"/>
            <Widget type="Earnings"/>
            <Widget type="Balance"/>
          </div>
        </div>
    </div>
  );
};

export default Home;


