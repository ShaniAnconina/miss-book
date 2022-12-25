const { useState } = React

import { HomePage } from './pages/home.jsx'
import { AboutUs } from './pages/about.jsx'
import { BookIndex } from './pages/book-index.jsx'

export function App() {
    const [page, setPage] = useState('book')


    return <section className="app main-layout">
        <header className="app-header full">
            <span className="logo">Miss Book</span>
            <nav className="app-nav">
                <ul>
                    <li><a href="#" onClick={() => setPage('home')}>Home</a></li>
                    <li><a href="#" onClick={() => setPage('about')}>About</a></li>
                    <li><a href="#" onClick={() => setPage('book')}>Books</a></li>
                </ul>
            </nav>
        </header>
        <main>
            {page === 'home' && <HomePage />}
            {page === 'about' && <AboutUs />}
            {page === 'book' && <BookIndex />}
        </main>
    </section>
}