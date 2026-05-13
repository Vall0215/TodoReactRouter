const Home = () => {
    return (
        <section className="home-page">
            <div className="home-card">
                <span className="todo-badge">Frontend Project</span>

                <h1>Welcome to<br />Brain Dump</h1>

                <p>
                    Project built using React Router, reusable components,
                    state management with useState, and custom styles.
                </p>

                <div className="home-features">
                    <div className="feature-card">
                        <span className="feature-icon">✦</span>
                        <h3>Clear your mind</h3>
                        <p>Save new activities quickly with a single click or by pressing Enter.</p>
                    </div>

                    <div className="feature-card">
                        <span className="feature-icon">◈</span>
                        <h3>Focus mode</h3>
                        <p>Easily manage your list by removing items you no longer need.</p>
                    </div>

                    <div className="feature-card">
                        <span className="feature-icon">◎</span>
                        <h3>Smart interface</h3>
                        <p>A well-organized, professional interface with animations and visual effects.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;