const initialState = {
  items: {},
  historySearch: [],
  isLoaded: false,
};

const itemsList = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ITEMS':
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };

    case 'SET_HISTORY':
      return {
        ...state,
        historySearch: action.payload,
        isLoaded: true,
      };

    default:
      return state;
  }
};

export default itemsList;
