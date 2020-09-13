import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./pages/Sidebar";
import Feed from "./pages/Feed";
import Widgets from "./pages/Widgets";
import Login from "./components/Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          {/* Header */}
          <Header />

          {/* App Body */}
          <div className="app__body">
            {/* Sidebar */}
            <Sidebar />
            {/* Feed */}
            <Feed />
            {/* Widgets */}
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
