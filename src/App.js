import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import './App.less';
import LayoutComponent from "./components/Layout";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <LayoutComponent />
      </Router>
    </Provider>
  );
}
