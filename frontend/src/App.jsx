import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route path="/tasks" element={<Tasks />} />

          <Route
            path="/settings"
            element={<Settings />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}