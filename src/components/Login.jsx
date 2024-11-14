import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    const loginData = {
      username: username,
      password: password,
    }

    fetch("http://52.45.196.24/login", {  
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Maneja la respuesta de la API
        console.log("Respuesta de la API:", data);
        alert("El registro se ha guardado con éxito");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <section className="h-screen bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    <div className="text-center">
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        Inicio de sesión
                      </h4>
                    </div>

                    <form>
                      <div className="mb-4 flex flex-col">
                        <label htmlFor="username">Usuario:</label>
                        <input
                          className="rounded text-black"
                          type="text"
                          id="username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>

                      <div className="mb-4 flex flex-col">
                        <label htmlFor="password">Contraseña:</label>
                        <input
                          className="rounded text-black"
                          type="password"
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      <div className="mb-12 pb-1 pt-1 text-center">
                        <button
                          className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          type="button"
                          onClick={handleLogin}
                          style={{
                            background:
                              "linear-gradient(to right, #E5C209, #EBA802, #E68800)",
                          }}
                        >
                          Iniciar sesión
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #E5C209, #EBA802, #E68800)",
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      Login de ejemplo
                    </h4>
                    <p className="text-sm">
                      !Hola! Este es un login de ejemplo, puedes iniciar sesión
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;