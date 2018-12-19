import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import ProfileScreen from "../ProfileScreen/index.js";
import Customer from "../scenes/Customer";
import SideBar from "../SideBar/SideBar.js";
import { createDrawerNavigator, createAppContainer } from "react-navigation";

const HomeScreenRouter = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    ProfileScreen: { screen: ProfileScreen },
    Customer: { screen: Customer }


  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);


const AppContainer = createAppContainer(HomeScreenRouter);

export default AppContainer;