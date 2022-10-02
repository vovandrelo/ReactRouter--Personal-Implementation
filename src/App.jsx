

import { Route } from "./router/components/Route"
import { BrowserRouter } from "./router/components/BrowserRouter"
import { Routes } from "./router/components/Routes"

import HomePage from "./pages/HomePage"
import PageOne from "./pages/PageOne"
import PageTwo from "./pages/PageTwo"
import PageNotFound from "./pages/PageNotFound"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route to="/" element={<HomePage/>}/>
                <Route to="/page-one" element={<PageOne/>}/>
                <Route to="/page-two" element={<PageTwo/>}/>
                <Route element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;