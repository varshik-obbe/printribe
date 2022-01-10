import React from "react";

// ---- import Google Icon from ReactIcons ---- //
import {FcGoogle} from "react-icons/all";

// ---- import PNG from Assets ---- //
import PrintribeLogo from "../assets/Printribe-logo.png";
import ClothingRock from "../assets/Clothing Rack.png";

// ---- import Styles ---- //
import classes from "../styles/signinsignup.module.css";

function Signup() {
	const handleGoogleSignIn = () => {
		// Google SignUp Event
		alert("Google SignUp");
	};

	const handleEmailSignIn = () => {
		// Email Sign Up Event
		alert("Email Sign In");
	};

	const handleChangeEmail = () => {
		// Change Email Event
	};

	const handleChangeUsername = () => {
		// Change Username Event
	};

	const handleChangePassword = () => {
		// Change Password Event
	};

	const handleChangeConfirmPassword = () => {
		// Change Confirm Password Event
	};

	const handleSignUp = () => {
		// SignIn Button Press
		alert("Sign in");
	};

	const handleGoogleSignUp = () => {
		// GoogleSignIn
		alert("Google SignIn");
	};

	return (
		// ---- Main Container ---- //
		<div className="container-fluid">
			<div className="row">
				<div className="col-12 px-5 py-5">
					<img src={PrintribeLogo} alt="" style={{height: "40px"}} />
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
									onClick={handleGoogleSignIn} // Sign Up with Google Click Event //
								>
									<span>
										<FcGoogle style={{fontSize: "25px"}} /> Sign in with Google
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
										marginTop: "10px",
									}}
									onClick={handleEmailSignIn} // Sign Up with Email Click Event //
								>
									Sign in with your email
								</button>
							</div>
							<div class="d-flex mt-3">
								<span>Don't Have an Account?</span>
								<span class="mx-4">Sign up now</span>
							</div>
							{/* ----- Email Input ----- */}
							<div class="mt-2">
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
							{/* ----- Username Input ----- */}
							<div>
								<label for="basic-url" class="form-label mb-0">
									Username
								</label>
								<div class="input-group mb-2">
									<input
										type="text"
										class="form-control"
										id="basic-url"
										aria-describedby="basic-addon3"
										onChange={handleChangeUsername} // Username Change Event //
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
							{/* ----- Confirm Password Input ----- */}
							<div>
								<label for="basic-url" class="form-label mb-0">
									Confirm Password
								</label>
								<div class="input-group mb-2">
									<input
										type="text"
										class="form-control"
										id="basic-url"
										aria-describedby="basic-addon3"
										onChange={handleChangeConfirmPassword} // Confirm Password Change Event //
									/>
								</div>
							</div>
							{/* ----- SignIn Button ----- */}
							<button
								type="button"
								class="btn w-100"
								style={{background: "#EE3C2F", color: "#FFF"}}
								onClick={handleSignUp} // Sign In Click Event //
							>
								Sign Up
							</button>
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
								onClick={handleGoogleSignUp}
							>
								<span>
									<FcGoogle style={{fontSize: "25px"}} /> Sign up with Google
								</span>
							</button>
						</div>
					</div>
					<div className="col-12 col-sm-12 col-md-6 col-lg-6">
						<img
							alt=""
							class="my-2"
							src={ClothingRock}
							style={{height: "100%", width: "100%", objectFit: "cover"}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Signup;
