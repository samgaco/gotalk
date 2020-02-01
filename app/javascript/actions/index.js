const Actions = (() => {
  const CHANGE_FILTER = 'CHANGE_FILTER';
  const CHANGE_FILTER_RATE = 'CHANGE_FILTER_RATE';


  const changeFilter = filter => ({
    type: CHANGE_FILTER,
    filter,
  });


  const changeRateFilter = filter => ({
    type: CHANGE_FILTER_RATE,
    filterRate: filter,
  });

  return { changeFilter, changeRateFilter };
})();

export default Actions;
