import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import Register from "./components/register";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
    </Routes>
  );
}
