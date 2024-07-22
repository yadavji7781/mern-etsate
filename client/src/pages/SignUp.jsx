import { Link } from "react-router-dom"
export default function SignUp() {
  return (
    <div>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col items-center justify-center gap-4'>
        <input type="text" placeholder='username'
        className='border p-2 border-gray-300 rounded-lg w-96' id='username' />
        <input type="email" placeholder='email'
        className='border p-2 border-gray-300 rounded-md w-96' id='email' />
        <input type="password" placeholder='password'
        className='border p-2 border-gray-300 rounded-md w-96' id='password' />
        <button className='bg-slate-700 text-white p-1 rounded-lg w-96 uppercase hover:opacity-95'>Sign Up</button>
      </form>
      <div className="flex gap-2 mt-5">
      <p>have an account?</p>
      <Link to={"/sign-in"}>
      <span className="text-blue-700">Sign in</span>
      </Link>
      </div>
    </div>
  )
}
