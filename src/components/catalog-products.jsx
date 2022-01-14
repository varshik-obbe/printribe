import React,{useState,useEffect} from 'react'
import axios from "axios"
import styles from '../styles/catalog.module.css'
import { useParams ,Link } from 'react-router-dom'

const Catalogproducts = () => {

    const {productid} = useParams()
    const [products, setproducts] = useState([])
    const [collection, setcollection] = useState([])

    const getPost = ()=>{
        console.log("reached")
         axios.get('/products/getProducts')
            .then(({ data }) => {
                console.log(data.maincat.categories)
                // setproducts(data.maincat.categories);
                data.maincat.categories.map((product)=>{
           product.subCategories.map((subproduct)=>{
              
                   
                        if (subproduct.products) {
                            if(subproduct.id === productid){
                                setcollection(subproduct.products)
                            console.log(subproduct.products)
                            }
                        }
                   subproduct.subsubCategories.map((subsubproduct)=>{
                       if (subsubproduct.id === productid) {
                           if (subsubproduct.products) {
                               setcollection(subsubproduct.products) 
                               console.log(subsubproduct.products)
                           }
                           
                       }
                   })
               
           })
       })
            })
            .catch(resp => {
                console.log(resp);
            })
            
    }



    useEffect(() => {
       getPost()
    }, [])

    return (
        <>
           <div className={`container `}>
             <div className="row mt-3 mb-3 mx-0">
            {collection.map((category)=>{
                return <div className="col-lg-4 col-md-6 col-sm-12 p-2" key={category.id}>
                <div className={`card ${styles.catalogcontainer}`} >
                    <Link to={`/product-page/${category.id}`} className={styles.catalogText}>
                        <img class="card-img-top" src={process.env.REACT_APP_IMAGE_BASE_URL+category.cover_img} alt={category.name} />
                        <div class="card-body">
                            <p class="card-text fw-bold">{category.title}</p>
                        </div></Link>
                </div>
            </div>
            })}
            </div>
            </div> 
        </>
    )
}

export default Catalogproducts
