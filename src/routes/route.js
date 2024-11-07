
import { createFileRoute, createRootRoute , Outlet } from '@tanstack/react-router'
import Login from '../Login';
import App from '../App';

export const Outlet = createRootRoute()({
    component: () => <Outlet />
})

export const Login = createFileRoute('/')({
    component: () => <Login />
})

export const App = createFileRoute('/app')({
    component: () => <App />
})