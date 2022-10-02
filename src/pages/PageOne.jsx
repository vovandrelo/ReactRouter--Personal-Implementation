import { Link } from "../router/components/Link";

const PageOne = () => {
    return (
        <div>
            <h1>Страница №1</h1>
            <p>... Контент ...</p>
            <Link to="/">На главную</Link>
        </div>
    )
}

export default PageOne;