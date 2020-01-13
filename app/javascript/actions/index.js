const Actions = (() => {

    const CHANGE_FILTER = 'CHANGE_FILTER';
  
    const changeFilter = filter => ({
      type: CHANGE_FILTER,
      filter,
    });
  
    return { changeFilter };
  })();
  
  export default Actions;