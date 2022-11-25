import store from '../Store';
import {
  AUTH, CLEAR_REDUX,
} from '../Store/types';

class ReduxDispatchController {

  static AUTHENTICATION = {
    setCurrentUser: user => {
      store.dispatch({
        type: AUTH.SET_CURRENT_USER,
        payload: user,
      });
    },
  };

  static ClearEverything = {
    clearing: clear => {
      store.dispatch({
        type: CLEAR_REDUX.CLEAR_REDUCER,
        payload: clear,
      });
    }
  }

}
export default ReduxDispatchController;
