import React from "react";
import { AppRegistry, Alert, View, ScrollView } from "react-native";
import { Container, Header, Left, Body, Title, Card, CardItem, Content, Right, Icon, Button, Text } from "native-base";
import { createStackNavigator } from "react-navigation";
import { TextField } from 'react-native-material-textfield';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { RaisedTextButton } from 'react-native-material-buttons';

let styles = {
    scroll: {
        backgroundColor: '#E8EAF6',
    },

    container: {
        margin: 8,
        marginTop: 24,
    },

    contentContainer: {
        padding: 8,
    },
};

class CustomerFormComponent extends React.Component {
    constructor(props) {
        super(props);

        this.onFocus = this.onFocus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.onSubmitFirstName = this.onSubmitFirstName.bind(this);
        this.onSubmitLastName = this.onSubmitLastName.bind(this);
        this.onSubmitAbout = this.onSubmitAbout.bind(this);
        this.onSubmitEmail = this.onSubmitEmail.bind(this);
        this.onSubmitPassword = this.onSubmitPassword.bind(this);
        this.onAccessoryPress = this.onAccessoryPress.bind(this);

        this.firstnameRef = this.updateRef.bind(this, 'firstname');
        this.lastnameRef = this.updateRef.bind(this, 'lastname');
        this.aboutRef = this.updateRef.bind(this, 'about');
        this.emailRef = this.updateRef.bind(this, 'email');
        this.passwordRef = this.updateRef.bind(this, 'password');

        this.renderPasswordAccessory = this.renderPasswordAccessory.bind(this);

        this.state = {
            firstname: 'Jelord Test',
            lastname: 'Gulle',
            about: 'Test@contact.test',
            code: 'Walk-in',
            dummy: '',
            secureTextEntry: true,
        };
    }

    static navigationOptions = ({ navigation }) => ({
        header: (
            <Header>
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                    <Title>EditScreenOne</Title>
                </Body>
                <Right />
            </Header>
        )
    });


    onFocus() {
        let { errors = {} } = this.state;

        for (let name in errors) {
            let ref = this[name];

            if (ref && ref.isFocused()) {
                delete errors[name];
            }
        }

        this.setState({ errors });
    }

    onChangeText(text) {
        ['firstname', 'lastname', 'about', 'email', 'password']
            .map((name) => ({ name, ref: this[name] }))
            .forEach(({ name, ref }) => {
                if (ref.isFocused()) {
                    this.setState({ [name]: text });
                }
            });
    }

    onAccessoryPress() {
        this.setState(({ secureTextEntry }) => ({ secureTextEntry: !secureTextEntry }));
    }

    onSubmitFirstName() {
        this.lastname.focus();
    }

    onSubmitLastName() {
        this.about.focus();
    }

    onSubmitAbout() {
        this.email.focus();
    }

    onSubmitEmail() {
        this.password.focus();
    }

    onSubmitPassword() {
        this.password.blur();
    }

    onSubmit() {
        let errors = {};

        ['firstname', 'lastname', 'email', 'password']
            .forEach((name) => {
                let value = this[name].value();

                if (!value) {
                    errors[name] = 'Should not be empty';
                } else {
                    if ('password' === name && value.length < 6) {
                        errors[name] = 'Too short';
                    }
                }
            });

        this.setState({ errors });
    }

    updateRef(name, ref) {
        this[name] = ref;
    }

    renderPasswordAccessory() {
        let { secureTextEntry } = this.state;

        let name = secureTextEntry ?
            'visibility' :
            'visibility-off';

        return (
            <MaterialIcon
                size={24}
                name={name}
                color={TextField.defaultProps.baseColor}
                onPress={this.onAccessoryPress}
                suppressHighlighting
                />
        );
    }



