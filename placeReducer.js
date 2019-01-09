// placeReducer.js


const initialState = {
  placeName: '',
  places: [],
  news:[],
 
};

const placeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'baglan':
      return {
        ...state,
        places: state.places.concat({
          key: Math.random(),
          json: JSON.stringify(action)
        })
      };
      case 'received':
      return{
        ...state,
        news:state.news.concat({
          key: Math.random(),
          json: action.json
        })
      }
    default:
      return state;
  }
}

export default placeReducer;