import React,{useState} from 'react'
import { Link} from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook, BsTwitter, BsApple } from 'react-icons/bs';
import './login.css'
function Login() {
  const [formData, setFormData] = useState({
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
        <h2>Login to ZEE5</h2>
        <p>Login to continue enjoying uninterrupted video</p>
        <p>and personalised experience.</p>
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
            <div className="fp-sec">
            <Link to="/login">forgot password?</Link>
            </div>
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="g-log">
          <span>Already registered?</span> 
        <Link to="/signup">Register</Link>
        </div>
        <div className="demo-log">
          <p>Demo Account - test1@test.com</p>
          <p>Password - 123456</p>
        </div>
      </div>
    </div>
  );
}

export default Login