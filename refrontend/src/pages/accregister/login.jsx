import loginp from '../../assets/svg/login.svg'
import google from '../../assets/svg/google.svg'
import apple from '../../assets/svg/apple.svg'
const login = () => {
    return (
        
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
     
      <div className="md:w-1/3 max-w-sm">
        <img
          src={loginp} alt="login image"/>
      </div>
      <div className="md:w-1/3 max-w-sm">
      <label className="mr-1 text-2xl font-normal">Welcome Back</label>
        <div className=" grid grid-cols-2 gap-3 text-center md:text-left">          
        <button type="button" className=" flex items-center mt-4 space-x-2 bg-gray-500 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider">
            <img  src={google} width={16} height={8} alt="G"/>
            <span>Login with Google</span> 
          </button>
          <button type="button" className=" flex items-center mt-4 space-x-2 bg-gray-500 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider">
            <img  src={apple} width={20} height={10} alt="G"/>
            <span>Login with Apple</span> 
          </button>
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">Or</p>
        </div>
        <label htmlFor="">Email</label>
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="text" placeholder="Email Address" />
        <label htmlFor="">Password</label>
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Password" />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <a className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4" href="#">Forgot Password?</a>
        </div>
        <div className="text-center md:text-left">
          <button className="mt-4 bg-gray-500 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Login</button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don't have an account? <a className="text-red-600 hover:underline hover:underline-offset-4" href="#">Sign Up Here</a>
        </div>
      </div>
    </section>
    )
  }
  
  export default login