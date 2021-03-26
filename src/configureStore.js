import { createStore } from "redux";
import rootReducer from "./reducers";
// import rootReducer from "./rootReducer";

export default createStore(rootReducer);
