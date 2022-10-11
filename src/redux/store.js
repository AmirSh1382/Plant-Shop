// Redux
import { createStore } from "redux";

// RootReducer
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);

export default store;