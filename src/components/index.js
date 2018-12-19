import React, { Component } from "react";
import Customer from "../scenes/Customer";
import CustomerC from "../components/CustomerComponent";
import Profile from "../ProfileScreen/Profile.js";
// import EditScreenOne from "./EditScreenOne.js";
import SideBar from "../SideBar/SideBar.js";
// import EditScreenTwo from "./EditScreenTwo.js";
import { createDrawerNavigator, createAppContainer } from "react-navigation";

const HomeScreenRouter = createDrawerNavigator(
    {
        Customer: { screen: Customer },
        Profile: { screen: Profile },
        CustomerC: { screen: CustomerC }



    },
    {
        contentComponent: props => <SideBar {...props} />
    }
);


const AppContainer = createAppContainer(HomeScreenRouter);

export default AppContainer;