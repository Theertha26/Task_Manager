import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Tasks from "../components/Tasks";
import MainLayout from "../layouts/MainLayout";
import backgroundImage from "../images/image.png";

const Home = () => {
  const authState = useSelector((state) => state.authReducer);
  const { isLoggedIn } = authState;

  useEffect(() => {
    document.title = authState.isLoggedIn
      ? `${authState.user.name}'s tasks`
      : "Task Manager";
  }, [authState]);

  return (
    <>
      <MainLayout>
        {!isLoggedIn ? (
          <div
            className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white min-h-screen flex flex-col  items-center pt-12"
            style={{
              backgroundImage: isLoggedIn ? `none` : `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              marginTop: "-70px",
            }}
          >
            <h1 className="text-4xl font-bold mb-6 pt-16">
              {" "}
              Welcome to Task Manager App
            </h1>
            <Link
              to="/signup"
              className="mt-10 text-xl block space-x-2 hover:space-x-4"
            >
              <span className="text-xl px-6 py-3 bg-white text-primary font-semibold rounded-lg shadow hover:bg-yellow-200 transition duration-300 inline-block">
                Join now to manage your tasks
              </span>
              <span className="relative ml-4 text-base transition-[margin]">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </Link>
          </div>
        ) : (
          <>
            <h1 className="text-lg mt-8 mx-8 border-b border-b-gray-300">
              Welcome {authState.user.name}
            </h1>
            <Tasks />
          </>
        )}
      </MainLayout>
    </>
  );
};

export default Home;
