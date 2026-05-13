const Ejemplo = () => {
    return (
        <section className="home-page">
            <div className="home-card">
                <span className="todo-badge">Interactive Guide</span>

                <h1>¿How it works<br />Brain Dump?</h1>

                <p>
                    This section shows you how to use the 
                    app's main features.
                </p>

                <div className="home-features">
                    <div className="feature-card">
                        <span className="feature-icon">①</span>
                        <h3>First</h3>
                        <p>
                            Type a task in the text field under the
                            “Brain Dump” section.
                        </p>
                    </div>

                    <div className="feature-card">
                        <span className="feature-icon">②</span>
                        <h3>Second</h3>
                        <p>
                            Click the Save button or press Enter to
                            automatically add the task.
                        </p>
                    </div>

                    <div className="feature-card">
                        <span className="feature-icon">③</span>
                        <h3>Third</h3>
                        <p>
                            Mark tasks as completed using the checkbox or
                            delete them using the delete button.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ejemplo;