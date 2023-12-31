import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
} from "react-router-dom";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <nav className="bg-orange-600 py-4">
                    <ul className="flex justify-center text-lg">
                        <li className="mr-6">
                            <NavLink
                                end
                                to="/"
                                className="text-white hover:text-gray-300 hover:bg-orange-700 py-2 px-4 transition duration-300"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className="text-white hover:text-gray-300 hover:bg-orange-700 py-2 px-4 transition duration-300"
                            >
                                About
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/about" element={<PrivacyPolicy />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
