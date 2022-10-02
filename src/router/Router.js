// Виды роутинга:
// - Серверный: все запрашиваемые пользователем страницы приходят с сервера.
// - Клиентский: запрос на сервер происходит только 1 раз, далее страницы обновляются путём перерендера.

// ReactRouter реализует идею клиентского роутинга.

// Класс Router является неким единым источником истинности, который предоставляет функции хранения и изменения
// текущего состояния проекта, отвечающего за навигацию по страницам.
class Router {
    // CurrentRoute отвечает за хранение текущего состояния url:
    currentRoute = "/";

    // Создаём объект, в котором будут храниться данные о компонентах-подписчиках глобального состояния.
    subscribers = {};

    // Получение текущего значения url и установка его в currentRoute:
    constructor() {
        this.currentRoute = window.location.pathname;
    }

    // Метод setRoute выполняет изменение значения url и оповещает об этом событии всех компонентов-подписчиков:
    setRoute(route, state = {}) {
        this.currentRoute = route;                      // Изменение состояния
        window.history.pushState(state, "", route)      // Изменение строки url 

        // Оповещение всех подписчиков об изменеии url:
        Object.values(this.subscribers).forEach((subscriber) => 
            typeof subscriber === "function" && subscriber(this.currentRoute)
        );
    }

    // Для подписки на изменение текущего url используется метод:
    subscriber(key, callback) {
        this.subscribers[key] = callback;
        this.subscribers[key](this.currentRoute);
    }

    // Для отподписки от изменения текущего url используется метод:
    unsubscriber(key) {
        delete this.subscribers[key];
    }
}

// Экспортируем экземпляр класс, используя паттерн Singleton, реализованный с помощью замыкания:
export const createRouter = (function () {
    let storeInstance;
  
    return function () {
      if (!storeInstance) {
        storeInstance = new Router();
      }
  
      return storeInstance;
    };
})();
export const router = createRouter();