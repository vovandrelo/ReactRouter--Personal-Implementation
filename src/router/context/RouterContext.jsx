import { router } from "../Router";
import React from "react";

// RouterContext создаётся на основе Context-а и предоставляет доступ ГС Router:
export const RouterContext = React.createContext(router);