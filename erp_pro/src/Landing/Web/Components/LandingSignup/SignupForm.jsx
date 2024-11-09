import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../../../../assets/Landing/css/Common.css';
import '../../../../assets/Landing/css/LandingSignup/SignupForm.css';

function SignupForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [countdown, setCountdown] = useState(3); // Countdown in seconds

  const navigate = useNavigate(); // Initialize navigation

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:8081/LandingSignup', {
        ClientEmail: data.email,
        ClientPassword: data.password,
        ClientPhone: data.phone,
        ClientCompanyName: data.CompanyName,
        ClientWebsite: data.CompanyWeb,
      });
      console.log(response.data);
      setSuccessMessage(true); // Show success message modal
      setCountdown(3); // Reset countdown
      reset(); // Clear form inputs
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  // Countdown effect
  useEffect(() => {
    if (successMessage && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (countdown === 0) {
      setSuccessMessage(false); // Hide modal when countdown finishes
    navigate('/login'); // Redirect to login page when countdown finishes
    }
  }, [successMessage, countdown, navigate]);

  return (
    <div className="container my-2">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 text-center mb-4">
          <h2 className="fw-bold fs-4">Start with your free account today</h2>
        </div>
      </div>

      {/* Success Message Modal */}
      {successMessage && (
        <div className="modal-overlay">
          <div className="modal-content text-center">
            <h3 className="modal-title">🎉 Signup Successful! 🎉</h3>
            <p>Welcome to the platform! We're thrilled to have you onboard.</p>

            {/* Countdown Circle */}
            <div className="countdown-circle">
              <span>{countdown}</span>
            </div>

            <button className="btn btn-success" onClick={() => setSuccessMessage(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <form onSubmit={handleSubmit(onSubmit)} className="form-container mx-auto p-4 shadow rounded bg-light llfw_lsfw">
            {/* Email Field */}
            <div className="form-group mb-3">
              <label className="form-label">Email *</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
                })}
                className="form-control"
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-danger small mt-1">{errors.email.message}</p>}
            </div>

            {/* Password Field */}
            <div className="form-group mb-3">
              <label className="fs-6">Password *</label>
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

            {/* Phone Number Field */}
            <div className="form-group mb-3">
              <label className="form-label">Phone Number *</label>
              <input
                type="text"
                {...register("phone", { required: "Phone number is required" })}
                className="form-control"
                placeholder="Enter your phone number"
              />
              {errors.phone && <p className="text-danger small mt-1">{errors.phone.message}</p>}
            </div>

            {/* Company Name Field */}
            <div className="form-group mb-3">
              <label className="form-label">Company Name *</label>
              <input
                type="text"
                {...register("CompanyName", { required: "Company name is required" })}
                className="form-control"
                placeholder="Enter your company name"
              />
              {errors.CompanyName && <p className="text-danger small mt-1">{errors.CompanyName.message}</p>}
            </div>

            {/* Company Website Field */}
            <div className="form-group mb-3">
              <label className="form-label">Company Website *</label>
              <input
                type="text"
                {...register("CompanyWeb", { required: "Company website is required" })}
                className="form-control"
                placeholder="Enter your company website"
              />
              {errors.CompanyWeb && <p className="text-danger small mt-1">{errors.CompanyWeb.message}</p>}
            </div>

            <button type="submit" className="btn btn-danger w-100 mt-3">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
