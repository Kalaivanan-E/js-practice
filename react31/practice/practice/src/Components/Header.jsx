import { render } from "@testing-library/react";


const Header = () => {
    let customCSS = 'code';
    return (
        <div>
            <h2> Header Component</h2>
            <p>25+45 = {25+45}</p>
        </div>
    );
}

export default Header;