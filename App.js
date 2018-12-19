import * as React from 'react';
import { StyleSheet, View, Text, ToastAndroid, AppRegistry } from 'react-native';
import NavigationDrawerLayout from './src/NavigationDrawerLayout/NavigationDrawerLayout';

import Homepage from './src/HomeScreen/HomeScreen';
import HomeScreen from './src/HomeScreen/index';
import Company from './src/scenes/Company';
import Customer from './src/components/index';
import Employee from './src/scenes/Employee';
import Inventory from './src/scenes/Inventory';
import ProfileScreen from './src/ProfileScreen/index';



export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            menu: {
                name: 'opt0',
                title: 'Data Test',
            },
            type: '',
        };
    }


    componentDidMount() {
        this.drawer.closeDrawer();

    }



    openDrawer = () => {
        this.drawer.openDrawer();
    };

    closeDrawer() {
        this.drawer.closeDrawer();
    }

    changeComponent = name => {
        switch (name) {
            case 'opt0':
                return <HomeScreen menu={this.state.menu} openDrawer={this.openDrawer} />;
            case 'opt1':
                return <Company menu={this.state.menu} />;
            case 'customer':
                return <Customer menu={this.state.menu} />;
            case 'employee':
                return <Employee menu={this.state.menu} />;
            case 'inventory':
                return <Inventory menu={this.state.menu} />;
            default:
                return <Homepage menu={this.state.menu} />;
        }
    };

    render() {
        return (
            <NavigationDrawerLayout
                ref={_drawer => (this.drawer = _drawer)}
                percent={75}
                // statusBar="#008cff"
                // statusBarTransparency={0.3}
                type={this.state.type}
                drawerPosition="left"
                selected={this.state.menu.name}
                window="menu"
                color="#fff"
                backgroundColor="#fff" //303030
                imageBackground="https://c.wallhere.com/photos/aa/44/glare_colorful_bright_circles-679384.jpg!d"
                first={'username'}
                second={'joined'}
                account={[
                    {
                        username: 'jelordreygulle@gmail.com',
                        name: 'Jelord Rey Gulle',
                        email: 'jelordreygulle@gmail.com',
                        image:
                        'https://cdn1.iconfinder.com/data/icons/avatar-2-2/512/Casual_Man_2-512.png',
                        joined: 'YBO',
                        badgeText: '100',
                        badgeColor: '#fff',
                        badgeBackground: '#303030',
                        circle: ['transparent', 'transparent'],
                    },
                    {
                        username: 'jelordreygulle@gmail.com',
                        name: 'Jelord Rey Gulle',
                        email: 'jelordreygulle@gmail.com',
                        badgeText: '100',
                        badgeColor: '#fff',
                        badgeBackground: '#303030',
                        circle: ['#fff000', 'transparent', '#00ffd0'],
                    },
                    {
                        name: 'Jelord Rey',
                        email: 'jelordreygulle@gmail.com',
                        image:
                        'https://cdn1.iconfinder.com/data/icons/avatar-2-2/512/Casual_Man_3-512.png',
                        badgeText: '21',
                        badgeColor: '#fff',
                        badgeBackground: '#25dbd2',
                        joined: 'Joined at Jun 31, 2021',
                        circle: ['transparent', 'transparent'],
                    },
                    {
                        name: 'Lord Jey',
                        email: 'jelordreygulle@gmail.com',
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
                        name: 'opt3',
                        title: 'Home page',
                        icon: 'home',
                        colorText: '#000',
                        colorTextFocus: '#4CAF50',
                        colorIcon: '#4CAF50',
                        colorIconFocus: '#4CAF50',
                        background: 'transparent',
                        backgroundFocus: '#e8e8e8',
                    },
                    {
                        type: 'menu',
                        name: 'opt1',
                        title: 'Notifications',
                        icon: 'add-alert',
                        colorText: '#000',
                        colorTextFocus: '#607D8B',
                        colorIcon: '#c1c1c1',
                        colorIconFocus: '#607D8B',
                        background: 'transparent',
                        backgroundFocus: '#e8e8e8',
                        badgeText: '31+',
                    },
                    {
                        type: 'menu',
                        name: 'opt2',
                        title: 'Quick Add Menu',
                        icon: 'menu',
                        colorText: '#000',
                        colorTextFocus: '#607D8B',
                        colorIcon: '#c1c1c1',
                        colorIconFocus: '#607D8B',
                        background: 'transparent',
                        backgroundFocus: '#e8e8e8',
                    },
                    { type: 'divider' },
                    {
                        type: 'title',
                        title: 'List',
                        colorText: '#000',
                    },

                    {
                        type: 'menu',
                        name: 'customer',
                        title: 'Customer',
                        icon: 'person',
                        colorText: '#000',
                        colorTextFocus: '#607D8B',
                        colorIcon: '#c1c1c1',
                        colorIconFocus: '#607D8B',
                        background: 'transparent',
                        backgroundFocus: '#e8e8e8',
                        badgeText: '50+',
                    },
                    {
                        type: 'menu',
                        name: 'employee',
                        title: 'Employee',
                        icon: 'people',
                        colorText: '#000',
                        colorTextFocus: '#607D8B',
                        colorIcon: '#c1c1c1',
                        colorIconFocus: '#607D8B',
                        background: 'transparent',
                        backgroundFocus: '#e 8e8e8',

                    },
                    {
                        type: 'menu',
                        name: 'supplier',
                        title: 'Supplier',
                        icon: 'local-shipping',
                        colorText: '#000',
                        colorTextFocus: '#607D8B',
                        colorIcon: '#c1c1c1',
                        colorIconFocus: '#607D8B',
                        background: 'transparent',
                        backgroundFocus: '#e8e8e8',

                    },
                    {
                        type: 'menu',
                        name: 'inventory',
                        title: 'Inventory',
                        icon: 'people',
                        colorText: '#000',
                        colorTextFocus: '#607D8B',
                        colorIcon: '#c1c1c1',
                        colorIconFocus: '#607D8B',
                        background: 'transparent',
                        backgroundFocus: '#e 8e8e8',

                    },
                    {
                        type: 'menu',
                        name: 'opt1',
                        title: 'Branch',
                        icon: 'add-circle',
                        colorText: '#000',
                        colorTextFocus: '#607D8B',
                        colorIcon: '#c1c1c1',
                        colorIconFocus: '#607D8B',
                        background: 'transparent',
                        backgroundFocus: '#e8e8e8',
                    },
                    //   {
                    //     type: 'collapse',
                    //     name: 'opt4',
                    //     title: 'Film',
                    //     iconCollapsingName: 'local-movies',
                    //     iconColor: '#ccc',
                    //     colorText: '#000',
                    //     colorTextFocus: '#4CAF50',
                    //     colorIcon: '#f44336',
                    //     colorIconFocus: '#f44336',
                    //     background: 'transparent',
                    //     backgroundFocus: '#e8e8e8',
                    //     menu: [
                    //       {
                    //         name: 'sub0',
                    //         title: "Apri l'app Film",
                    //         icon: 'film',
                    //         colorText: '#000',
                    //         colorTextFocus: '#f44336',
                    //         colorIcon: '#f44336',
                    //         colorIconFocus: '#f44336',
                    //         background: 'transparent',
                    //         backgroundFocus: '#e8e8e8',
                    //       },
                    //     ],
                    //   },
                    //   {
                    //     type: 'collapse',
                    //     name: 'opt4',
                    //     title: 'Libri',
                    //     showOnStart: true,
                    //     rippleColor: '#000',
                    //     backgroundBarNormal: '#545a63',
                    //     backgroundBarFocus: '#22252A',
                    //     iconBarNameNormal: 'book',
                    //     iconBarNameFocus: 'book',
                    //     iconBarColorNormal: '#1194ff',
                    //     iconBarColorFocus: '#ffb600',
                    //     textBarColorNormal: '#1194ff',
                    //     textBarColorFocus: '#ffb600',
                    //     animateIconColorNormal: '#1194ff',
                    //     animateIconColorFocus: '#ffb600',
                    //     iconColor: '#ccc',
                    //     colorText: '#000',
                    //     colorTextFocus: '#4CAF50',
                    //     colorIcon: '#f44336',
                    //     colorIconFocus: '#f44336',
                    //     background: 'transparent',
                    //     badgeText: '100',
                    //     badgeColor: '#fff',
                    //     badgeBackground: '#1194ff',
                    //     badgeRadius: 4,
                    //     badgeStyle: {},
                    //     menu: [
                    //       {
                    //         name: 'sub1',
                    //         title: "Apri l'app Libri",
                    //         icon: 'book',
                    //         colorText: '#000',
                    //         colorTextFocus: '#2196F3',
                    //         colorIcon: '#2196F3',
                    //         colorIconFocus: '#2196F3',
                    //         background: 'transparent',
                    //         backgroundFocus: '#e8e8e8',
                    //         badgeText: '100',
                    //         badgeColor: '#fff',
                    //         badgeBackground: '#1194ff',
                    //         badgeRadius: 4,
                    //         close: false,
                    //       },
                    //     ],
                    //   },
                    { type: 'divider' },
                    {
                        type: 'title',
                        title: 'Transactions',
                        colorText: '#000',
                    },
                    {
                        type: 'menu',
                        name: 'opt9',
                        title: 'Sell',
                        icon: 'money-off',
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
                        title: 'Collect',
                        icon: 'attach-money',
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
                        title: 'Purchase',
                        icon: 'shopping-cart',
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
                        title: 'Pay',
                        icon: 'payment',
                        colorText: '#000',
                        colorTextFocus: '#607D8B',
                        colorIcon: '#c1c1c1',
                        colorIconFocus: '#607D8B',
                        background: 'transparent',
                        backgroundFocus: '#e8e8e8',
                    },
                    { type: 'divider' },
                    {
                        type: 'title',
                        title: 'Reports',
                        colorText: '#000',
                    },
                    {
                        type: 'menu',
                        name: 'opt13',
                        title: 'Financial Reports',
                        icon: 'graphic-eq',
                        colorText: '#000',
                        colorTextFocus: '#607D8B',
                        colorIcon: '#c1c1c1',
                        colorIconFocus: '#607D8B',
                        background: 'transparent',
                        backgroundFocus: '#e8e8e8',
                    },
                    { type: 'divider' },
                    {
                        type: 'title',
                        title: 'Miscellaneous',
                        colorText: '#000',
                    },
                    {
                        type: 'menu',
                        name: 'opt14',
                        title: 'Accounts',
                        icon: 'exit-to-app',
                        colorText: '#000',
                        colorTextFocus: '#607D8B',
                        colorIcon: '#c1c1c1',
                        colorIconFocus: '#607D8B',
                        background: 'transparent',
                        backgroundFocus: '#e8e8e8',
                        close: true,
                    },
                    { type: 'divider' },
                    {
                        type: 'title',
                        title: 'Settings',
                        colorText: '#000',
                    },
                    {
                        type: 'menu',
                        name: 'opt14',
                        title: 'Sync',
                        icon: 'cloud-upload',
                        colorText: '#000',
                        colorTextFocus: '#607D8B',
                        colorIcon: '#c1c1c1',
                        colorIconFocus: '#607D8B',
                        background: 'transparent',
                        backgroundFocus: '#e8e8e8',
                        close: true,
                    },
                    {
                        type: 'menu',
                        name: 'opt14',
                        title: 'Settings',
                        icon: 'settings',
                        colorText: '#000',
                        colorTextFocus: '#607D8B',
                        colorIcon: '#c1c1c1',
                        colorIconFocus: '#607D8B',
                        background: 'transparent',
                        backgroundFocus: '#e8e8e8',
                        close: true,
                    },
                    {
                        type: 'menu',
                        name: 'opt14',
                        title: 'Miscellaneous',
                        icon: 'offline-pin',
                        colorText: '#000',
                        colorTextFocus: '#607D8B',
                        colorIcon: '#c1c1c1',
                        colorIconFocus: '#607D8B',
                        background: 'transparent',
                        backgroundFocus: '#e8e8e8',
                        close: true,
                    },
                ]}
                onPress={e => {
                    ToastAndroid.show(
                        'Title: ' + e.title + ' * ' + 'Name: ' + e.name,
                        ToastAndroid.SHORT
                    );
                    console.log('Menu:', e)
                    var type = e.name == 'opt3' ? 'simple' : '';
                    this.setState({ menu: e, type });
                    if (e.title != null) {
                        this.drawer.closeDrawer()
                        console.log("Okay")

                    } else {
                        console.log("Not")
                    }
                } }>
                <View
                    style={{
                        flex: 1,
                        marginTop: 25,
                        //alignItems: 'flex-end',
                    }}>
                    {this.changeComponent(this.state.menu.name)}
                </View>
               
            </NavigationDrawerLayout>


        );
    }
}

const styles = StyleSheet.create({});





// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// export default class App extends Component<{}> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit App.js
//         </Text>
//         <Text style={styles.instructions}>
//           {instructions}
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
