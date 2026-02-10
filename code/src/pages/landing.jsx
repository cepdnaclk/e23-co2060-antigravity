import "./landing.css";

function LandingPage({ onNavigate }) {

    // Function to handle navigation to pages
    const goToPage = (page) => {
        if (typeof onNavigate === 'function') {
            onNavigate(page);
        } else {
            window.location.href = `/${page}`;
        }
    }

    return (
    <>
        <div className="landing-page">
            <h1 className="landing-title">Welcome</h1>
            <p className="landing-subtitle">hello, world</p>
            <div className="landing-buttons-container">
                <button onClick={() => goToPage('login')} className="landing-btn landing-btn-primary">Login</button>
                <button onClick={() => goToPage('selectsignup')} className="landing-btn landing-btn-secondary">Sign Up</button>
            </div>
        </div>
    </>
    );
}

export default LandingPage;