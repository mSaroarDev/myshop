import logo from "../assets/logo.png";

const Appnav = () => {
  return (
    <>
      <div className="bg-gray-100 shadow-md">
        <div className="max-w-6xl w-full mx-auto">
          <div className="navbar">
            <div className="flex-1">
              <a className="normal-case text-xl">
                <img src={logo} alt="Logo" className="w-24" />
              </a>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <a>Link</a>
                </li>
                <li>
                  <details>
                    <summary>Parent</summary>
                    <ul className="p-2 bg-base-100">
                      <li>
                        <a>Link 1</a>
                      </li>
                      <li>
                        <a>Link 2</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appnav;
