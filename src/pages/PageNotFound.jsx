import { Link } from "../router/components/Link";

const PageNotFound = () => {
    return (
        <div>
            <h1>Страница не найдена!</h1>
            <p>... Контент ...</p>
            <Link to="/">На главную</Link>
        </div>
    )
}

export default PageNotFound;