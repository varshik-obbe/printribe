import { Nav, Navbar } from "react-bootstrap";
import React, { useState, useEffect } from "react";

import logo from "../assets/Printribe-logo.png";
import styles from "../styles/home.module.css";
import axios from "axios";

import { useNavigate } from "react-router-dom";

function Header() {
  const [messageVisible, setMessageVisible] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [adminSettings, setAdminSettings] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (searchItem.length > 0) {
      axios
        .get(
          `https://api.theprintribe.com/api/products/getSearchProducts/${searchItem}`
        )
        .then(({ data }) => {
          console.log(data.products);
          setSearchResults(data.products);
        })
        .catch((err) => console.log(err));
    } else {
      setSearchResults([]);
    }
  }, [searchItem]);

  useEffect(() => {
    axios
      .get("https://api.theprintribe.com/api/adminSettings/getAllSettings")
      .then(({ data }) => {
        console.log(data);
        setAdminSettings(data.settingsData.settingsData);

        data.settingsData.settingsData.map((curr) => {
          if (curr.settings_name === "alert" && curr.active == "true") {
            setMessageVisible(true);
          }
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {messageVisible ? (
        <div
          style={{
            backgroundColor: "#ffd680",
            position: "relative",
            padding: "7px 0 12px 0",
          }}
        >
          <div
            className="text-center"
            style={{ maxWidth: "60%", margin: "auto", fontSize: "14px" }}
          >
            {adminSettings &&
              adminSettings.map((curr) => {
                if (curr.settings_name === "alert" && curr.active == "true") {
                  return <span>{curr.settings_value}</span>;
                }
              })}
            {/* * Message to be edited from admin panel{" "} */}
          </div>
          <div
            className=""
            style={{ position: "absolute", right: "17%", top: "5px" }}
            onClick={() => setMessageVisible(!messageVisible)}
          >
            <i className={styles.crossIcon + " " + "fa fa-times"}></i>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="container-fluid py-2">
        <div className="row">
          <div
            className="col-10 col-sm-9 col-md-3 logo mb-3 mb-sm-0 py-2 text-center text-lg-end ps-sm-5 ps-lg-2 pe-lg-5"
            style={{ lineHeight: "45px" }}
          >
            <a href="/">
              <img
                src={logo}
                alt=""
                style={{ height: "40px", width: "206px", maxWidth: "100%" }}
              />
            </a>
          </div>
          <div className="col-12 col-md-6 col-lg-5 px-4 py-2 ps-sm-5 ps-lg-6 order-2 order-md-1">
            <div className={styles.searchBox}>
              <i className={"fas fa-search " + styles.searchIcon}></i>
                <input
                  value={searchItem}
                  onChange={(e) => setSearchItem(e.target.value)}
                  className={styles.searchInput}
                  placeholder="Search..."
                  style={{ border: "0px solid black", width: "80%" }}
                />
                {searchItem.length > 0 && (
                  <span
                    style={{ marginLeft: "30px", cursor: "pointer" }}
                    onClick={() => setSearchItem("")}
                  >
                    <i
                      class="fas fa-times text-muted"
                      style={{ fontSize: "12px" }}
                    ></i>
                  </span>
                )}
                
                {searchResults && (
                  <div className={styles.searchItemsList}>
                    {searchResults.map((curr, index) => (
                      <li value={curr.title} key={index}>
                        {curr.title}
                      </li>
                    ))}
                  </div>
                )}
            </div>
          </div>
          <div className="col-2 col-sm-3 col-md-3 col-lg-4 order-1 order-md-2">
            <Navbar expand="lg" className="">
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                className="px-2"
                style={{ width: "45px" }}
              />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto justify-content-evenly w-100">
                  {localStorage.getItem("customerId") ? (
                    <>
                      <Nav.Link href="/my-account">
                        <i
                          className="fas fa-user-circle"
                          style={{ fontSize: "19px" }}
                        ></i>
                        <span
                          style={{
                            fontSize: 20,
                            fontWeight: 300,
                            color: "black",
                            marginLeft: "10px",
                          }}
                        >
                          My Account
                        </span>
                      </Nav.Link>
                      <Nav.Link
                        href="/"
                        onClick={() => {
                          localStorage.clear();
                        }}
                      >
                        <i
                          className="fas fa-sign-out-alt"
                          style={{ fontSize: "19px" }}
                        ></i>
                        <span
                          style={{
                            fontSize: 20,
                            fontWeight: 300,
                            color: "black",
                            marginLeft: "10px",
                          }}
                        >
                          Logout
                        </span>
                      </Nav.Link>
                      <Nav.Link href="/cart">
                        <i
                          className="fas fa-shopping-cart"
                          style={{ fontSize: "19px" }}
                        ></i>
                        <span
                          style={{
                            fontSize: 20,
                            fontWeight: 300,
                            color: "black",
                            marginLeft: "10px",
                          }}
                        >
                          My Cart
                        </span>
                      </Nav.Link>
                    </>
                  ) : (
                    <>
                      <Nav.Link href="/signup">
                        <i
                          class="fas fa-user-plus"
                          style={{ fontSize: 20 }}
                        ></i>
                        <span
                          style={{
                            fontSize: 20,
                            fontWeight: 300,
                            color: "black",
                            marginLeft: "10px",
                          }}
                        >
                          Sign up
                        </span>
                      </Nav.Link>
                      <Nav.Link href="/signin">
                        <i class="fas fa-user-alt" style={{ fontSize: 20 }}></i>
                        <span
                          style={{
                            fontSize: 20,
                            fontWeight: 300,
                            color: "black",
                            marginLeft: "10px",
                          }}
                        >
                          Sign in
                        </span>
                      </Nav.Link>
                      <Nav.Link href="/cart">
                        <i
                          class="fa fa-shopping-cart"
                          style={{ fontSize: 24 }}
                        ></i>
                        <span
                          style={{
                            fontSize: 20,
                            fontWeight: 300,
                            color: "black",
                            marginLeft: "10px",
                          }}
                        >
                          My Cart
                        </span>
                      </Nav.Link>
                    </>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