    render() {

        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const companyName = navigation.getParam('companyName', 'default');

        let { errors = {}, secureTextEntry, ...data } = this.state;
        let { firstname = 'name', lastname = 'house' } = data;

        let defaultEmail = `${firstname}@${lastname}.com`
            .replace(/\s+/g, '_')
            .toLowerCase();

        return (
            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.contentContainer}
                keyboardShouldPersistTaps='handled'
                >



                <View style={styles.container}>
                    <Text>itemId: {JSON.stringify(itemId)}</Text>
                    <TextField
                        ref={this.firstnameRef}
                        value={companyName}
                        autoCorrect={false}
                        enablesReturnKeyAutomatically={true}
                        onFocus={this.onFocus}
                        onChangeText={this.onChangeText}
                        onSubmitEditing={this.onSubmitFirstName}
                        returnKeyType='next'
                        label='Company'
                        error={errors.firstname}
                        />

                    <TextField
                        ref={this.firstnameRef}
                        value={data.code}
                        autoCorrect={false}
                        enablesReturnKeyAutomatically={true}
                        onFocus={this.onFocus}
                        onChangeText={this.onChangeText}
                        onSubmitEditing={this.onSubmitFirstName}
                        returnKeyType='next'
                        label='Code'
                        error={errors.firstname}
                        />

                    <TextField
                        ref={this.firstnameRef}
                        value={data.firstname}
                        autoCorrect={false}
                        enablesReturnKeyAutomatically={true}
                        onFocus={this.onFocus}
                        onChangeText={this.onChangeText}
                        onSubmitEditing={this.onSubmitFirstName}
                        returnKeyType='next'
                        label='First Name'
                        error={errors.firstname}
                        />

                    <TextField
                        ref={this.lastnameRef}
                        value={data.lastname}
                        autoCorrect={false}
                        enablesReturnKeyAutomatically={true}
                        onFocus={this.onFocus}
                        onChangeText={this.onChangeText}
                        onSubmitEditing={this.onSubmitLastName}
                        returnKeyType='next'
                        label='Last Name'
                        error={errors.lastname}
                        />

                    <TextField
                        ref={this.aboutRef}
                        value={data.about}
                        onFocus={this.onFocus}
                        onChangeText={this.onChangeText}
                        onSubmitEditing={this.onSubmitAbout}
                        returnKeyType='next'
                        multiline={true}
                        blurOnSubmit={true}
                        label='Contact Person (optional)'
                        characterRestriction={140}
                        />

                    <TextField
                        ref={this.firstnameRef}
                        value={data.dummy}
                        autoCorrect={false}
                        enablesReturnKeyAutomatically={true}
                        onFocus={this.onFocus}
                        onChangeText={this.onChangeText}
                        onSubmitEditing={this.onSubmitFirstName}
                        returnKeyType='next'
                        label='TIN'
                        error={errors.firstname}
                        />
                    <TextField
                        ref={this.firstnameRef}
                        value={data.dummy}
                        autoCorrect={false}
                        enablesReturnKeyAutomatically={true}
                        onFocus={this.onFocus}
                        onChangeText={this.onChangeText}
                        onSubmitEditing={this.onSubmitFirstName}
                        returnKeyType='next'
                        label='Unit#/Bldg/Subdivision'
                        error={errors.firstname}
                        />
                    <TextField
                        ref={this.firstnameRef}
                        value={data.dummy}
                        autoCorrect={false}
                        enablesReturnKeyAutomatically={true}
                        onFocus={this.onFocus}
                        onChangeText={this.onChangeText}
                        onSubmitEditing={this.onSubmitFirstName}
                        returnKeyType='next'
                        label='Street'
                        error={errors.firstname}
                        />
                    <TextField
                        ref={this.firstnameRef}
                        value={data.dummy}
                        autoCorrect={false}
                        enablesReturnKeyAutomatically={true}
                        onFocus={this.onFocus}
                        onChangeText={this.onChangeText}
                        onSubmitEditing={this.onSubmitFirstName}
                        returnKeyType='next'
                        label='Barangay'
                        error={errors.firstname}
                        />
                    <TextField
                        ref={this.firstnameRef}
                        value={data.dummy}
                        autoCorrect={false}
                        enablesReturnKeyAutomatically={true}
                        onFocus={this.onFocus}
                        onChangeText={this.onChangeText}
                        onSubmitEditing={this.onSubmitFirstName}
                        returnKeyType='next'
                        label='Municipality'
                        error={errors.firstname}
                        />
                    <TextField
                        ref={this.firstnameRef}
                        value={data.dummy}
                        autoCorrect={false}
                        enablesReturnKeyAutomatically={true}
                        onFocus={this.onFocus}
                        onChangeText={this.onChangeText}
                        onSubmitEditing={this.onSubmitFirstName}
                        returnKeyType='next'
                        label='Province'
                        error={errors.firstname}
                        />
                    <TextField
                        ref={this.firstnameRef}
                        value={data.dummy}
                        autoCorrect={false}
                        enablesReturnKeyAutomatically={true}
                        onFocus={this.onFocus}
                        onChangeText={this.onChangeText}
                        onSubmitEditing={this.onSubmitFirstName}
                        returnKeyType='next'
                        label='Zip-code'
                        error={errors.firstname}
                        />
                    <TextField
                        ref={this.firstnameRef}
                        value={data.dummy}
                        autoCorrect={false}
                        enablesReturnKeyAutomatically={true}
                        onFocus={this.onFocus}
                        onChangeText={this.onChangeText}
                        onSubmitEditing={this.onSubmitFirstName}
                        returnKeyType='next'
                        label='Phone'
                        error={errors.firstname}
                        />


                    <TextField
                        ref={this.emailRef}
                        value={data.email}
                        defaultValue={defaultEmail}
                        keyboardType='email-address'
                        autoCapitalize='none'
                        autoCorrect={false}
                        enablesReturnKeyAutomatically={true}
                        onFocus={this.onFocus}
                        onChangeText={this.onChangeText}
                        onSubmitEditing={this.onSubmitEmail}
                        returnKeyType='next'
                        label='Email Address'
                        error={errors.email}
                        />
                    <TextField
                        ref={this.firstnameRef}
                        value={data.dummy}
                        autoCorrect={false}
                        enablesReturnKeyAutomatically={true}
                        onFocus={this.onFocus}
                        onChangeText={this.onChangeText}
                        onSubmitEditing={this.onSubmitFirstName}
                        returnKeyType='next'
                        label='B-day'
                        error={errors.firstname}
                        />

                    <TextField
                        ref={this.firstnameRef}
                        value={data.dummy}
                        autoCorrect={false}
                        enablesReturnKeyAutomatically={true}
                        onFocus={this.onFocus}
                        onChangeText={this.onChangeText}
                        onSubmitEditing={this.onSubmitFirstName}
                        returnKeyType='next'
                        label='Notes'
                        error={errors.firstname}
                        />

                    <TextField
                        ref={this.passwordRef}
                        value={data.password}
                        secureTextEntry={secureTextEntry}
                        autoCapitalize='none'
                        autoCorrect={false}
                        enablesReturnKeyAutomatically={true}
                        clearTextOnFocus={true}
                        onFocus={this.onFocus}
                        onChangeText={this.onChangeText}
                        onSubmitEditing={this.onSubmitPassword}
                        returnKeyType='done'
                        label='Password'
                        error={errors.password}
                        title='Choose wisely'
                        maxLength={30}
                        characterRestriction={20}
                        renderAccessory={this.renderPasswordAccessory}
                        />


                </View>

                <View style={styles.container}>
                    <RaisedTextButton onPress={this.onSubmit} title='Save' color={TextField.defaultProps.tintColor} titleColor='white' />
                </View>
            </ScrollView>
        ); s
    }
}

//  <TextField
//                         value={data.lastname}
//                         label='House'
//                         title='Derived from last name'
//                         disabled={true}
//                         />

export default CustomerFormComponent;


CustomerFormComponent.navigationOptions = ({ navigation }) => ({
    header: (
        <Header style={{ backgroundColor: "#2f4050" }}>
            <Left>
                <Button transparent onPress={() => navigation.openDrawer("DrawerOpen")}>
                    <Icon name="menu" />
                </Button>
            </Left>
            <Body>
                <Title>Customers</Title>
            </Body>
            <Right />
        </Header>
    )
});