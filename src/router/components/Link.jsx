import { useNavigate } from "../hook/useNavigate";

// Link - компонент, который вывыполняет изменение ГС навигации
export const Link = ({to, children}) => {
    // Получение функции изменения ГС навигации:
    const navigate = useNavigate();

    // При клике на ссылку отменяется стандартное поведение браузера и изменение ГС навигации:
    const onClick = (event) => {
        event.preventDefault();
        navigate(to);
    }

    return <a onClick={onClick} href={to}>{children}</a>
}