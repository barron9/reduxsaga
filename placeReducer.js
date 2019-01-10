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
          json: action.type
        })
      };
      case 'received':
      return{
        ...state,
        news:state.news.concat({
          key: Math.random(),
          json: action.json
        })
      };
      case 'get_products':
      return{
        ...state,
        products:state.products.concat({
          key:Math.random(),
          json:action.json
        })
      };
      case 'receive_products':
      return{
        ...state,
        products:state.products.concat({
          key:Math.random(),
          json:action.json
        })
      };     
    default:
      return state;
  }
}

export default placeReducer;