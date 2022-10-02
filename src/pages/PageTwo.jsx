import { Link } from "../router/components/Link";

const PageTwo = () => {
    return (
        <div>
            <h1>Страница №2</h1>
            <p>... Контент ...</p>
            <Link to="/">На главную</Link>
        </div>
    )
}

export default PageTwo;