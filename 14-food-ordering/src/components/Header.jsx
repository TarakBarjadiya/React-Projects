import headerLogo from '../assets/logo.jpg';

export default function Header() {
    return (
        <header id="main-header">
            <div id="title">
                <img src={headerLogo} alt="Online Food Ordering" />
                <h1>Online Food Ordering</h1>
            </div>
            <nav>
                <button className='text-button'>Cart (0)</button>
            </nav>
        </header>
    );
}
