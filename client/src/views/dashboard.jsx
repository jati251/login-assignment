import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const user = localStorage.user;

  const navigate = useNavigate();

  function handleLogout() {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <>
      <div className="flex w-screen items-center justify-center p-10 px-2 ">
        <div className="mb-4 md:flex md:justify-between m-5 relative top-0 bg-green-400 rounded-md p-10 justify-center">
          <div className="mb-4 md:mr-2 md:mb-0">
            <h2 className="font-bold text-xl">Welcome {user}</h2>
          </div>
          <div className="md:ml-2">
            <button
              onClick={() => handleLogout()}
              className="inline-block rounded-lg bg-black px-5 py-3 text-sm font-medium text-white"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
