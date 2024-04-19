import React, { useState } from 'react'
import Footer from '../../components/common/footer'
import Header from '../../components/common/header'
import TabOptions from '../../components/common/tabOption'
import Delivery from '../../components/common/delivery'
import DiningOut from '../../components/diningOut'
import Nightlife from '../../components/nightlife'
const HomePage = () => {

    const [activeTab, setActiveTab]=useState("Delivery")

    return (
    <div>
        <Header />
        <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
        {getCorrectScreen(activeTab)}
        <Footer />
    </div>
  )
}
const getCorrectScreen=(tab)=>{
    switch(tab){
        case "Delivery":
            return <Delivery/>;
            case "Dining Out":
            return <DiningOut/>;
            case "Night Life":
                return <Nightlife/>;
        default:
            return <Delivery/>;
            }
};
export default HomePage;