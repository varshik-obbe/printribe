import React, { useEffect, useState } from "react";

import axios from "axios";
import { Rating } from "@mui/material";

const fieldsArray = [
  { name: "Select Shipping", title: "Shipping Type", diff: "Shipping Type" },

  { name: "fullName", title: "Full Name", diff: false },
  {
    name: "state",
    title: "State",
    diff: "state",
  },
  { name: "address1", title: "Address line 1", diff: "address1" },
  { name: "company", title: "Company", diff: "company" },
  { name: "address2", title: "Address line 2 (optional)", diff: "address2" },
  { name: "mobile", title: "Phone", diff: "mobile" },
  { name: "country", title: "Country", diff: "country" },
  {
    name: "retailShippingPprice",
    title: "Retail shipping price",
    diff: "retailShippingPprice",
  },
  { name: "postalCode", title: "Postal/Zip code", diff: "postalCode" },
  { name: "city", title: "City", diff: "city" },
  { name: "gst", title: "GST", diff: "gst" },
];
const stateList = [
  {
    "key": "AN",
    "name": "Andaman and Nicobar Islands",
    "code":35
  },
  {
    "key": "AP",
    "name": "Andhra Pradesh",
    "code":37
  },
  {
    "key": "AR",
    "name": "Arunachal Pradesh",
    "code":12
  },
  {
    "key": "AS",
    "name": "Assam",
    "code":18
  },
  {
    "key": "BR",
    "name": "Bihar",
    "code":10
  },
  {
    "key": "CG",
    "name": "Chandigarh",
    "code":'04'
  },
  {
    "key": "CH",
    "name": "Chhattisgarh",
    "code":22
  },
  {
    "key": "DH",
    "name": "Dadra and Nagar Haveli",
    "code":26
  },
  // {
  //   "key": "DD",
  //   "name": "Daman and Diu",
  //   "code":35
  // },
  {
    "key": "DL",
    "name": "Delhi",
    "code":"07"
  },
  {
    "key": "GA",
    "name": "Goa",
    "code":30
  },
  {
    "key": "GJ",
    "name": "Gujarat",
    "code":24
  },
  {
    "key": "HR",
    "name": "Haryana",
    "code":"06"
  },
  {
    "key": "HP",
    "name": "Himachal Pradesh",
    "code":"02"
  },
  {
    "key": "JK",
    "name": "Jammu and Kashmir",
    "code":"01"
  },
  {
    "key": "JH",
    "name": "Jharkhand",
    "code":20
  },
  {
    "key": "KA",
    "name": "Karnataka",
    "code":29
  },
  {
    "key": "KL",
    "name": "Kerala",
    "code":32
  },
  {
    "key": "LD",
    "name": "Lakshadweep",
    "code":31
  },
  {
    "key": "MP",
    "name": "Madhya Pradesh",
    "code":23
  },
  {
    "key": "MH",
    "name": "Maharashtra",
    "code":27
  },
  {
    "key": "MN",
    "name": "Manipur",
    "code":14
  },
  {
    "key": "ML",
    "name": "Meghalaya",
    "code":17
  },
  {
    "key": "MZ",
    "name": "Mizoram",
    "code":15
  },
  {
    "key": "NL",
    "name": "Nagaland",
    "code":13
  },
  {
    "key": "OR",
    "name": "Odisha",
    "code":21
  },
  {
    "key": "PY",
    "name": "Puducherry",
    "code":34
  },
  {
    "key": "PB",
    "name": "Punjab",
    "code":"03"
  },
  {
    "key": "RJ",
    "name": "Rajasthan",
    "code":"08"
  },
  {
    "key": "SK",
    "name": "Sikkim",
    "code":11
  },
  {
    "key": "TN",
    "name": "Tamil Nadu",
    "code":13
  },
  {
    "key": "TS",
    "name": "Telangana",
    "code":36
  },
  {
    "key": "TR",
    "name": "Tripura",
    "code":16
  },
  {
    "key": "UK",
    "name": "Uttar Pradesh",
    "code":"09"
  },
  {
    "key": "UP",
    "name": "Uttarakhand",
    "code":"05"
  },
  {
    "key": "WB",
    "name": "West Bengal",
    "code":19
  }
]
function Shipping(props) {
  const [savedShipAddress, setSavedShipAddress] = useState(false);
  const savedShippingData =
    localStorage.getItem("shipping_data") !== null
      ? JSON.parse(localStorage.getItem("shipping_data"))
      : null;
  const [countries, setCountries] = useState([])
  const getAllCountries = async () => {
    const data = await axios.get('/customerShipping/getShipRocketCountries')
    setCountries(data.data.data)
  }
  useEffect(() => {
    if (savedShipAddress) {
console.log(savedShippingData,"code");
      setFullName(savedShippingData.fullname);
      setState(savedShippingData.state);
      setAddress1(savedShippingData.address1);
      setCompany(savedShippingData.company);
      setAddress2(savedShippingData.address2);
      setMobile(savedShippingData.phone);
      setCountry(savedShippingData.country);
      setRetailShippingPprice(savedShippingData.shipping_charges);
      setPostalCode(savedShippingData.zip_code);
      setCity(savedShippingData.city);
      setShippingerrorName("");
      setShippingerrorAddress1("");
      setShippingerrorCity("");
      setShippingerrorCountry("");
      setShippingerrorState("");
      setShippingerrorType("")
      setShippingerrorPostalCode("");
      setShippingerrorCompany("");
      setShippingerrorMobile("");
    } else {
      setFullName("");
      setState("");
      setAddress1("");
      setCompany("");
      setAddress2("");
      setMobile(0);
      setCountry("");
      setRetailShippingPprice("");
      setPostalCode(0);
      setCity("");
      setShippingDetails("");
    }
  }, [savedShipAddress]);

  useEffect(() => {
    if (props.checkSavedShipAddress) {
      setSavedShipAddress(!savedShipAddress)

    }
  }, [props.checkSavedShipAddress])
  //to check whether a string contains a number or not
  const checkIfStringContainsNumber = (_string) => {
    return /\d/.test(_string);
  };

  const formSubmit = () => {
    const visitorId = localStorage.getItem("visitorId");
    const customerId = localStorage.getItem("customerId");

    if (
      fullName === "" ||
      fullName.length < 2 ||
      address1 === "" ||
      address1.length < 4 ||
      mobile.toString().length < 10 ||
      city === "" ||
      company === "" ||
      state === "" ||
      postalCode === "" ||
      country === "" ||
      gst === null
    ) {
      if (fullName === "" || fullName.length < 2) {
        setShippingerrorName("Full name should be at of least 2 characters");
      }

      if (address1 === "" || address1.length < 4) {
        setShippingerrorAddress1("Address is not long enough");
      }

      if (city === "") {
        setShippingerrorCity("City field is required");
      }

      if (country === "") {
        setShippingerrorCountry("Country field is required");
      }

      if (state === "") {
        setShippingerrorState("State field is required");
      }
      if (shippingType === "") {
        setShippingerrorType("Please Select Shipping Type")
      }
      if (postalCode === 0) {
        setShippingerrorPostalCode("Postal Code field is required");
      }

      if (company === "") {
        setShippingerrorCompany("Company field is required");
      }

      if (mobile.toString().length < 8) {
        setShippingerrorMobile("Phone number invalid");
      }

      if (gst === null) {
        setShippingerrorGST("Gst field is required");
      }
    }

    if (
      fullName !== "" &&
      state !== "" &&
      address1 !== "" &&
      mobile.toString().length > 7 &&
      retailShippingPprice !== "" &&
      postalCode !== 0 &&
      city !== "" &&
      company !== "" &&
      country !== "" &&
      gst !== null
    ) {
      const formData = {
        shipping_data: {
          customer_id: customerId,
          visitor_id: visitorId,
          fullname: fullName,
          state: state,
          state_code:stateCode,
          expectedDelivery: expectedDelivery,
          shipping_type: shippingType,
          address1: address1,
          company: company,
          address2: address2,
          phone: mobile,
          country: country,
          shipping_charges: Number(retailShippingPprice),
          zip_code: postalCode,
          city: city,
        },
      };

      //saving shipping details in localStorage
      localStorage.setItem(
        "shipping_data",
        JSON.stringify(formData.shipping_data)
      );


      if (savedShipAddress) handleNext();
      else {
        axios
          .post(`/customerShipping/addShipping`, formData)
          .then(({ data }) => {
            localStorage.setItem("customerShipping_id", data.saveddata._id);
            handleNext();
          });
      }

      //saving gst for that customer
      axios
        .put(
          `https://api.theprintribe.com/api/customers/updatecustomer?id=${customerId}`,
          {
            data: { gst },
          }
        )
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };

  const { handleNext } = props;
  const [fullName, setFullName] = useState("");
  const [state, setState] = useState("");
  const[stateCode,setStateCode]=useState("")
  const [shippingType, setShippingType] = useState("");
  const [address1, setAddress1] = useState("");
  const [company, setCompany] = useState("");
  const [address2, setAddress2] = useState("");
  const [mobile, setMobile] = useState(0);
  const [country, setCountry] = useState("");
  const [retailShippingPprice, setRetailShippingPprice] = useState("");
  const [postalCode, setPostalCode] = useState(0);
  const [city, setCity] = useState("");

  //state to store shipping shipping
  const [shippingDetails, setShippingDetails] = useState("");
  const [shippingCompanies, setShippingCompanies] = useState();
  const [expectedDelivery, setExpectedDelivery] = useState("")
  const [shippingError, setShippingerror] = useState("");
  const [shippingErrorName, setShippingerrorName] = useState("");
  const [shippingErrorAddress1, setShippingerrorAddress1] = useState("");
  const [shippingErrorMobile, setShippingerrorMobile] = useState("");
  const [shippingErrorCity, setShippingerrorCity] = useState("");
  const [shippingErrorCompany, setShippingerrorCompany] = useState("");
  const [shippingErrorState, setShippingerrorState] = useState("");
  const [shippingErrorType, setShippingerrorType] = useState("");

  const [shippingErrorPostalCode, setShippingerrorPostalCode] = useState("");
  const [shippingErrorCountry, setShippingerrorCountry] = useState("");
  const [shippingErrorGST, setShippingerrorGST] = useState("");

  const [gst, setGst] = useState(null);
  var customizeProduct = JSON.parse(localStorage.getItem("customizeProduct"));

  //product quantity from LS
  const total_quantity = localStorage.getItem("total_quantity");
  useEffect(() => {
    console.log(country, "country")
    if (country == 'India') {
      setShippingType('domestic shipping')
    }
  }, [country])
  useEffect(() => {
    if (shippingType == 'domestic shipping') {
      setCountry('India')
    }

    if (shippingType == 'international') {
      console.log(shippingType, "shipping")

      setCountry('')
    }
  }, [shippingType])
  useEffect(() => {
    console.log(postalCode.toString().length);

    if (postalCode.toString().length > 1) {
      // console.log(postalCode.toString().length);
      setShippingerror("Invalid Postal Code");

      if (postalCode.toString().length === 6) {
        axios.get('https://api.theprintribe.com/api/customerShipping/getStatesAndCity/' + postalCode).then((res) => {
          setCity(res?.data?.PostOffice[0]?.District)
          setState(res?.data?.PostOffice[0]?.State)
          console.log(res?.data?.PostOffice[0]?.District, res?.data?.PostOffice[0],"code")
        })
        axios.get('/products/getproduct/'+customizeProduct[0].product_id).then(({data})=>{
          console.log(data.product.productdata[0].weight          ,"response")
        
        
        
          axios
          .get(
            `/customerShipping/getShipRocketCharges/${postalCode}/${total_quantity * data.product.productdata[0].weight 
            }`
          )
          .then(({ data }) => {
            if (data.status === 404) setShippingerror(data.message);
            else {
              setShippingerror("");
              setShippingDetails(data.data);
              setShippingCompanies(data.data.available_courier_companies);
            }
          })
          .catch((err) => {
            console.log(err);
          });
        })

      }
    } else if (postalCode.toString().length === 0) {
      console.log("shiiping error");
      setShippingerror("");
      setShippingDetails("");
      setShippingCompanies("");
      setCompany("");
      setRetailShippingPprice(0);
    }
  }, [postalCode]);

  //handle company name & it's retail shipping price
  // const handleCompany = (e) => {
  //   console.log(e.target.value)

  // };

  useEffect(() => {
    getAllCountries()
    //getting gst value from api if present
    let customerId = localStorage.getItem("customerId");
    axios
      .get(
        `https://api.theprintribe.com/api/customers/getCustomerbyid?id=${customerId}`
      )
      .then((res) => {
        // console.log(res.data.customerRecordData)
        if (res.data.customerRecordData.gst) {
          setGst(res.data.customerRecordData.gst);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  function order(a, b) {
    return a.rating < b.rating ? -1 : (a.rating > b.rating ? 1 : 0);
  }
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
        {savedShippingData && (
          <span
            style={{
              width: "200px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <input
              class="form-check-input"
              type="checkbox"
              id="checkboxNoLabel"
              checked={savedShipAddress}
              onChange={() => setSavedShipAddress(!savedShipAddress)}
            />
            <span style={{ marginTop: "3px" }}>Use Your Saved Address</span>
          </span>
        )}

        <div class="row mt-4">
          {fieldsArray.map((ele, index) => {
            switch (ele.diff) {
              case "Shipping Type":
                return (
                  <div class="col-12 col-sm-6 mt-2">
                    <label for="basic-url" class="form-label mb-1">
                      <b>{ele.title}</b>{" "}

                      <span class="text-danger ">*</span>

                    </label>
                    <div class="input-group mb-2">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        onChange={(e) => {
                          setShippingType(e.target.value);
                          setShippingerrorType("");
                        }}
                        value={shippingType}
                        required
                      >
                        <option selected>select Shipping Type</option>
                        <option value="domestic shipping">Domestic shipping</option>
                        <option value="self">Self shipping</option>
                        <option value="international">International shiping</option>
                      </select>
                    </div>
                    {shippingErrorType === "Please Select Shipping Type" && (
                      <span class="text-danger d-block">
                        {shippingErrorType}
                      </span>
                    )}
                  </div>
                );
              case false:
                return (
                  <>
                    <div class="col-12 col-sm-6 mt-2">
                      {/* <div class="mt-2"> */}
                      <label for="basic-url" class="form-label mb-1">
                        <b>{ele.title}</b>{" "}

                        <span class="text-danger">*</span>
                      </label>
                      <div class="input-group mb-2">
                        <input
                          type="text"
                          class="form-control"
                          onChange={(e) => {
                            setFullName(e.target.value);
                            setShippingerrorName("");
                          }}
                          value={fullName}
                          required
                        />
                      </div>

                      <span class="text-danger d-block">
                        {shippingErrorName}
                      </span>
                    </div>
                  </>
                );

              case "address1":
                return (
                  <>
                    <div class="col-12 col-sm-6 mt-2">
                      {/* <div class="mt-2"> */}
                      <label for="basic-url" class="form-label mb-1">
                        <b>{ele.title}</b>{" "}

                        <span class="text-danger ">*</span>
                      </label>
                      <div class="input-group mb-2">
                        <input
                          type="text"
                          class="form-control"
                          onChange={(e) => {
                            setAddress1(e.target.value);
                            setShippingerrorAddress1("");
                          }}
                          value={address1}
                          required
                        />
                      </div>
                      {shippingErrorAddress1 ===
                        "Address is not long enough" && (
                          <span class="text-danger d-block">
                            {shippingErrorAddress1}
                          </span>
                        )}
                    </div>
                  </>
                );
              case "address2":
                return (
                  <>
                    <div class="col-12 col-sm-6 mt-2">
                      {/* <div class="mt-2"> */}
                      <label for="basic-url" class="form-label mb-1">
                        <b>{ele.title}</b>
                      </label>
                      <div class="input-group mb-2">
                        <input
                          type="text"
                          class="form-control"
                          onChange={(e) => setAddress2(e.target.value)}
                          value={address2}
                        />
                      </div>
                    </div>
                  </>
                );
              case "company":
                return (
                  <>
                    {(shippingType == "domestic shipping" || shippingType == "international") && <div class="col-12 col-sm-6 mt-2">
                      {/* <div class="mt-2"> */}
                      <label for="basic-url" class="form-label mb-1">
                        <b>{ele.title}</b>{" "}

                        <span class="text-danger ">*</span>
                      </label>
                      <div class="input-group mb-2">
                        {shippingDetails ? (
                          <>
                            {
                              <select
                                class="form-select"
                                aria-label="Default select example"
                                onChange={(e) => {
                                  setCompany(e.target.value);
                                  setShippingerrorCompany("");

                                }}
                                onClick={() => {
                                  shippingCompanies.find((curr) => {
                                    if (company === "clear")
                                      setRetailShippingPprice("");
                                    else if (curr.courier_name === company) {
                                      setExpectedDelivery(curr.estimated_delivery_days)
                                      setRetailShippingPprice(curr.rate);
                                      localStorage.setItem(
                                        "shipping_charges",
                                        curr.rate
                                      );
                                      localStorage.setItem(
                                        "courier_id",
                                        curr.courier_company_id
                                      );
                                    }
                                  });
                                }}
                                required
                              >
                                {savedShipAddress && company !== "" ? (
                                  <option value={company}>{company}</option>
                                ) : (
                                  <option value="clear">
                                    Select Company...{" "}
                                  </option>
                                )}

                                {shippingCompanies &&
                                  shippingCompanies.sort(order).map((curr, index) => (
                                    <option
                                      type="text"
                                      class="form-control"
                                      value={curr.courier_name}
                                    >
                                      {curr.courier_name}{`( ${curr.rating})`}{typeof (curr.rating)}
                                    </option>
                                  ))}
                              </select>
                            }
                          </>
                        ) : (
                          <input
                            type="text"
                            class="form-control"
                            onChange={(e) => setCompany(e.target.value)}
                          />
                        )}
                      </div>
                      {shippingErrorCompany === "Company field is required" && (
                        <span class="text-danger d-block">
                          {shippingErrorCompany}
                        </span>
                      )}
                    </div>}
                  </>
                );
              case "city":
                return (
                  <>
                    <div class="col-12 col-sm-6 mt-2">
                      {/* <div class="mt-2"> */}
                      <label for="basic-url" class="form-label mb-1">
                        <b>{ele.title}</b>{" "}

                        <span class="text-danger ">*</span>

                      </label>
                      <div class="input-group mb-2">
                        <input
                          type="text"
                          class="form-control"
                          onChange={(e) => {
                            setCity(e.target.value);
                            setShippingerrorCity("");
                          }}
                          value={city}
                          required
                        />
                      </div>

                      <span class="text-danger d-block">
                        {shippingErrorCity}
                      </span>
                    </div>
                  </>
                );
              case "postalCode":
                return (
                  <>
                    <div class="col-12 col-sm-6 mt-2">
                      {/* <div class="mt-2"> */}
                      <label for="basic-url" class="form-label mb-1">
                        <b>{ele.title}</b>{" "}

                        <span class="text-danger ">*</span>
                      </label>
                      <div class="input-group mb-2">
                        <input
                          type="text"
                          class="form-control"
                          onChange={(e) => {
                            setPostalCode(e.target.value);
                            setShippingerrorPostalCode("");
                          }}
                          value={postalCode > 0 ? postalCode : ""}
                          required
                        />
                      </div>

                      <span class="text-danger d-block">{shippingError}</span>

                      {shippingErrorPostalCode ===
                        "Postal Code field is required" && (
                          <span class="text-danger d-block">
                            {shippingErrorPostalCode}
                          </span>
                        )}
                    </div>
                  </>
                );
              case "gst":
                return (
                  <>
                    <div class="col-12 col-sm-6 mt-2">
                      {/* <div class="mt-2"> */}
                      <label for="basic-url" class="form-label mb-1">
                        <b>{ele.title}</b>{" "}

                        <span class="text-danger ">*</span>

                      </label>
                      <div class="input-group mb-2">
                        <input
                          type="test"
                          class="form-control"
                          onChange={(e) => {
                            setGst(e.target.value);
                          }}
                          value={gst}
                          required
                        />
                      </div>
                      {shippingErrorGST === "Gst field is required" && (
                        <span class="text-danger d-block">
                          {shippingErrorGST}
                        </span>
                      )}
                    </div>
                  </>
                );
              case "state":
                return (
                  <>
                    {country == 'India' && <div class="col-12 col-sm-6 mt-2">
                      <label for="basic-url" class="form-label mb-1">
                        <b>{ele.title}</b>{" "}

                        <span class="text-danger ">*</span>

                      </label>
                      <div class="input-group mb-2">
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          onChange={(e) => {
const code =e.target.options[e.target.options['selectedIndex']].getAttribute('code')
                            setState(e.target.value);

                            setStateCode(code);
                            setShippingerrorState("");
                          }}
                          value={state}
                          required
                        >
                          <option selected>Open this select menu</option>
                          {stateList.map(item => <option code={item.code} value={item.name}>{item.name}</option>)}
                          {/* <option value="Karnataka">Karnataka</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Rajasthan">Rajasthan</option> */}
                        </select>
                      </div>
                      {shippingErrorState === "State field is required" && (
                        <span class="text-danger d-block">
                          {shippingErrorState}
                        </span>
                      )}
                    </div>}</>
                );
              case "mobile":
                return (
                  <>
                    <div class="col-12 col-sm-6 mt-2">
                      <label for="basic-url" class="form-label mb-1">
                        <b>{ele.title}</b>{" "}

                        <span class="text-danger ">* </span>

                      </label>
                      <div class="input-group mb-2">
                        <button
                          class="btn btn-outline-secondary dropdown-toggle form-control w-25"
                          type="button"
                          style={{ border: "1px solid #CED4DA" }}
                          required
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
                        <input
                          type="text"
                          class="form-control w-75"
                          onChange={(e) => {
                            setMobile(e.target.value);
                            setShippingerrorMobile("");
                          }}
                          value={mobile > 0 ? mobile : ""}
                        />
                      </div>
                      {shippingErrorMobile === "Phone number invalid" && (
                        <span class="text-danger d-block">
                          {shippingErrorMobile}
                        </span>
                      )}
                    </div>
                  </>
                );
              case "country":
                return (
                  <div class="col-12 col-sm-6 mt-2">
                    <label for="basic-url" class="form-label mb-1">
                      <b>{ele.title}</b>{" "}

                      <span class="text-danger ">*</span>

                    </label>
                    <div class="input-group mb-2">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        onChange={(e) => {
                          setCountry(e.target.value);
                          setShippingerrorCountry("");
                        }}
                        value={country}
                        required
                      >
                        <option selected>Open this select menu</option>
                        {countries && countries.length && countries.map(data => <option value={data.name}>{data.name}</option>)}


                      </select>
                    </div>
                    {shippingErrorCountry === "Country field is required" && (
                      <span class="text-danger d-block">
                        {shippingErrorCountry}
                      </span>
                    )}
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
                        {shippingDetails ? (
                          <input
                            disabled
                            value={retailShippingPprice}
                            class="form-control"
                            onChange={(e) =>
                              setRetailShippingPprice(e.target.value)
                            }
                          />
                        ) : (
                          <input
                            type="text"
                            value=""
                            disabled
                            class="form-control"
                            onChange={(e) =>
                              setRetailShippingPprice(e.target.value)
                            }
                          />
                        )}
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
              <button
                class="btn btn-lg btn-danger"
                style={{
                  backgroundColor: "#EE3C2F",
                  color: "#fff",
                  fontWeight: "bold",
                  border: "none",
                }}
                onClick={() => formSubmit()}
              >
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
