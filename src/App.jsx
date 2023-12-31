import { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  redirect,
} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans";
import "../server";
import VanDetails, { loader as vanDetailLoader } from "./pages/Vans/VanDetails";
import Layout from "./components/Layout";
import Dashboard, { loader as dashboardLoader } from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import VansHost, { loader as vanHostLoader } from "./pages/Host/VansHost";
import VanHostDetails, { loader as vanHostDetailsLoader } from "./pages/Host/VanHostDetails";
import VanHostInfo from "./pages/Host/VanHostInfo";
import VanHostPhotos from "./pages/Host/VanHostPhotos";
import VanHostPricing from "./pages/Host/VanHostPricing";
import NotFound from "./pages/NotFound";
import Error from "./components/Error";
import Login, { loader as loginLoader, action as loginAction } from "./pages/Login";
import { requireAuth } from "../utils";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route 
      path="login" 
      element={<Login />} 
      loader={loginLoader}
      action={loginAction}
      />
      <Route
        path="vans"
        element={<Vans />}
        errorElement={<Error />}
        loader={vansLoader}
      />
      <Route
        path="vans/:id"
        element={<VanDetails />}
        errorElement={<Error />}
        loader={vanDetailLoader}
      />
      <Route path="host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={dashboardLoader}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async ({request}) =>  await requireAuth(request)}
        />
        <Route
          path="vans"
          element={<VansHost />}
          errorElement={<Error />}
          loader={vanHostLoader}
        />
        <Route path="vans/:id" 
        element={<VanHostDetails />}
        errorElement={<Error />}
        loader={vanHostDetailsLoader}
        >
          <Route
            index
            element={<VanHostInfo />}
            loader={async () => {
              return null;
            }}
          />
          <Route
            path="pricing"
            element={<VanHostPricing />}
            loader={async ({request}) =>  await requireAuth(request)}
          />
          <Route
            path="photos"
            element={<VanHostPhotos />}
            loader={async ({request}) =>  await requireAuth(request)}
          />
        </Route>
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async ({request}) =>  await requireAuth(request)}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
