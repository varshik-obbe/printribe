import React, { useState } from "react";
import Footer from "./footer";
import Header from "./header";
import InventoryProducts from "./InventoryProduct.jsx";
import styles from "../styles/home.module.css";

const WixDashboard = () => {
  const [searchItem, setSearchItem] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  //inline styling
  const wdStyle = {
    wrapper: {
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column-reverse",
      alignItems: "center",
    },
  };

  return (
    <>
     
      <h6 className="ms-5 mt-4">INVENTORY PRODUCTS</h6>
      <hr
          class="my-2 mx-auto"
          style={{
            height: "2px",
            width: "95%",
            background: "#999",
          }}
        />
       
        <div
          className="col-12 col-md-6 col-lg-4 mx-auto py-2 ps-sm-5 ps-lg-6 order-2 order-md-1 my-4"
        >
          <div className={`${styles.searchBox}`}>
            <i className={"fas fa-search " + styles.searchIcon}></i>
            <input
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
              className={styles.searchInput}
              placeholder="Search by title..."
              style={{ border: "0px solid black", width: "80%"}}
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
          </div>
        </div>        
     
      <InventoryProducts />
      <InventoryProducts />
  
    </>
  );
};

export default WixDashboard;
