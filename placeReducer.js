// placeReducer.js


const initialState = {
  placeName: '',
  places: []
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
    default:
      return state;
  }
}

export default placeReducer;