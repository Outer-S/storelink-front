import { Link, Outlet } from "react-router-dom";
import { useAppSelector } from "../app";
import inventoryIcon from "../assets/inventoryIcon.png";
import plusSign from "../assets/plusSign.png";
import { rolesTitles } from "../api";

const isAdmin = (store:string,roles:string[]=[]) : boolean =>{
 return roles.some(role => [rolesTitles['admin'](store), rolesTitles['manager'](store)].indexOf(role));
}

const Dashboard = () => {
  let { firstname, lastname, email,store ,roles } = useAppSelector((s) => s.userReducer);

  return (
    <div className="w-screen flex flex-row">
      <div className="w-1/6 flex flex-col justify-between h-screen bg-white border-r">
        <div className="px-4 py-6">
          <nav className="flex flex-col mt-6 space-y-1">
            <a
              href=""
              className="flex items-center px-4 py-2 text-gray-700 bg-orange rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 opacity-75"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <span className="ml-3 text-sm font-medium"> Profile </span>
            </a>

            <details>
              <summary className="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-orange hover:text-gray-700">
                <img src={inventoryIcon} className="w-5 h-5 opacity-75" />

                <span className="ml-3 text-sm font-medium"> Stores </span>

                <span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <nav className="mt-1.5 ml-8 flex flex-col">
                {isAdmin(store as string, roles as string[]) && <Link
                  to="/dashboard/create-inventory"
                  className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-blue hover:text-gray-900"
                >
                  <img src={plusSign} className="w-3 h-3 opacity-75" />
                  <span className="ml-3 text-sm font-medium"> Create </span>
                </Link>}
              </nav>
            </details>
          </nav>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
          <a
            href=""
            className="flex items-center p-4 bg-white hover:bg-blue shrink-0"
          >
            <img
              className="object-cover w-10 h-10 rounded-full"
              src="https://www.hyperui.dev/photos/man-4.jpeg"
              alt="Simon Lewis"
            />

            <div className="ml-1.5">
              <p className="text-xs">
                <strong className="block font-medium">
                  {firstname} {lastname}{" "}
                </strong>

                <span> {email} </span>
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className="w-full p-4 bg-white rounded-lg lg:p-6 lg:col-span-3">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="flex items-center text-sm text-gray-500 space-x-1"
          >
            <li>
              <a
                className="block transition-colors hover:text-gray-700"
                href="/"
              >
                <span className="sr-only"> Home </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </a>
            </li>

            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </li>

            <li>
              <a
                className="block transition-colors hover:text-gray-700"
                href="/collections/shirts"
              >
                {" "}
                Shirts{" "}
              </a>
            </li>

            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </li>
          </ol>
        </nav>

        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
