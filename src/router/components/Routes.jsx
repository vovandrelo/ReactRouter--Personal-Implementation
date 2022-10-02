import { useRoute } from "../hook/useRoute";

// Компонент Routes принимает в качестве аргументов Rout-ы и пропускает на дальнейшую
// обработку только те их них, которые соответствуют текущему URL.
export const Routes = ({ children }) => {
    // Выполнение подписки на изменение ГС навигации:
    const currentRoute = useRoute();
    return (
        <>
            {children.find(routeElement => !routeElement.props.to || routeElement.props.to === currentRoute) || null}
        </>
    )
        
}
