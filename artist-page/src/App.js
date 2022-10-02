import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Artist from "./pages/Artist";
import Album from "./pages/Album";
import FavSongs from "./pages/FavSongs";
import myAccount from "./pages/myAccount";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute user={true}>
            <LoginPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/favSongs"
        element={
          <ProtectedRoute user={true}>
            <FavSongs />
          </ProtectedRoute>
        }
      />
      <Route
        path="/myAccount"
        element={
          <ProtectedRoute user={true}>
            <myAccount />
          </ProtectedRoute>
        }
      />
      <Route
        path="/album"
        element={
          <ProtectedRoute user={true}>
            <Album />
          </ProtectedRoute>
        }
      />
      <Route
        path="/register"
        element={
          <ProtectedRoute user={true}>
            <Register />
          </ProtectedRoute>
        }
      />
      <Route
        path="/album"
        element={
          <ProtectedRoute user={true}>
            <Album />
          </ProtectedRoute>
        }
      />
      <Route
        path="/artist"
        element={
          <ProtectedRoute user={true}>
            <Artist />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;

// const ProtectedRoute = ({ user }) => {
//   if (!user) {
//     return <LoginPage />;
//   }
//   return <Artist />;
// };

const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};
