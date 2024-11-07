import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import darkMode from "./Components/Themes/Themes";
import RestaurantDetails from "./Components/Restaurant/RestaurantDetails";
import Cart from "./Components/Cart/Cart";
import Profil from "./Components/Profil/Profil";
import CustomerRouter from "./Router/CustomerRouter";
import Squelette from "./Components/Squelette/Squelette";
// import Home from "./Components/Home/Home";
function App() {
  return (
    <ThemeProvider theme={darkMode}>
      <CssBaseline />
      {/* <Navbar /> */}
      {/* <Home /> */}
      {/* <RestaurantDetails /> */}
      {/* <Cart /> */}
      {/* <Profil /> */}
      <CustomerRouter />
      {/* <Squelette /> */}
    </ThemeProvider>
  );
}

export default App;
