import { useState } from "react";
import AppRoutes from "./Routes/AppRoutes";
import { Provider } from "react-redux";
import store from "./App/store";
function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
   
    </Provider>
  );
}

export default App;
