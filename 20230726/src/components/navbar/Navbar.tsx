import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>fremed</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="search" className="icon"/>
        <img src="/app.svg" alt="app" className="icon"/>
        <img src="/expand.svg" alt="expand" className="icon"/>
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
          />
          <span>Thao</span>
        </div>
        <img src="/setting.svg" alt="setting" className="icon"/>
      </div>
    </div>
  )
}

export default Navbar