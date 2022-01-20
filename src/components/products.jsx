import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import React, { useEffect, useRef, useState } from "react";
import { default as img1, default as img3 } from "../assets/tshirtblack.PNG";

import axios from "axios"
import img2 from "../assets/tshirtblue.PNG";
import style from "../styles/style.css";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2'

const Products = () => {

  const { prodid } = useParams()
  const [quantity, setQuantity] = useState("1")
  const [product, setproduct] = useState({})
  const [color, setColor] = useState("")
  const [size, setSize] = useState("")
  const [productName, setProductName] = useState("")
  const [colorId, setColorId] = useState('0');
  const [isLogged,setIsLogged] = useState(false);
  const [isCustomizeable,setIsCustomizeable] = useState(false);


  const getProduct = () => {
    if(checkLogin()){
      setIsLogged(true);
    }else{
      setIsLogged(false);
    }
    axios.get(`/products/getproduct/${prodid}`)
      .then(({ data }) => {
        console.log(data.product.productdata[0]);
        setproduct(data.product.productdata[0])
        setProductName(data.product.productdata[0].title);
      })
      .catch(({ err }) => {
        console.log(err)
      })

      axios.get(`https://api.theprintribe.com/api/zakekeVariant/isZakekeProduct/${prodid}`)
      .then(({data})=>{
        if(data.success!=undefined & data.success!=null & data.success){
          setIsCustomizeable(true);
          console.log(data.success)
        }
      }).catch(({err})=>console.log(err));
  }

  const checkColorAndSize = ()=>{
    if(color!="" & color!=null & color!=undefined & size!="" & size!=null & size!=undefined ){
      return true;
    }else{
      return false;
    }
  }

  const checkLogin = () =>{
    const token = localStorage.getItem('token');
    const customerId = localStorage.getItem('customerId');
    if(token!="" & token!=null & token!=undefined & customerId!="" & customerId!=null & customerId!=undefined ){
      return true;
    }else{
      return false;
    }
  }

  const customize = (evt) => {
    if(checkColorAndSize()){
    if(checkLogin()){
    evt.preventDefault();
    var formCustomizer =
      document.getElementById("frmCustomizer");
    // var formProductPage = document.getElementById("{ idFormProduct }");
    formCustomizer.elements["productid"].value = color + product.id;
    console.log(formCustomizer.elements["productid"].value);
    formCustomizer.elements["quantity"].value = quantity;
    formCustomizer.elements["masterProductId"].value = product.id;
    formCustomizer.elements["color"].value = color;
    formCustomizer.elements["colorId"].value = colorId;
    formCustomizer.elements["title"].value = productName;
    formCustomizer.submit();
    }else{
      window.location.href="/signin";
    }
    }else{
      Swal.fire(
        'Error',
        'Please Select all the options',
        'error'
      )
    }
  }

  const handleSizeChange = (e) => {
    console.log(e.target.id)
    setSize(e.target.id)
    const color = document.getElementById(e.target.id).style.backgroundColor
    for(var i=0;i<product.productsizes.length;i++){
      document.getElementById(product.productsizes[i]).style.backgroundColor = "white"
      document.getElementById(product.productsizes[i]).style.color = "black"
    }
    if (color !== "black") {
      document.getElementById(e.target.id).style.backgroundColor = "black"
      document.getElementById(e.target.id).style.color = "white"
    } else {
      document.getElementById(e.target.id).style.backgroundColor = "white"
      document.getElementById(e.target.id).style.color = "black"
    }
  }

  const handleColorsclick = (e) => {

    const color = document.getElementById(e.target.id).style.border

    for(var i=0;i<product.productcolors.length;i++){
      document.getElementById(product.productcolors[i].colorName).style.border = "none";
    }
  
    if (color === "none") {
      console.log(e.target.id)
      console.log(color)
      document.getElementById(e.target.id).style.border = "2px solid black";
      //  document.getElementById(e.target.id).style.color ="white"
    } else {
      console.log(e.target.id)
      console.log(color)
      document.getElementById(e.target.id).style.border = "1px solid black"
      // document.getElementById(e.target.id).style.color ="black"
    }
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <>
      <div className="container ">
        <div className="row ">
          <div className="col-lg-6 col-md-12">
            <div className="row h-100">
              <div className="d-flex">
                <div className="ti">
                  <div>
                    <img src={img1} />
                  </div>
                  <div>
                    <img src={img2} />
                  </div>
                  <div>
                    <img src={img3} />
                  </div>
                  <div>
                    <img src={img1} />
                  </div>
                  <div>
                    <img src={img2} />
                  </div>
                  <div>
                    <img src={img3} />
                  </div>
                </div>

                <div className="fi">
                  <img src={process.env.REACT_APP_IMAGE_BASE_URL +'/'+ product.img} alt={product.title} />
                  {/* {console.log(process.env.REACT_APP_IMAGE_BASE_URL + product.img)} */}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 p-5">
            <p className="h4 fw-bold mb-3">{product.title}</p>
            <p className="mt-3 fw-bold">{product.description}</p>
            {/* <p className="btn btn-md btn-light fw-bold  mb-3 border-dark">
                Printing (DTG)
              </p> */}
            <p className="mt-3 fw-bold">Choose color</p>

            <div className="d-flex mb-3">
              {
                product.productcolors !== undefined ? product.productcolors.map((item, index) => {
                  return <div id={item.colorName}
                    className="mx-1 colors shadow-lg border"
                    style={{ height: "20px", width: "20px", borderRadius: "5px", backgroundColor: item.colorName,display:'flex',justifyContent:'center',alignItems:'center'}}
                    onClick={(e) => {
                      handleColorsclick(e);
                      setColor(item.colorName);
                      setColorId(index + 1);
                    }}
                  >
                    {
                      // console.log(color,item.colorName)
                      color===item.colorName?(<i class="fa fa-check" aria-hidden="true"></i>):(<></>)
                    }
                  </div>
                }) : null
              }

            </div>
            <div className="d-flex mt-3 mb-3">
              <div className="me-5 fw-bold">Choose size</div>
              <div className="mx-5 text-info">Size chart</div>
            </div>
            <div className="d-flex mt-3 mb-3">
              <div className="d-flex mb-3">
                {
                  product.productsizes!==undefined?product.productsizes.map((item)=>(
                  <div id={item} className="border p-2 fw-bold text-center mx-1 sizes" onClick={(e) => handleSizeChange(e)}>
                  {item}
                </div>
                  )):(<>Sizes Not Found</>)
                }
              </div>

            </div>

            <div className="d-flex mt-3 mb-3 fw-bold">
              <label htmlFor="quantity">Quantity</label>
              <input className="border" style={{ textAlign: "center", marginLeft: "15px", borderRadius: "5px", width: "50px", height: "30px"}}
                name="" id="" cols="50" rows="1" value={quantity}
                onChange={event => setQuantity(event.target.value)} />
            </div>


            <div className=""></div>
            <p className="fw-bold h3 mt-3 mb-3">₹{product.price}</p>
            {
              isLogged?(isCustomizeable?
              (<button className="fw-bold h3 text-light btn btn-danger px-3" id="btnCustomize" onClick={(e) => customize(e)}>Start Designing</button>)
              :(<button className="fw-bold h3 text-light btn btn-danger px-3" id="btnCustomize">Add to cart</button>))
              :(<button className="fw-bold h3 text-light btn btn-danger px-3" id="btnCustomize" onClick={(e) => customize(e)}>Start Designing</button>)
            }
          </div>
        </div>
      </div>
      <div>
        <form id="frmCustomizer" action="/customizer">
          <input type="hidden" name="quantity" value={1} />
          <input type="hidden" name="productid" value={"object123"} />
          <input type="hidden" name="masterProductId" value={"object123"} />
          <input type="hidden" name="color" value={1} />
          <input type="hidden" name="colorId" value={1} />
          <input type="hidden" name="title" value={1} />
        </form>
      </div>

    </>
  );
}




export default Products
