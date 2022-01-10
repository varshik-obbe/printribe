import React from "react";
import Layout from "../components/layout";
import classes from '../styles/account.module.css'
import {AiFillCamera} from 'react-icons/all'
import account from '../assets/account.png'

function Account() {

    const [ btnVisible, setBtnVisible ] = React.useState(false)

    return (
        <Layout>
            <div className={[classes.mainContainer, 'mb-5'].join(' ')}>
                <div className="container-lg" style={{padding: '0 20px'}}>
                    <div class={[classes.topProfileDiv, 'row bg-primary'].join(' ')}>
                        <div class='col-12'>
                            {
                                btnVisible ?
                                <button
                                class='btn btn-outline-dark'
                                style={{border: '0'}}
                                onMouseLeave={() => setBtnVisible(false)}
                            >
                                <div style={{color: '#FFF'}} class='d-flex align-items-center'>
                                    <AiFillCamera style={{fontSize: '25px', marginRight: '10px', color:'#fff'}} />
                                    <span>Change Photo</span>
                                </div>
                            </button>
                            :
                            <button
                                class='btn btn-outline-dark'
                                style={{border: '0'}}
                                onMouseOver={() => setBtnVisible(true)}
                            >
                                <div style={{color: '#FFF'}} class='d-flex align-items-center'>
                                    <AiFillCamera style={{fontSize: '25px', color:'#fff'}} />
                                </div>
                            </button>
                            }
                        </div>
                        <div class='col-12 col-md-6 mt-5 d-flex align-items-end'>
                            <img alt='' src={account} style={{height: '100px', width: '100px', objectFit:'contain', borderRadius: '50%'}} />
                            <h4 class='ms-4' style={{color:'#FFF'}}>User Name</h4>
                        </div>
                    </div>
                </div>
                <div className="container-lg" style={{padding: '0 40px'}}>
                    <div>
                        <button className="btn" style={{ height: '50px', background: 'transparent', borderTop: '5px solid rgb(31, 100, 159)', borderRadius: "0" }}>My Account</button>
                        <div className="row mt-5">
                            <div className="col-12 col-sm-6">
                                <h4>My Account</h4>
                                <label>View and edit your personal info below.</label>
                            </div>
                            <div className="col-12 col-sm-6 mt-3">
                                <div className=" d-flex justify-content-end">
                                    <button className="btn btn-outline-secondary" style={{width: '120px'}}>Discard</button>
                                    <button className="btn btn-secondary ms-3" style={{width: '120px'}}>Update Info</button>
                                </div>
                            </div>
                        </div>
                        <hr class='my-4' />
                        <div className="row">
                            <label class='fs-5'>Display Info</label>
                            <label class='mt-2'>Your profile card is visible to all members of this site</label>
                            <div class='col-12 col-sm-6 mt-4'>
                                <label for="basic-url" class="form-label">Your vanity URL *</label>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control border-dark" id="basic-url" aria-describedby="basic-addon3" required />
                                </div>
                            </div>
                        </div>
                        <hr class='my-4' />
                        <div className="row">
                            <label class='fs-5'>Account</label>
                            <label class='mt-2'>Update & Edit the information you share with the community</label>
                            <div class='d-flex flex-column mt-4'>
                                <label>Login Email:</label>
                                <label>abcxyz123@gmail.com</label>
                                <label style={{color: '#666'}}>Your Login email can't be changed</label>
                            </div>
                            <div class='row mt-3'>
                                <div class='col-12 col-sm-6'>
                                    <label for="basic-url" class="form-label">First Name</label>
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control border-dark" id="basic-url" aria-describedby="basic-addon3" required />
                                    </div>
                                </div>
                                <div class='col-12 col-sm-6'>
                                    <label for="basic-url" class="form-label">Last Name</label>
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control border-dark" id="basic-url" aria-describedby="basic-addon3" required />
                                    </div>
                                </div>
                                <div class='col-12 col-sm-6'>
                                    <label for="basic-url" class="form-label">Email</label>
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control border-dark" id="basic-url" aria-describedby="basic-addon3" required />
                                    </div>
                                </div>
                                <div class='col-12 col-sm-6'>
                                    <label for="basic-url" class="form-label">Phone</label>
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control border-dark" id="basic-url" aria-describedby="basic-addon3" required />
                                    </div>
                                </div>
                                <div class='col-12 mt-3'>
                                    <div className=" d-flex justify-content-end">
                                        <button className="btn btn-outline-secondary" style={{width: '120px'}}>Discard</button>
                                        <button className="btn btn-secondary ms-3" style={{width: '120px'}}>Update Info</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Account;