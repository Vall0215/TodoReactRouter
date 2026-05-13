import { NavLink, Outlet } from "react-router";
import { childrenRouterList } from "./routes";

const Layout = () => {
    return (
        <div className="layout">
            <aside className="sidebar">
                <div className="sidebar-brand">
                    <h2>Brain Dump</h2>
                    <p>React Router</p>
                </div>

                <ul>
                    {childrenRouterList.map((route, index) => (
                        <li key={index}>
                            <NavLink
                                to={route.path ?? "/"}
                                className={({ isActive }) => isActive ? "active" : ""}
                            >
                                {route.text}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </aside>

            <main className="main-content">
                <Outlet />

                <footer className="footer">
                    <div className="footer-content">
                        <div className="footer-author">
                            <span className="footer-dot" />
                            <p>Created by <strong>Valery Hernandez</strong></p>
                        </div>

                        <div className="footer-divider" />

                        <div className="footer-tech">
                            <span className="tech-label">Technologies</span>
                            <div className="tech-tags">
                                <span className="tech-tag">React</span>
                                <span className="tech-tag">React Router</span>
                                <span className="tech-tag">useState</span>
                                <span className="tech-tag">useMemo</span>
                                <span className="tech-tag">CSS</span>
                                <span className="tech-tag">Vite</span>
                            </div>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
};

export default Layout;