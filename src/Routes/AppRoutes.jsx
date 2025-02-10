import { BrowserRouter as Router, Routes, Route } from "react-router";
import AuthLayout from "../components/Layouts/AuthLayout";
import Auth from "../Pages/Auth/Auth";
import AliTousi from "../Pages/AliTousi/AliTousi";
import DefaultLayout from "../components/Layouts/DefaultLayout";
import Landing from "../Pages/Landing/Landing";

const AppRoutes =()=>(

    <Router>
        <Routes>
            <Route element={<AuthLayout/>}>
            <Route path="/auth" element={<Auth/>}/>
            </Route>
            <Route path="/alitousi" element={<AliTousi/>}/>
        </Routes>
        <Routes>
            <Route element={<DefaultLayout/>}>
            <Route path="/landing" element={<Landing/>}/>
            </Route>
        </Routes>
    </Router>
)

export default AppRoutes