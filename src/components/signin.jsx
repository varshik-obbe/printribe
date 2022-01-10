import React from "react";

// ---- import Google Icon from ReactIcons ---- //
import {FcGoogle} from "react-icons/all";

// ---- import PNG from Assets ---- //
import PrintribeLogo from "../assets/Printribe-logo.png";
import ClothingRock from "../assets/Clothing Rack.png";

// ---- import Styles ---- //
import classes from "../styles/signinsignup.module.css";

function Signin() {
	const handleGoogleSignUp = () => {
		// Google SignUp Event
		alert("Google SignUp");
	};

	const handleEmailSignUp = () => {
		// Email Sign Up Event
		alert("Email Sign Up");
	};

	const handleChangeEmail = () => {
		// Change Email Event
	};

	const handleChangePassword = () => {
		// Change Password Event
	};

	const handleSignIn = () => {
		// SignIn Button Press
		alert("Sign in");
	};

	const handleForgotPassword = () => {
		// ForgotPassword
		alert("Forgot Password");
	};

	const handleGoogleSignIn = () => {
		// GoogleSignIn
		alert("Google SignIn");
	};

	return (
		// ---- Main Container ---- //
		<div className="container-fluid" style={{minHeight: "500px"}}>
			<div className="row">
				<div className="col-12 px-5 py-5">
					<img src={PrintribeLogo} alt="" style={{height: "45px"}} />
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-12 col-sm-12 col-md-6 col-lg-6">
						<div
							// className="d-flex flex-column align-items-center"
							className={classes.divForm}
						>
							<h2 class="fw-bold">Sign up to Printribe</h2>
							{/* ----- Google Sign Up Button ----- */}
							<div>
								<button
									type="button"
									class="btn btn-outline-secondary w-100"
									style={{color: "#000", marginTop: "10px"}}
									onClick={handleGoogleSignUp} // Sign Up with Google Click Event //
								>
									<span>
										<FcGoogle style={{fontSize: "25px"}} /> Sign up with Google
									</span>
								</button>
							</div>
							{/* ----- Sign Up with Email Button ----- */}
							<div>
								<button
									type="button"
									class="btn btn-primary w-100 fw-bold"
									style={{
										color: "#FFF",
										background: "#1F649F",
										marginTop: "15px",
									}}
									onClick={handleEmailSignUp} // Sign Up with Email Click Event //
								>
									Sign up with your email
								</button>
							</div>
							<br />
							<div class="d-flex">
								<span>Already a member?</span>
								<span class="mx-4">Sign in now</span>
							</div>
							<br />
							{/* ----- Email Input ----- */}
							<div>
								<label for="basic-url" class="form-label mb-0">
									Email
								</label>
								<div class="input-group mb-2">
									<input
										type="text"
										class="form-control"
										id="basic-url"
										aria-describedby="basic-addon3"
										onChange={handleChangeEmail} // Email Change Event //
									/>
								</div>
							</div>
							{/* ----- Password Input ----- */}
							<div>
								<label for="basic-url" class="form-label mb-0">
									Password
								</label>
								<div class="input-group mb-2">
									<input
										type="text"
										class="form-control"
										id="basic-url"
										aria-describedby="basic-addon3"
										onChange={handleChangePassword} // Password Change Event //
									/>
								</div>
							</div>
							<div class="d-flex justify-content-between">
								{/* ----- SignIn Button ----- */}
								<button
									type="button"
									class="btn w-25"
									style={{background: "#EE3C2F", color: "#FFF"}}
									onClick={handleSignIn} // Sign In Click Event //
								>
									Sign in
								</button>

								{/* ----- Forgot Password Button ----- */}
								<button
									type="button"
									style={{
										color: "#000",
										border: "0",
										background: "transparent",
									}}
									onClick={handleForgotPassword} // Forgot Password Click Event //
								>
									Forgot Password?
								</button>
							</div>
							<div class="d-flex align-items-center">
								<hr class="w-100" />
								<span class="mx-3">or</span>
								<hr class="w-100" />
							</div>

							{/* ----- Sign in with Google Button ----- */}
							<button
								type="button"
								class="btn btn-outline-secondary w-100"
								style={{color: "#000"}}
								onClick={handleGoogleSignIn}
							>
								<span>
									<FcGoogle style={{fontSize: "25px"}} /> Sign in with Google
								</span>
							</button>
						</div>
					</div>
					<div className="col-12 col-sm-12 col-md-6 col-lg-6">
						<img
							alt=""
							class="my-5"
							src={ClothingRock}
							style={{height: "100%", width: "100%", objectFit: "cover"}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Signin;
