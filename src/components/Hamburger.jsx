function Hamburger({ toggle }) {
    return (
        <div className="hamburger-menu">
            <input
                id="menu-toggle"
                type="checkbox"
                onChange={() => {
                    toggle();
                }}
            />
            <div id="menu-btn">
                <div></div>
            </div>
        </div>
    );
}

export default Hamburger;
