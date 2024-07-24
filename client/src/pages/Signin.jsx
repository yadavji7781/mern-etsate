import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange =  (e) => {
    setFormData(
      {...formData,
        [e.target.id]: e.target.value,
      });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    setLoading(true);
    const res = await fetch('/api/auth/signin',
      {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log(data);
    if (data.success === false) {
      setLoading(false);
      setErrors(data.message);
      return;
    }
    setLoading(false); 
    setErrors(null);
    navigate('/');
  } catch (error) {
    setLoading(false);
    setErrors(error.message);
  }
  };
  console.log(formData);
  return (
    <div>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-4'>
        <input type="email"
        placeholder='email'
        className='border p-2 border-gray-300 rounded-md w-96'
        id='email'
        onChange={handleChange}/>
        <input type="password"
        placeholder='password'
        className='border p-2 border-gray-300 rounded-md w-96'
        id='password'
        onChange={handleChange}/>
        <button disabled={loading} className='bg-slate-700 text-white p-1 rounded-lg w-96 uppercase hover:opacity-95 '>{loading ? 'Loading...!' : 'Sign In'} </button>
      </form>
      <div className="flex gap-2 mt-4">
      <p>Don't have an account?</p>
      <Link to={"/sign-up"}>
      <span className="text-blue-700">Sign up</span>
      </Link>
      </div>
    </div>
  );
}
