import { FormEvent , useState } from "react";
import StoreImage from "../assets/store_image.jpg";
import { Link, useNavigate } from "react-router-dom";
import {User , Password, Email , getToken , getUser} from '../api'

const Home = () => {
  const navigate = useNavigate();
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  
  const login = async (event: FormEvent) => {
    event.preventDefault();
    
    const user =new User(new Email(username),"","",new Password(password));
    const token = await getToken(user);
    const user_info = await getUser(token["access_token"]);
    navigate("/dashboard");
  };

  return (
    <section className="bg-white font-family-karla h-screen">
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex flex-col justify-center items-center my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <div className="flex justify-center">
              <a href="#" className="text-gray uppercase font-bold text-3xl">
                <span className="text-orange">S</span>toreLink
              </a>
            </div>
            <form
              className="w-10/12 flex flex-col pt-3 md:pt-8"
              onSubmit={login}
            >
              <div
                className="flex flex-col pt-4"
                onSubmit={() => console.log("hello")}
              >
                <label htmlFor="email" className="text-lg">
                  Email
                </label>
                <input
                  value={username}
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={(e)=>setUsername(e.target.value)}
                />
              </div>

              <div className="flex flex-col pt-4">
                <label htmlFor="password" className="text-lg">
                  Password
                </label>
                <input
                  value={password}
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>

              <input
                type="submit"
                value="Log In"
                className="bg-blue text-white font-bold text-lg hover:bg-gray-800 p-2 mt-8"
              />
            </form>
            <div className="text-center pt-12 pb-12">
              <p>
                Don't have an account?{" "}
                <Link to="/sign-up" className="underline font-semibold">
                  Register here.
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 shadow-2xl">
          <img
            className="object-cover w-full h-screen hidden md:block"
            src={StoreImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
