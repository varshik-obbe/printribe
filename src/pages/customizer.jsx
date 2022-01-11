import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';


export default class customizer extends React.Component{
    
    render(){
        return(<>
        <Header/>
        <div class="container">
            <div id="zakeke-container"></div>
        </div>
        <script src="https://portal.zakeke.com/scripts/config.js"></script>
        <script src="https://portal.zakeke.com/scripts/integration/api/customizer.js"></script>
        <Footer/>
        </>)
    }
}
