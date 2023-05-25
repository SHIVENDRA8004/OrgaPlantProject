import profileImage from "../assets/headerImg.png";
const Header = () => {
    return (
        <div className="container-fluid ">
            <div className="row d-flex align-items-center m-auto" style={{ height: "3.5rem" }}>
                <div className="col-2 d-none d-sm-block"></div>
                <div className="col col-sm-8">
                    <div className="input-group align-items-center ">
                        <i className="bi bi-search searchBtn z-1 ps-3 position-absolute fs-6"></i>
                        <input type="text" className="form-control text-dark ps-5 pe-5 rounded searchBar d-none d-sm-block h-75" placeholder="Search..." />
                    </div>
                </div>
                <div className="col col-sm-2">
                    <div className="row d-flex justify-content-end">
                        <div className="col-6 col-sm-4 d-flex align-items-center">
                            <i className="bi bi-bell-fill fs-5"></i>
                        </div>
                        <div className="col-4 col-sm-6 d-flex justify-content-end align-items-center">
                            <img src={profileImage} alt="ProfilePhoto" className="h-75" />
                            <i className="bi bi-circle-fill position-relative text-success d-flex" style={{ top: "15px", right: "15px" }}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
