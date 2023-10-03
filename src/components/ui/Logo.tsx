import logo from "/images/webhelp.svg";
const Logo = () => {
  return (
    <a href="#" className="logo-wrapper">
      <img width={65} height={37} src={logo} alt="Webhelp logo" />
      <span>pay</span>
    </a>
  );
};

export default Logo;
