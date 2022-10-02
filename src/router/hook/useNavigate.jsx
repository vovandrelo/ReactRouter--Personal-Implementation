import { useContext } from "react"
import { RouterContext } from "../context/RouterContext"

// Хук useNavigate представляет собой API по изменению ГС навигации:
export function useNavigate() {
    const router = useContext(RouterContext)
    return router.setRoute.bind(router);
}