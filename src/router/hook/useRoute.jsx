import { nanoid } from "nanoid"
import { useContext, useEffect, useRef, useState } from "react";
import { RouterContext } from "../context/RouterContext";

// Хук useRoute выполняет подписку на изменение ГС навигации
export function useRoute() {
    // Установка компоненту уникального id для дальнейшего использования в качестве подписчика:
    const componentKey = useRef(nanoid())

    // Создание локального состояния компонента-подписчика:
    const [route, setRoute] = useState();

    // Получение из контекста ГС навигации:
    const router = useContext(RouterContext);

    // После рендера компонента выполняется:
    useEffect(() => {
        // 1. Подписка на изменение ГС навигации:
        router.subscriber(componentKey.current, (route) => setRoute(route))
        // 2. Отписка от изменения ГС навигации при удалении компоннета:
        return () => router.unsubscriber(componentKey.current)
    }, [])

    // Возвращаемым значением является текущее значение url:
    return route;
}