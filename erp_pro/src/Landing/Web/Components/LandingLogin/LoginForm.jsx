import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../../../assets/Landing/css/LandingLogin/LandingLogin.css'
import Logo from '../../../../assets/Landing/img/Landing/Logo.png'
import '@fortawesome/fontawesome-free/css/all.min.css';

function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:8081/LandingLogin', {
                email: data.email,
                password: data.password,
            });

            if (response.status === 200) {
                // Show modal on successful login
                setIsModalVisible(true);
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setErrorMessage('Invalid email or password');
            } else {
                setErrorMessage('An error occurred, please try again later');
            }
        }
    };

    const closeModal = () => {
        setIsModalVisible(false);
        navigate('/logindashboard'); // Navigate after closing the modal
    };

    return (
        <div>
            <div className="my-5"></div>

            <div className="row p-0 m-0">
                <div className="col-12 p-0 text-center">
                    <h2>Log In</h2>
                </div>
            </div>

            <div className="row p-0 m-0">
                <div className="col-12 p-0">
                    <form onSubmit={handleSubmit(onSubmit)} className="form-container mx-auto p-4 shadow rounded bg-light llfw_lsfw">
                        {/* Email Field */}
                        <div className="form-group my-4">
                            <label className='fs-6'>Email *</label>
                            <input
                                type="email"
                                {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
                                className="form-control py-2 my-2 fs-6"
                            />
                            {errors.email && <p className="error-text">{errors.email.message}</p>}
                        </div>

                        {/* Password Field */}
                        <div className="form-group my-4">
                            <label className='fs-6'>Password *</label>
                            <div className="password-input-wrapper lsfpi">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    {...register("password", { required: "Password is required" })}
                                    className="form-control py-2 my-2 fs-6"
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="btn btn-light password-toggle-button lsfpb"
                                >
                                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                                </button>
                            </div>
                            {errors.password && <p className="error-text">{errors.password.message}</p>}
                        </div>

                        {errorMessage && <p className="error-text">{errorMessage}</p>}

                        <button type="submit" className="btn btn-success mt-3 w-100 fs-6">Log In</button>
                    </form>
                </div>
            </div>

            {/* Modal */}
            {isModalVisible && (
               <div className="modal-overlay">
               <div className="modal-content">
                   <h4 className="modal-title">Login Successful</h4>
           
                   {/* Success Icon */}
                   <div className="success-icon mb-2">
    <i className="fas fa-check-circle text-success" style={{ fontSize: '3rem' }}></i>
</div>
           
                   {/* Logo Image */}
                   <img src={Logo} alt="logo" className="img-fluid success-logo mx-auto mb-3 " />
           
                   <p>Welcome back! You have successfully logged in.</p>
           
                   {/* Continue Button */}
                   <button onClick={closeModal} className="btn btn-primary continue-button mt-3">Continue</button>
               </div>
           </div>
           
            
            )}
        </div>
    );
}

export default LoginForm;
