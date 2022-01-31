import React, { useState } from "react";
import axios from "axios";
const fieldsArray = [
  { name: "fullName", title: "Full Name", diff: false },
  {
    name: "state",
    title: "State",
    diff: "state",
  },
  { name: "address1", title: "Address line 1", diff: 'address1' },
  { name: "company", title: "Company (optional)", diff: 'company' },
  { name: "address2", title: "Address line 2 (optional)", diff: 'address2' },
  { name: "mobile", title: "Phone (optional)", diff: "mobile" },
  { name: "country", title: "Country", diff: "country" },
  {
    name: "retailShippingPprice",
    title: "Retail shipping price",
    diff: "retailShippingPprice",
  },
  { name: "postalCode", title: "Postal/Zip code", diff: 'postalCode' },
  { name: "city", title: "City", diff: 'city' },
];

function Shipping(props) {

  const formSubmit = async ()=>{
  const visitorId = localStorage.getItem("visitorId");
  const customerId = localStorage.getItem("customerId");
   const formData = {
     shipping_data:{
    customer_id:customerId,
    visitor_id:visitorId,
    fullname: fullName,
    state: state,
    address1: address1,
    company: company,
    address2: address2,
    phone: mobile,
    country: country,
    shipping_charges: retailShippingPprice,
    zip_code: postalCode,
    city: city
   }
  }
  console.log(formData);
  await axios.post(`/customerShipping/addShipping`,formData);
  handleNext()
  }


  const { handleNext } = props;
  const [fullName, setFullName] = useState('');
  const [state, setState] = useState('');
  const [address1, setAddress1] = useState('');
  const [company, setCompany] = useState('');
  const [address2, setAddress2] = useState('');
  const [mobile, setMobile] = useState(0);
  const [country, setCountry] = useState('');
  const [retailShippingPprice, setRetailShippingPprice] = useState(0);
  const [postalCode, setPostalCode] = useState(0);
  const [city, setCity] = useState('');
  return (
    <React.Fragment>
      <div
        class="w-100"
        style={{
          padding: "30px 40px",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          borderRadius: "8px",
          background: "#FFFFFF",
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
                        <input type="email" class="form-control" onChange={(e)=>setFullName(e.target.value)}  />
                      </div>
                      {/* </div> */}
                    </div>
                  </>
                );
              case 'address1':
                  return (
                    <>
                      <div class="col-12 col-sm-6 mt-2">
                        {/* <div class="mt-2"> */}
                        <label for="basic-url" class="form-label mb-1">
                          <b>{ele.title}</b>
                        </label>
                        <div class="input-group mb-2">
                          <input type="email" class="form-control" onChange={(e)=>setAddress1(e.target.value)}  />
                        </div>
                        {/* </div> */}
                      </div>
                    </>
                  );
            case 'address2':
                    return (
                      <>
                        <div class="col-12 col-sm-6 mt-2">
                          {/* <div class="mt-2"> */}
                          <label for="basic-url" class="form-label mb-1">
                            <b>{ele.title}</b>
                          </label>
                          <div class="input-group mb-2">
                            <input type="email" class="form-control" onChange={(e)=>setAddress2(e.target.value)}  />
                          </div>
                          {/* </div> */}
                        </div>
                      </>
                    );
            case 'company':
                      return (
                        <>
                          <div class="col-12 col-sm-6 mt-2">
                            {/* <div class="mt-2"> */}
                            <label for="basic-url" class="form-label mb-1">
                              <b>{ele.title}</b>
                            </label>
                            <div class="input-group mb-2">
                              <input type="email" class="form-control" onChange={(e)=>setCompany(e.target.value)}  />
                            </div>
                            {/* </div> */}
                          </div>
                        </>
                      );
            case 'city':
                        return (
                          <>
                            <div class="col-12 col-sm-6 mt-2">
                              {/* <div class="mt-2"> */}
                              <label for="basic-url" class="form-label mb-1">
                                <b>{ele.title}</b>
                              </label>
                              <div class="input-group mb-2">
                                <input type="email" class="form-control" onChange={(e)=>setCity(e.target.value)}  />
                              </div>
                              {/* </div> */}
                            </div>
                          </>
                        );
              case 'postalCode':
                        return (
                          <>
                            <div class="col-12 col-sm-6 mt-2">
                              {/* <div class="mt-2"> */}
                              <label for="basic-url" class="form-label mb-1">
                                <b>{ele.title}</b>
                              </label>
                              <div class="input-group mb-2">
                                <input type="email" class="form-control" onChange={(e)=>setPostalCode(e.target.value)}  />
                              </div>
                              {/* </div> */}
                            </div>
                          </>
                        );
              case "state":
                return (
                  <div class="col-12 col-sm-6 mt-2">
                    <label for="basic-url" class="form-label mb-1">
                      <b>{ele.title}</b>
                    </label>
                    <div class="input-group mb-2">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        onChange={(e)=>setState(e.target.value)} 
                      >
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                )
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
                        <input type="text" class="form-control w-75" onChange={(e)=>setMobile(e.target.value)}  />
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
                        onChange={(e)=>setCountry(e.target.value)}
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
                        ₹
                        </span>
                        <input type="text" disabled class="form-control"  onChange={(e)=>setRetailShippingPprice(e.target.value)}  />
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
        class="w-100 mt-4"
        style={{
          padding: "30px",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          borderRadius: "8px",
          background: "#FFF",
        }}
      >
        <div class="d-flex justify-content-center align-items-center">
          <div style={{ width: "350px" }}>
            <div class="col-12 d-flex justify-content-center">
              <button class="btn btn-lg btn-danger" style={{  backgroundColor:"#EE3C2F",color:"#fff",fontWeight:"bold",border:"none" }} onClick={()=>formSubmit()}>
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
