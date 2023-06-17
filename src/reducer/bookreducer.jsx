/* eslint-disable no-case-declarations */
const bookreducer = (state, action) => {
  switch (action.type) {
    case "move":
      // eslint-disable-next-line no-case-declarations
      const bookSelected = state.find(({ id }) => id === action.payload.bookId);

      let tempState = state;
      tempState = tempState.filter(({ id }) => id !== action.payload.bookId);

      return [
        ...tempState,
        {
          ...bookSelected,
          currentlyReading: "currentlyReading" === action.payload.value,
          wantToRead: "wantToRead" === action.payload.value,
          read: "read" === action.payload.value,
          none: "none" === action.payload.value,
        },
      ];

    default:
      break;
  }
};

export { bookreducer };
