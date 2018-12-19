import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import NavigationDrawerLayout from '../NavigationDrawerLayout/NavigationDrawerLayout';
import Homepage from "../HomeScreen/HomeScreen.js";

const routes = ["Home", "Company"];

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menu: '',
      type: ''
    };
  }
  openDrawer = () => {
    this.drawer.openDrawer();
  };

  changeComponent = name => {
    switch (name) {
      case 'opt0':
        return <Homepage menu={this.state.menu} openDrawer={this.openDrawer} />;
      case 'opt1':
        return <Homepage menu={this.state.menu} />;
      default:
        return <Homepage menu={this.state.menu} />;
    }
  };

  render() {
    return (
      <NavigationDrawerLayout
        ref={_drawer => (this.drawer = _drawer)}
        percent={75}
        //statusBar="#008cff"
        //statusBarTransparency={0.3}
        type={this.state.type}
        drawerPosition="left"
        selected="opt0"
        window="menu"
        color="#fff"
        backgroundColor="#fff" //303030
        imageBackground="https://c.wallhere.com/photos/aa/44/glare_colorful_bright_circles-679384.jpg!d"
        first={'username'}
        second={'joined'}
        account={[
          {
            username: 'yahshua@systech.com',
            name: 'Jelord',
            email: 'jelordreygulle@gmail.com',
            image:
            'https://cdn1.iconfinder.com/data/icons/avatar-2-2/512/Casual_Man_2-512.png',
            joined: 'Joined at Jun 21, 2021',
            badgeText: '100',
            badgeColor: '#fff',
            badgeBackground: '#303030',
            circle: ['transparent', 'transparent'],
          },
          {
            username: 'sherlock.holmes',
            name: 'Sherlock Holmes',
            email: 'sherlock.holmes.xx@xxx.xxx',
            badgeText: '100',
            badgeColor: '#fff',
            badgeBackground: '#303030',
            circle: ['#fff000', 'transparent', '#00ffd0'],
          },
          {
            name: 'Shinichi Kudo',
            email: 'shinichi.kudo.xx@xxx.xxx',
            image:
            'https://cdn1.iconfinder.com/data/icons/avatar-2-2/512/Casual_Man_3-512.png',
            badgeText: '21',
            badgeColor: '#fff',
            badgeBackground: '#25dbd2',
            joined: 'Joined at Jun 31, 2021',
            circle: ['transparent', 'transparent'],
          },
          {
            name: 'Arthur Conan Doyle',
            email: 'arthur.conan.doyle.xx@xxx.xxx',
            image:
            'https://cdn0.iconfinder.com/data/icons/user-interface-vol-3-12/66/68-512.png',
            circle: ['transparent', 'transparent'],
          },
        ]}
        badgeFunction={e => {
          return e > 99 ? '99+' : e;
        } }
        menu={[
          {
            type: 'menu',
            name: 'asdsad',
            title: 'Home',
            icon: 'home',
            colorText: '#000',
            colorTextFocus: '#4CAF50',
            colorIcon: '#c1c1c1',
            colorIconFocus: '#4CAF50',
            background: 'transparent',
            backgroundFocus: '#e8e8e8',
            badgeText: '100',
            badgeColor: '#fff',
            badgeBackground: '#1194ff',
          },
          {
            type: 'menu',
            name: 'opt1',
            title: 'Quick Add Menu',
            icon: 'add-alert',
            colorText: '#000',
            colorTextFocus: '#607D8B',
            colorIcon: '#c1c1c1',
            colorIconFocus: '#607D8B',
            background: 'transparent',
            backgroundFocus: '#e8e8e8',
            badgeText: '31+',
          },
          // {
          //   type: 'menu',
          //   name: 'opt2',
          //   title: 'Abbonamenti',
          //   icon: 'refresh',
          //   colorText: '#000',
          //   colorTextFocus: '#607D8B',
          //   colorIcon: '#c1c1c1',
          //   colorIconFocus: '#607D8B',
          //   background: 'transparent',
          //   backgroundFocus: '#e8e8e8',
          // },
          { type: 'divider' },
          {
            type: 'title',
            title: 'Lists',
            colorText: '#000',
          },
          {
            type: 'menu',
            name: 'opt3',
            title: 'Home page',
            icon: 'apps',
            colorText: '#000',
            colorTextFocus: '#4CAF50',
            colorIcon: '#4CAF50',
            colorIconFocus: '#4CAF50',
            background: 'transparent',
            backgroundFocus: '#e8e8e8',
          },
          {
            type: 'collapse',
            name: 'opt4',
            title: 'Film',
            iconCollapsingName: 'local-movies',
            iconColor: "#ccc",
            colorText: '#000',
            colorTextFocus: '#4CAF50',
            colorIcon: '#f44336',
            colorIconFocus: '#f44336',
            background: 'transparent',
            backgroundFocus: '#e8e8e8',
            menu: [
              {
                name: 'sub0',
                title: "Apri l'app Film",
                icon: 'film',
                colorText: '#000',
                colorTextFocus: '#f44336',
                colorIcon: '#f44336',
                colorIconFocus: '#f44336',
                background: 'transparent',
                backgroundFocus: '#e8e8e8',
              },
            ],
          },
          {
            type: 'collapse',
            name: 'opt4',
            title: 'Libri',
            showOnStart: true,
            rippleColor: "#000",
            backgroundBarNormal: "#545a63",
            backgroundBarFocus: "#22252A",
            iconBarNameNormal: 'book',
            iconBarNameFocus: 'book',
            iconBarColorNormal: "#1194ff",
            iconBarColorFocus: "#ffb600",
            textBarColorNormal: "#1194ff",
            textBarColorFocus: "#ffb600",
            animateIconColorNormal: "#1194ff",
            animateIconColorFocus: "#ffb600",
            iconColor: "#ccc",
            colorText: '#000',
            colorTextFocus: '#4CAF50',
            colorIcon: '#f44336',
            colorIconFocus: '#f44336',
            background: 'transparent',
            badgeText: "100",
            badgeColor: "#fff",
            badgeBackground: "#1194ff",
            badgeRadius: 4,
            badgeStyle: {},
            menu: [
              {
                name: 'sub1',
                title: "Apri l'app Libri",
                icon: 'book',
                colorText: '#000',
                colorTextFocus: '#2196F3',
                colorIcon: '#2196F3',
                colorIconFocus: '#2196F3',
                background: 'transparent',
                backgroundFocus: '#e8e8e8',
                badgeText: '100',
                badgeColor: '#fff',
                badgeBackground: '#1194ff',
                badgeRadius: 4,
                close: true
              },
            ],
          },
          { type: 'divider' },
          {
            type: 'menu',
            name: 'opt9',
            title: 'Account',
            icon: 'person-pin',
            colorText: '#000',
            colorTextFocus: '#607D8B',
            colorIcon: '#c1c1c1',
            colorIconFocus: '#607D8B',
            background: 'transparent',
            backgroundFocus: '#e8e8e8',
          },
          {
            type: 'menu',
            name: 'opt10',
            title: 'Utilizza codice',
            icon: 'code',
            colorText: '#000',
            colorTextFocus: '#607D8B',
            colorIcon: '#c1c1c1',
            colorIconFocus: '#607D8B',
            background: 'transparent',
            backgroundFocus: '#e8e8e8',
          },
          {
            type: 'menu',
            name: 'opt11',
            title: 'Lista desideri',
            icon: 'check-circle',
            colorText: '#000',
            colorTextFocus: '#607D8B',
            colorIcon: '#c1c1c1',
            colorIconFocus: '#607D8B',
            background: 'transparent',
            backgroundFocus: '#e8e8e8',
          },
          {
            type: 'menu',
            name: 'opt12',
            title: 'Play Protect',
            icon: 'verified-user',
            colorText: '#000',
            colorTextFocus: '#607D8B',
            colorIcon: '#c1c1c1',
            colorIconFocus: '#607D8B',
            background: 'transparent',
            backgroundFocus: '#e8e8e8',
          },
          {
            type: 'menu',
            name: 'opt13',
            title: 'Impostazioni',
            icon: 'settings',
            colorText: '#000',
            colorTextFocus: '#607D8B',
            colorIcon: '#c1c1c1',
            colorIconFocus: '#607D8B',
            background: 'transparent',
            backgroundFocus: '#e8e8e8',
          },
          {
            type: 'menu',
            name: 'opt14',
            title: 'Close Drawer',
            icon: 'exit-to-app',
            colorText: '#000',
            colorTextFocus: '#607D8B',
            colorIcon: '#c1c1c1',
            colorIconFocus: '#607D8B',
            background: 'transparent',
            backgroundFocus: '#e8e8e8',
            close: true
          },
        ]}
        onPress={e => {
          this.setState({ menu: e.title });
          var type = e.name == 'opt2' ? 'simple' : '';
          this.setState({ type });
          alert("Title:" + e.title + " - " + "Name:" + e.name);
          console.log('Menu:', e);
          console.log("ajjaja", e.title)
          if (e.title != null) {
            var a = e.title
            this.props.navigation.navigate(a)

          } else {
            console.log("Empty")
          }
        } }>
      </NavigationDrawerLayout>
    );
  }
}

const styles = StyleSheet.create({});

