import { Link, useLocation, useParams } from 'react-router-dom';
import React,{useEffect, useState} from 'react'

import axios from 'axios'
import img from '../assets/mensclothing.PNG'
import img1 from '../assets/womensclothing.PNG'
import styles from '../styles/catalog.module.css'

require('dotenv').config();

const Catalog = () => {

    const [products, setproducts] = useState([])

    const getPost = ()=>{
         axios.get('/categories/getCategories')
            .then(({ data }) => {
                setproducts(data.maincat.categories);

            })
            .catch(resp => {
                console.log(resp);
            })
            
    }

    useEffect(() => {
       getPost()
    //    console.log(products)
    }, [])


    return (
        <>
              <div className={`container `}>
             <div className="row mt-3 mb-3 mx-0">
             {products.map((category)=>{
                return <div className="col-lg-4 col-md-6 col-sm-12 p-2" key={category.id}>
                <div className={`${styles.catalogcontainer}`} >
                    <Link to={`/products${category.url}/${category.id}`} className={styles.catalogText}>
                        <img class={`${styles.cardImg}`} src={process.env.REACT_APP_IMAGE_BASE_URL+category.img} alt={category.name} />
                        <div className={styles.card_body}>
                            <p class="card-text fw-bold">{category.name}</p>
                        </div></Link>
                </div>
            </div>
            })}
            </div>
            </div>
        </>
    )
}

export default Catalog






// export default class Catalog extends React.Component {
    
//     constructor() {
//         super();
//         this.state = {
//             categories: []
//         };
//     }
//     componentWillMount() {
// //         const product = URLSearchParams.get('category')
// // console.log(product);

//         this.getCategories();
//     }
//     getCategories() {
//         axios.get('/categories/getCategories')
//             .then(({ data }) => {
//                 // console.log(data.maincat.categories);
//                 this.state.categories = data.maincat.categories;
//                 console.log(this.state.categories);
//             })
//             .catch(resp => {
//                 console.log(resp);
//             })
//     }
//     renderCols() {
//         const cols = this.state.categories.map((category, index) => {
//             console.log(category);

//             <div className="col-lg-4 col-md-6 col-sm-12 p-2" key={category.id}>
//                 <div className={`card ${styles.catalogcontainer}`} >
//                     <Link to="/product-page" className={styles.catalogText}>
//                         <img class="card-img-top" src={process.env.REACT_APP_IMAGE_BASE_URL + category.img} alt={category.name} />
//                         <div class="card-body">
//                             <p class="card-text fw-bold">{category.name}</p>
//                         </div></Link>
//                 </div>
//             </div>

//         })
//         return cols;
//     }
//     render() {

//         return (
//             <>
//                 <div className={`container `}>
//                     <div className="row mt-3 mb-3 mx-0">
//                         {this.renderCols()}
//                         <div className="col-lg-4 col-md-6 col-sm-12 p-2">
//                             <div className={`card ${styles.catalogcontainer}`} >
//                                 <Link to="/product-page" className={styles.catalogText}>
//                                     <img class="card-img-top" src={img} alt="mensclothing" />
//                                     <div class="card-body">
//                                         <p class="card-text fw-bold">Men's Clothing</p>
//                                     </div></Link>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6 col-sm-12 p-2">
//                             <div className={`card ${styles.catalogcontainer}`}>
//                                 <Link to="/product-page" className={styles.catalogText}>

//                                     <img class="card-img-top" src={img1} alt="womensclothing" />
//                                     <div class="card-body">
//                                         <p class="card-text fw-bold">Women's Clothing</p>
//                                     </div>
//                                 </Link>
//                             </div>
//                         </div>
                       
//                         {/* <div className="col-lg-4 col-md-6 col-sm-12 p-2">
//                             <div className={`card ${styles.catalogcontainer}`}>
//                                 <Link to="/product-page" className={styles.catalogText}>

//                                     <img class="card-img-top" src={img} alt="mensclothing" />
//                                     <div class="card-body">
//                                         <p class="card-text fw-bold">Accessories</p>
//                                     </div>
//                                 </Link>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6 col-sm-12 p-2">
//                             <div className={`card ${styles.catalogcontainer}`}>
//                                 <Link to="/product-page" className={styles.catalogText}>

//                                     <img class="card-img-top" src={img1} alt="womensclothing" />
//                                     <div class="card-body">
//                                         <p class="card-text fw-bold">Home & Living</p>
//                                     </div>
//                                 </Link>
//                             </div>
//                         </div> */}

//                     </div>
//                 </div>
//             </>
//         )
//     }
// }

