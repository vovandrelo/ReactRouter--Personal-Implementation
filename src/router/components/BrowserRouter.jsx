import { RouterContext } from "../context/RouterContext"
import { router } from "../Router"

// BrowserRouter создаётся на основе ContextProvider и предоставляет доступ ГС Router:
export const BrowserRouter = ({children}) =>
    <RouterContext.Provider value={router}>{children}</RouterContext.Provider>