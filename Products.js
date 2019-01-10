import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { TextInput, Button, Title, Checkbox, Chip } from 'react-native-paper';
//import { addPlace } from './place';
//import { listRepos } from './reducer';
class Products extends Component {
  static navigationOptions = {
    title: 'Products',
    header: null
  };
  state = {}
  componentDidMount() {
   // this.props.add('user,pass')

    //this.props.dispatch({type:'INC'})
    // this.props.listRepos.dispatch("GET_REPOS")
  }
  static getDerivedStateFromProps(nextProps, prevState) {

    if (nextProps !== prevState) {
      // alert(JSON.stringify(nextProps))

      return { someState: nextProps };
    }
    else return null;
  }
  /** 
   componentWillReceiveProps(nextProps) {
     debugger;
     const k = nextProps;
     alert(JSON.stringify(nextProps))
   }
   */
  authapi() {
   // this.props.add('user,pass')
    this.props.dispatch(
      {
        type: 'baglan',
        payload: "testestesf"
      })
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
        <Text style={{ fontWeight: '900', color: '#888', fontSize: 30, marginBottom: 40, marginTop: 50 }}>Mağaza</Text>

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
          type: 'get_products',
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
export default connect(mapStateToProps)(Products)