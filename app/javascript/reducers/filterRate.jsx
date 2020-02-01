const filterRateReducer = (state, action) => {
  const { type, filterRate } = action;
  switch (type) {
    case 'CHANGE_FILTER_RATE':
      return filterRate;
    default:
      return state || '';
  }
};

export default filterRateReducer;
