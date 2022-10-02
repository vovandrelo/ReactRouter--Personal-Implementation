import { Link } from "../router/components/Link";

const HomePage = () => {
    return (
        <div>
            <h1>Домашняя страница</h1>
            <p>... Контент ...</p>
            <Link to="/page-one">Перейти на страницу №1</Link>
            <hr/>
            <Link to="/page-two">Перейти на страницу №2</Link>
        </div>
    )
}

export default HomePage;