const filterReducer = (state, action) => {
    const { type, filter } = action;
    switch (type) {
      case 'CHANGE_FILTER':
        return filter;
      default:
        return state || '';
    }
  };
  
  export default filterReducer;
  