import React, { useState } from 'react';
import './signup.css';
import { Link} from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook, BsTwitter, BsApple } from 'react-icons/bs';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    agreeToTerms: false, // Added checkbox state
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Handle checkbox separately
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agreeToTerms) {
      alert('Please agree to the Terms of Services & Privacy Policy.');
      return;
    }

    try {
      const response = await fetch('https://academics.newtonschool.co/api/v1/user/signup', {
        method: 'POST',
        headers: {
          'projectId': 'qkwqr7ns3d9d',
          'Authorization': 'Bearer 1FtqjSZGiMmlETtyqUNxt26AtGikPe8F' 
        },
        body: JSON.stringify({
          ...formData,
          appType: 'ott',
        }),
      });

      if (response.ok) {
        console.log('Signup successful');
      } else {
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('An error occurred', error);
    }
  };

  return (
    <div className="signup-form">
      <div className="su-head">
        <h2>Create a new account</h2>
        <p>Create an account to continue enjoying</p>
        <p>uninterrupted video and personalized experience</p>
      </div>
      <div className="social-su">
        <div className="so-icon">
          <FcGoogle />
        </div>
        <div className="so-icon">
          <BsFacebook />
        </div>
        <div className="so-icon">
          <BsTwitter />
        </div>
        <div className="so-icon">
          <BsApple />
        </div>
      </div>
      <hr class="line" />
      <div className="su-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <div className="cb-sec">
            <input
              type="checkbox"
              className='checkbox-btn'
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              required
            />
            <span className="checkbox-text">
              By proceeding you agree to our Terms of Services & Privacy Policy.
            </span>
            </div>
          </div>
          <button type="submit">Create Account</button>
        </form>
        <div className="g-log">
          <span>Already registered?</span> 
        <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
