const initState = {
  economyList: [
    {
      id: '1',
      date: "2019-01-01",
      category: "food",
      description: "buy food",
      income: 100,
      expenses: 100,
      total: 100    
    },
    {
      id: '2',
      date: "2019-01-02",
      category: "food",
      description: "buy food",
      income: 100,
      expenses: 100,
      total: 100    
    },
    
  ]
}

const economyListReducer = (state = initState, action) => {
  // switch (action.type) {
  //   case 'CREATE_ECONOMY_LIST':
  //     console.log('created economy', action.economyList)
  // }

  return state
}

export default economyListReducer;