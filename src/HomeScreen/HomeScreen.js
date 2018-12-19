import React from "react";
import { StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Fab,
  Right
} from "native-base";

export default class HomeScreen extends React.Component {
  render() {
    return (
      
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
              >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Screen</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Test</Text>
              </Body>
            </CardItem>
          </Card>
          <Button
            full
            rounded
            dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Chat")}
            >
            <Text>Test</Text>
          </Button>
          <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={ () =>  this.props.navigation.navigate("ProfileScddsfsdreen")}
            >
            <Text>Testtssss</Text>
          </Button>
          <Fab
            direction="up"
            containerStyle={{}}
            style={{ backgroundColor: "#479ae8" }}
            position="bottomRight"
            onPress={ () =>  this.props.navigation.navigate("ProfileSasdasreen")}

            >
            <Icon name="add" />
          </Fab>

        </Content>
      </Container>
    );
  }
}
