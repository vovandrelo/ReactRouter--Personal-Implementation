import { useRoute } from "../hook/useRoute"

// Компонент Route выполняет подписку на изменение ГС навигации.
export const Route = ({to, element}) => {
    // Выполнение подписки на ГС навигации:
    const route = useRoute();

    // Если новое ГС навигации соответствует url данного Route-а, то выполняется рендер его
    // дочерних компонентов. В противном случае рендера не произойдёт.
    if (!!to && route !== to) {
        return null;
    }
    return element;
}