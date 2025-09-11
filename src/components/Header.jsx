import logo from "../utils/logo.png";

const Header = () => {
    return (
        <div className="py-4 px-8 bg-gradient-to-b from-black absolute w-full h-20 z-10">
            <img
              src={logo}
              alt="logo"
              className="w-36"
            />
        </div>
    )
}

export default Header