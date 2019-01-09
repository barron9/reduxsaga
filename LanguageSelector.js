import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { TextInput, Button, Title, Checkbox, Chip } from 'react-native-paper';
import { addPlace } from './place';

//import { listRepos } from './reducer';

class LanguageSelector extends Component {
    static navigationOptions = {
        title: 'lang',
        header: null
    };
    state = {}
    constructor(props) {
        super(props);
        const lang = [
            { shortform: 'tr', longform: 'Türkçe' },

            { shortform: 'en', longform: 'English' },
            { shortform: 'fr', longform: 'French' },

        ];
        global.lang = lang;
    }
    componentDidMount() {
        //this.props.dispatch({type:'INC'})

        // this.props.listRepos.dispatch("GET_REPOS")
    }
    authapi() {
        this.props.navigation.navigate('Home')
       // this.props.add('baglanma denemesi')
        //alert(JSON.stringify(this.props))
    }
    render() {
        const { repos } = this.props;
        return (

            <View style={styles.container}>
                <StatusBar
                    backgroundColor="white"
                    barStyle="dark-content"
                />
                <Text style={{ fontWeight: '900', color: '#888', fontSize: 20, marginBottom: 40, marginTop: 50 }}>Please Select</Text>

                <FlatList
                    data={lang}
                    renderItem={({ item }) => 
                        <Text style={{ fontWeight: '100', color: '#888', margin: 10, fontSize: 16 }}>{item.longform}</Text>
                    }
                />
                <Button mode="contained" onPress={() => this.authapi()} style={{ margin: 10 }}
                >
                    Continue
</Button>
                <Chip onPress={() => console.log('Pressed')} style={{ fontSize: 8, color: 'gray', alignItems: 'center', position: 'absolute', bottom: 5 }}>rnavigation-redux-saga </Chip>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 20,
        flex: 1
    },
    item: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    }
});




const mapStateToProps = state => {
    return {
        places: state.places.places
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: (name) => {
            dispatch(addPlace(name))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelector)