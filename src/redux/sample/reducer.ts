import { IDoAction } from './actions';
import { DO_ACTION } from './types';

const initialState = {};

const reducer = (state = initialState, action: IDoAction) => {
  switch (action.type) {
    case DO_ACTION:
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
