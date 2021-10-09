import { cryptoReducer } from "./reducer";

const rootReducer = cryptoReducer;

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;