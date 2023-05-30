import links from "../data/links.json";

const Nav = () => {
    return <>
        <div className="nav">
            <div>
                <a href="/">
                    <img src="/assets/images/logo.png" alt="Cosmic Exodus Logo" />
                </a>
            </div>
            <div className="nav-links">
            </div>

            <div className="nav-discord desktop-only">
                <a href={links.discord}>Join us on Discord <img src="/assets/images/discord.png" alt="Discord Channel icon" /></a>
            </div>

            <img src="/assets/images/hamburger.png" alt="menu toggle" className="sidebar-toggle mobile-only"
                onClick={() => {
                    const sidebar = document.querySelector(".sidebar");
                    if (sidebar) {
                        sidebar.classList.toggle("sidebar-show");
                    }
                }}
            />
        </div>
    </>;

};

export default Nav;