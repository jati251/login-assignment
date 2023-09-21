import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const user = localStorage.user;
  const navigate = useNavigate();

  return (
    <>
      <div className="flex w-[80vh] px-2 ">
        <div className="mb-4 md:flex md:justify-between m-5 relative top-0 bg-green-400">
          <div className="mb-4 md:mr-2 md:mb-0">
            <h2 className="font-bold text-xl">Welcome {user.email}</h2>
          </div>
          <div className="md:ml-2">
            <button
              onClick={() => navigate("/login")}
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
