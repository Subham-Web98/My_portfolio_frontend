import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { motion } from "motion/react";

const Projects = () => {
  const url = "https://portfolio-backend-u6ve.onrender.com"
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
  const [adminLogin, setAdminLogin] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const fileInputRef = useRef();
  const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === adminPassword) {
      setAdminLogin(true);
      setPassword("");
      setError("");
      fileInputRef.current.value = "";
    } else {
      setError("Invalid password");
    }
  };

  const handleLogout = () => {
    setAdminLogin(false);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("link", link);
    formData.append("image", image);

    try {
      const response = await axios.post(
        `${url}/api/v1/projects/createProject`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMessage(response.data.message);
      setTitle("");
      setDescription("");
      setLink("");
      setImage(null);
      fileInputRef.current.value = "";
    } catch (error) {
      setMessage(`Something went wrong: ${error.response?.data?.message}`);
    }
  };

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${url}/api/v1/projects/allProjects`
        );
        setProjects(response.data.data);
        setLoading(false);
      } catch (error) {
        console.log(`Something went wrong: ${error.response?.data}`);
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const deleteProject = async (projectId) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this project?"
    );
    if (isConfirmed) {
      try {
        await axios.delete(
          `${url}/api/v1/projects/delete/${projectId}`
        );
        setProjects((prevProjects) =>
          prevProjects.filter((project) => project._id !== projectId)
        );
      } catch (error) {
        console.log("Something went wrong:", error);
      }
    }
  };

  return (
    <main className="mx-auto py-6 ">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      </div>

      {adminLogin && (
        <section className="text-orange-100 bg-transparent rounded-xl  p-6 w-full sm:w-3/4 lg:w-1/2 mx-auto shadow-inner shadow-white  my-8  border-2 ">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 items-center"
          >
            <label className="w-full">
              Title
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Title"
                required
                className="w-full px-4 py-2 rounded-lg mt-1 outline-none bg-transparent border-2"
              />
            </label>
            <label className="w-full">
              Description
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                required
                className="w-full px-4 py-4 rounded-lg mt-1 outline-none bg-transparent border-2"
              ></textarea>
            </label>
            <label className="w-full">
              Project URL
              <input
                value={link}
                onChange={(e) => setLink(e.target.value)}
                type="url"
                placeholder="Project URL"
                required
                className="w-full px-4 py-2 rounded-lg mt-1 outline-none bg-transparent border-2"
              />
            </label>
            <label className="w-full">
              Image Upload
              <input
                ref={fileInputRef}
                onChange={handleImageChange}
                type="file"
                required
                className="w-full px-4 py-2 rounded-lg mt-1 bg-slate-50 bg-transparent border-2"
              />
            </label>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-green-500 text-white font-bold py-2 px-6 rounded-lg"
            >
              Add Project
            </button>
            {message && <p className="text-green-400">{message}</p>}
          </form>
        </section>
      )}

      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-center text-2xl font-bold text-orange-100"
      >
        My Projects
      </motion.h1>

      {loading ? (
        <div className="text-center text-orange-300 font-bold text-xl my-96">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 px-8">
          {projects.map((project) => (
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              key={project._id}
              className="bg-transparent shadow-inner shadow-slate-100 rounded-lg p-4 "
            >
              {project.image.url && (
                <img
                  src={project.image.url}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl mb-4 border-orange-100 border-2 "
                />
              )}
              <h3 className="font-bold text-lg text-center my-4 text-orange-50 shadow-xl rounded-3xl">
                {project.title}
              </h3>
              <p className="text-orange-100 opacity-70 text-sm line-clamp-3 h-20 overflow-hidden">
                {project.description}
              </p>

              <div className="text-center bg-orange-200 rounded-lg my-4 hover:bg-orange-500 hover:text-white transition-all duration-500">
                <a
                  href={project.link}
                  target="_blank"
                  className="block py-2 "
                  rel="noopener noreferrer"
                >
                  Visit
                </a>
              </div>
              {adminLogin && (
                <div className="text-center">
                  <button
                    onClick={() => deleteProject(project._id)}
                    className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-lg mt-4"
                  >
                    Delete
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 2 }}
        className="text-center mt-8 mx-auto flex items-center justify-center "
      >
        {!adminLogin ? (
          <form
            onSubmit={handleLogin}
            className="flex flex-wrap gap-4 items-center justify-center py-8"
          >
            <label className="w-full sm:w-auto flex flex-col sm:flex-row">
              <input
                type="password"
                placeholder="Admin Only"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-4 py-2 rounded-lg mx-2 border-2 border-blue-100 outline-none"
              />
            </label>
            <button
              type="submit"
              className="bg-orange-300 hover:bg-orange-500 hover:text-white text-black px-4 py-2 my-2 rounded-lg transition-all duration-500"
            >
              Login
            </button>
          </form>
        ) : (
          <button
            onClick={handleLogout}
            className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        )}
        {error && <p className="text-red-500">{error}</p>}
      </motion.div>
    </main>
  );
};

export default Projects;
