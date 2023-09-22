import { Route, Routes } from "react-router-dom";
import Home from "./components/router/home/home.component";
import SignIn from "./components/router/sign-in/sign-in.component";
import Navigation from "./components/router/navigation/navigation.component";
const Shop = () => {
  return (
    <h1>Shop Page </h1>
  )
}


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  )
}
export default App;
