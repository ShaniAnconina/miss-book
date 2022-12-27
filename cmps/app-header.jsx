const { Link, NavLink } = ReactRouterDOM

export function AppHeader() {

    return <header className="app-header full main-layout">
            <span className="logo">Miss Book</span>
            <nav className="app-nav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/book">Book</NavLink>
            </nav>
    </header>
}