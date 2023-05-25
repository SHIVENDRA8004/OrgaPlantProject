import { useState } from "react";
import qr from "../assets/QrCode.png";
import userImage from "../assets/userImage.png";
import orgaPlants from "../assets/Orga Plants Logo.png";
import flag from "../assets/indian-flag.svg";

const Login = () => {
    const [active, setActive] = useState(["border-bottom-1 text-dark", "border-bottom-0", "border-bottom-0"]);
    const handleButtonClick = (value) => {
        if (value === 1) {
            setActive(["border-bottom-1 text-dark", "border-bottom-0", "border-bottom-0"]);
        }
        if (value === 2) {
            setActive(["border-bottom-0", "border-bottom-1 text-dark", "border-bottom-0"]);
        }
        if (value === 3) {
            setActive(["border-bottom-0", "border-bottom-0", "border-bottom-1 text-dark"]);
        }
    };
    return (
        <div className="container mt-4">
            <div className="row d-block d-sm-flex align-items-center justify-content-between">
                <div className="col-12 col-sm-5 d-flex justify-content-evenly" style={{ height: "64px" }}>
                    <button
                        className={`border-top-0 border-end-0 border-start-0 bg-transparent text-secondary border-warning border-4  ${active[0]}`}
                        onClick={() => handleButtonClick(1)}
                    >
                        Account
                    </button>
                    <button
                        className={`border-top-0 border-end-0 border-start-0 bg-transparent text-secondary border-warning  border-4 ${active[1]}`}
                        onClick={() => handleButtonClick(2)}
                    >
                        Business
                    </button>
                    <button
                        className={`border-top-0 border-end-0 border-start-0 bg-transparent text-secondary border-warning border-4 ${active[2]}`}
                        onClick={() => handleButtonClick(3)}
                    >
                        Plans
                    </button>
                </div>
                <div className="col col-sm-2 d-flex justify-content-center mt-2 mt-sm-0">
                    <button className="border-0 bg-success text-light rounded next" style={{ height: "64px", width: "180px" }}>
                        Next
                    </button>
                </div>
            </div>
            <div className="row d-block d-sm-flex justify-content-center mt-3">
                <div className="container col col-sm-4">
                    <div className="row">
                        <div className="col mb-1">
                            <label htmlFor="firstName" className="form-label m-1" style={{ fontSize: "12px" }}>
                                First Name
                            </label>
                            <div className="bg-light">
                                <i className="bi bi-person position-absolute ps-3 pt-1 fs-5"></i>
                                <input type="name" className="form-control ps-5 pe-3 inputBar" id="firstName" placeholder="Usman" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mb-1">
                            <label htmlFor="lastName" className="form-label m-1 " style={{ fontSize: "12px" }}>
                                Last Name
                            </label>
                            <div className="bg-light">
                                <i className="bi bi-person position-absolute ps-3 pt-1 fs-5"></i>
                                <input type="name" className="form-control ps-5 pe-3" id="lastName" placeholder="Ndako" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mb-1">
                            <label htmlFor="email" className="form-label m-1 " style={{ fontSize: "12px" }}>
                                Email
                            </label>
                            <div className="bg-light">
                                <i className="bi bi-envelope position-absolute ps-3 pt-1 fs-5"></i>
                                <input type="email" className="form-control ps-5 pe-3" id="email" placeholder="example@email.com" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mb-1">
                            <label htmlFor="otp" className="form-label m-1 " style={{ fontSize: "12px" }}>
                                OTP
                            </label>
                            <div className="bg-light">
                                <input type="number" className="form-control" id="otp" placeholder="xxxxxx" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mb-1">
                            <label htmlFor="phoneNumber" className="form-label m-1 " style={{ fontSize: "12px" }}>
                                Phone Number
                            </label>
                            <div className="bg-light">
                                <div className="d-flex">
                                    <img src={flag} alt="Indian Flag" className="position-absolute ps-2 pt-1" />
                                    <select className="form-select ps-5" aria-label="Country Code" style={{ width: "115px" }}>
                                        <option defaultValue="0">+91</option>
                                        <option value="1">+92</option>
                                        <option value="2">+93</option>
                                        <option value="3">+94</option>
                                        <option value="4">+95</option>
                                        <option value="5">+96</option>
                                        <option value="6">+97</option>
                                        <option value="7">+98</option>
                                        <option value="8">+99</option>
                                        <option value="9">+100</option>
                                        <option value="10">+101</option>
                                    </select>
                                    <input type="number" className="form-control ps-3 pe-3" id="phoneNumber" placeholder="xxxxxxxxxx" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mb-1">
                            <label htmlFor="otp2" className="form-label m-1 " style={{ fontSize: "12px" }}>
                                OTP
                            </label>
                            <div className="bg-light">
                                <input type="number" className="form-control" id="otp2" placeholder="xxxxxx" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mb-1">
                            <label htmlFor="address" className="form-label m-1 " style={{ fontSize: "12px" }}>
                                Address
                            </label>
                            <div className="bg-light">
                                <i className="bi bi-geo-alt position-absolute ps-2 pt-1 fs-5"></i>
                                <input type="address" className="form-control ps-5 pe-2" id="address" placeholder="No.93 Skyfields Apartments" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mb-2">
                            <label htmlFor="pincode" className="form-label m-1 " style={{ fontSize: "12px" }}>
                                Pin Code
                            </label>
                            <div className="bg-light">
                                <input type="address" className="form-control ps-2 pe-2" id="pincode" placeholder="560063*" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col col-sm-2 offset-sm-1 mt-4 mt-sm-0 mb-4 mb-sm-0">
                    <div className="d-flex m-auto justify-content-center">
                        <i className="bi bi-cloud-arrow-up position-absolute ps-1 pe-1 mt-2 rounded bg-light" style={{ marginLeft: "60px" }}></i>
                        <i className="bi bi-trash3 position-absolute ps-1 pe-1 mt-2 rounded bg-light" style={{ marginLeft: "120px" }}></i>
                        <img src={userImage} alt="User" className="rounded" />
                    </div>
                </div>
                <div className="col col-sm-4 offset-sm-1 m-sm-auto">
                    <div
                        className="d-flex align-items-center justify-content-evenly rounded p-3"
                        style={{ height: "200px", backgroundColor: "#F8EEE3", width: "100%" }}
                    >
                        <div>
                            <img src={orgaPlants} alt="Logo" />
                        </div>
                        <div>
                            <div className="d-flex align-items-center m-auto" style={{ fontSize: "25px" }}>
                                <i className="bi bi-person fs-5 pe-2"></i>
                                Usman Kumar
                            </div>
                            <div className="d-flex align-items-center m-auto fs-5">
                                <i className="bi bi-envelope fs-5 pe-2"></i>
                                usman@gmail.com
                            </div>
                            <div className="d-flex pt-2 align-items-center">
                                <div className="me-3">
                                    <div className="d-flex align-items-center m-auto">
                                        <i className="bi bi-geo-alt pe-2"></i>
                                        Bengaluru
                                    </div>
                                    <div className="d-flex align-items-center m-auto pt-1">
                                        <i className="bi bi-circle pe-2"></i>
                                        ID-12345
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <img src={qr} alt="Qr Code" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
