import React from "react";

const fieldsArray = [
  { name: "fullName", title: "Full Name", diff: false },
  {
    name: "orderNumber",
    title: "Order number (optional)",
    diff: "orderNumber",
  },
  { name: "address1", title: "Address line 1", diff: false },
  { name: "company", title: "Company (optional)", diff: false },
  { name: "address2", title: "Address line 2 (optional)", diff: false },
  { name: "mobile", title: "Phone (optional)", diff: "mobile" },
  { name: "country", title: "Country", diff: "country" },
  {
    name: "retailShippingPprice",
    title: "Retail shipping price",
    diff: "retailShippingPprice",
  },
  { name: "postalCode", title: "Postal/Zip code", diff: false },
  { name: "city", title: "City", diff: false },
];

function Shipping(props) {
  const { handleNext } = props;
  return (
    <React.Fragment>
      <div
        class="w-100 mt-5 mb-4"
        style={{
          padding: "30px 40px",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          borderRadius: "8px",
        }}
      >
        <b class="fs-4">Shipping Address</b>
        <div class="row mt-4">
          {fieldsArray.map((ele, index) => {
            switch (ele.diff) {
              case false:
                return (
                  <>
                    <div class="col-12 col-sm-6 mt-2">
                      {/* <div class="mt-2"> */}
                      <label for="basic-url" class="form-label mb-1">
                        <b>{ele.title}</b>
                      </label>
                      <div class="input-group mb-2">
                        <input type="email" class="form-control" />
                      </div>
                      {/* </div> */}
                    </div>
                  </>
                );
              case "orderNumber":
                return (
                  <>
                    <div class="col-12 col-sm-6 mt-2">
                      <label for="basic-url" class="form-label mb-1">
                        <b>{ele.title}</b>
                      </label>
                      <div class="input-group mb-2">
                        <span class="input-group-text" id="basic-addon1">
                          #
                        </span>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                  </>
                );
              case "mobile":
                return (
                  <>
                    <div class="col-12 col-sm-6 mt-2">
                      <label for="basic-url" class="form-label mb-1">
                        <b>{ele.title}</b>
                      </label>
                      <div class="input-group mb-2">
                        <button
                          class="btn btn-outline-secondary dropdown-toggle form-control w-25"
                          type="button"
                          style={{ border: "1px solid #CED4DA" }}
                        >
                          +91
                        </button>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                        </ul>
                        <input type="text" class="form-control w-75" />
                      </div>
                    </div>
                  </>
                );
              case "country":
                return (
                  <div class="col-12 col-sm-6 mt-2">
                    <label for="basic-url" class="form-label mb-1">
                      <b>{ele.title}</b>
                    </label>
                    <div class="input-group mb-2">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                );
              case "retailShippingPprice":
                return (
                  <>
                    <div class="col-12 col-sm-6 mt-2">
                      <label for="basic-url" class="form-label mb-1">
                        <b>{ele.title}</b>
                      </label>
                      <div class="input-group mb-2">
                        <span class="input-group-text" id="basic-addon1">
                          $
                        </span>
                        <input type="text" disabled class="form-control" />
                      </div>
                    </div>
                  </>
                );
              default:
                return null;
            }
          })}
        </div>
      </div>
      <div
        class="w-100 mb-5"
        style={{
          padding: "30px",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          borderRadius: "8px",
        }}
      >
        <div class="d-flex justify-content-center align-items-center">
          <div style={{ width: "350px" }}>
            <div class="col-12 d-flex justify-content-center">
              <button class="btn btn-lg btn-danger" onClick={handleNext}>
                Continue to Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Shipping;
