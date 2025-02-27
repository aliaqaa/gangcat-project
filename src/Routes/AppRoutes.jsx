import { BrowserRouter as Router, Routes, Route } from "react-router";
import AuthLayout from "../components/Layouts/AuthLayout";
import Auth from "../Pages/Auth/Auth";
import AliTousi from "../Pages/AliTousi/AliTousi";
import DefaultLayout from "../components/Layouts/DefaultLayout";
import Landing from "../Pages/Landing/Landing";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Cats from "../Pages/Cats/Cats";

const AppRoutes =()=>(

    <Router>
        <Routes>
            <Route element={<AuthLayout/>}>
            <Route path="/" element={<Auth/>}/>
            </Route>
        </Routes>
        <Routes>
            <Route element={<DefaultLayout/>}>
            <Route path="/landing" element={<Landing/>}/>
            <Route path="/cats" element={<Cats/>}/>
            <Route path="/cats/:catName" element={<Cats/>}/>
            <Route path="/about-us" element={<AboutUs/>}/>
            <Route path="/alitousi" element={<AliTousi/>}/>
            </Route>
        </Routes>
    </Router>
)

export default AppRoutes