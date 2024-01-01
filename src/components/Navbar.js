

export default function Navbar(props) {


    return (
    <nav id='nav'className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
    <span className="navbar-brand mb-0 h1">Text App</span>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        </ul>
        <div className={`form-check form-switch text-${props.mode === 'light'? 'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Activate Dark Mode</label>
        </div>
      </div>
    </div>
  </nav>
  )
}
