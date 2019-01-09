import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { TextInput, Button, Title, Checkbox, Chip } from 'react-native-paper';
//import { addPlace } from './place';
//import { listRepos } from './reducer';
class Login extends Component {
  static navigationOptions = {
    title: 'Details',
    header: null
  };
  state = {}
  componentDidMount() {
    //this.props.dispatch({type:'INC'})
    // this.props.listRepos.dispatch("GET_REPOS")
  }
  componentWillReceiveProps(nextProps) {
    debugger;
    const k = nextProps;
    alert(JSON.stringify(nextProps))
  }
  authapi() {
    this.props.add('user,pass')
    //alert(JSON.stringify(this.props))
    //this.props.navigation.navigate('LanguageSelector')
  }
  render() {
    const { repos } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="white"
          barStyle="dark-content"
        />
        <Text style={{ fontWeight: '900', color: '#888', fontSize: 40, marginBottom: 40, marginTop: 50 }}>Hoşgeldiniz</Text>
        <TextInput
          style={{ backgroundColor: 'white' }}
          label='Eposta'
          value={this.state.user}
          onChangeText={(user) => this.setState({ user })}
        />
        <TextInput style={{ marginTop: 10, backgroundColor: 'white' }}
          label='Şifre'
          value={this.state.pass}
          onChangeText={(pass) => this.setState({ pass })}
          secureTextEntry
        />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}><Checkbox
          status={this.state.checked ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ checked: !this.state.checked }); }}
        /><Text>Beni hatırla</Text></View>
        <Button mode="contained" onPress={() => this.authapi()} style={{ margin: 10 }}
        >
          GİRİŞ YAP
        </Button>
        <Chip onPress={() => console.log('Pressed')} style={{ fontSize: 8, color: 'gray', alignItems: 'center', position: 'absolute', bottom: 5 }}>rnavigation-redux-saga </Chip>
      </View>
    );
  }
}



const mapStateToProps = state => {
  return {
    places: state

  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: (name) => {
      //dispatch(addPlace(name))
      dispatch(
        {
          type: 'baglan',
          payload: name
        }
      )
    }
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    flex: 1
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Login)