import './navbar.css'
export const Navbar = () => {
  return (
   <>
<nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary">
  <div className="container">
    <a className="navbar-brand" href="#"><img src="" alt="logo" /></a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Переключатель навигации"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Главная</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">О нас</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Услуги</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Ссылка</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Ссылка</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


   
   </>
 
  );
}
