const initialState = {
  bodyPart: 'All',
};

export default function bodyPartReducer(state = initialState, action) {
  switch (action.type) {

    case "SELECT-BODYPART": {
      return {
        ...state,
        "bodyPart": action.option ,
      };
    }

    default: {
      return state;
    }
  }
}

export const getBodyPart = (state) => state.bodyPart.bodyPart;