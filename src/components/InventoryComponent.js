import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView, Image, ActivityIndicator, Alert, FlatList } from 'react-native';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Card, CardItem } from "native-base";
import { List, ListItem, SearchBar } from 'react-native-elements';
import SideBar from "../SideBar/SideBar.js";
import { DrawerActions } from 'react-navigation';
import { Fab } from 'native-base';



export default class InventoryComponent extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            data: [],
            active: 'true'
        }
    }

    componentDidMount() {
        this.props.callService()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.data != null) {
            // console.log('the state', nextProps.data.data)
            // console.log("Header", nextProps.data.headers)
            this.setState({
                // data: this.state.dataSource.cloneWithRows(nextProps.data)
                data: nextProps.data.data

            });
        } else if (nextProps.error != undefined) {
            console.log("Error ", nextProps.error)

        }

        // if (nextProps.error != undefined) {
        //     Alert.alert(
        //         'Error',
        //         nextProps.error,
        //         [
        //             { text: 'Do you want to reload', onPress: () => this.props.callService() },
        //         ],
        //         { cancelable: false })
        // }
    }

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: "#2f4050" }}>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.openDrawer()}

                            >
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Inventories</Title>

                    </Body>
                    <Right />
                </Header>

                <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
                    <FlatList
                        data={this.state.data}
                        renderItem={({ item }) => (
                            <ListItem onPress={() => {
                                this.props.navigation.navigate('Profile', {
                                    itemId: itemIdem.id,
                                    companyName: item.name

                                });
                            } }
                                roundAvatar
                                title={`${item.id} ${item.name}`}
                                subtitle={this.state.token}
                                avatar={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
                                />
                        )}
                        keyExtractor={item => item.name}
                        ItemSeparatorComponent={this.renderSeparator}
                        />
                </List>

                        <Fab
                            direction="up"
                            containerStyle  ={{}}
                            style={{ backgroundColor: "#479ae8" }}
                            position="bottomRight"
                            onPress={() => {
                                this.props.navigation.navigate('CustomerForm')
                            } }

                            >
                            <Icon name="add" />
                        </Fab>
    



                <Content padder>

                </Content>

            </Container>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    containerList: {
        flex: 1,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: 12,
        fontSize: 16,
    },
    photo: {
        height: 80,
        width: 80,
        borderRadius: 20,
        backgroundColor: '#000000'
    },

    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,

    },
});


//  <Button full rounded primary
//                         style={{ marginTop: 10 }}
//                         onPress={() => { this.props.logout() } }>
//                         <Text>logout</Text>
//                     </Button>