import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Vans from "./pages/Vans/Vans";
import "../server";
import VanDetails from "./pages/Vans/VanDetails";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import VansHost from "./pages/Host/VansHost";
import VanHostDetails from "./pages/Host/VanHostDetails";
import VanHostInfo from "./pages/Host/VanHostInfo";
import VanHostPhotos from "./pages/Host/VanHostPhotos";
import VanHostPricing from "./pages/Host/VanHostPricing";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetails />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<VansHost />} />
            <Route path="vans/:id" element={<VanHostDetails />} >
              <Route index element={<VanHostInfo/>} />
              <Route path="pricing" element={<VanHostPricing />} />
              <Route path="photos" element={<VanHostPhotos />} />

            </Route>
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
