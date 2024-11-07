import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home/Home";
import RestaurantDetails from "../Components/Restaurant/RestaurantDetails";
import Cart from "../Components/Cart/Cart";
import Profil from "../Components/Profil/Profil";
import UserProfil from "../Components/Profil/UserProfil";
import Orders from "../Components/Profil/Orders";
import Adress from "../Components/Profil/Adress";
import Favorites from "../Components/Profil/Favorites";
import Events from "../Components/Profil/Events";
import Payement from "../Components/Profil/Payement";
import Notification from "../Components/Profil/Notification";
import Auth from "../Components/Auth/Auth";

const CustomerRouter = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account/:register" element={<Home />} />
        <Route
          path="/restaurant/:city/:title/:id"
          element={<RestaurantDetails />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/my-profile/*" element={<Profil />}>
          <Route index element={<UserProfil />} />
          <Route path="orders" element={<Orders />} />
          <Route path="address" element={<Adress />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="events" element={<Events />} />
          <Route path="payement" element={<Payement />} />
          <Route path="notification" element={<Notification />} />
        </Route>
      </Routes>
      <Auth />
    </div>
  );
};

export default CustomerRouter;
