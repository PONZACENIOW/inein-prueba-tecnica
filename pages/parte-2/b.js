import Layout from "../../layouts";
import React, { useEffect, useState, memo } from "react";

const Test2B = memo(() => {
  const header = {
    objective: "Objetivo",
    goal_text:
      "A partir de este formulario realizar una propuesta de diseño mejorando el formulario y el menú para navegar.",
    solution: "Solución",
    comments: "Comentarios",
    comment_text: [
      "1. El Sidebar deberia resaltar el link en donde se encuentra el usuario.",
      "2. Mi propuesta consiste en ir desplazándole el formulario al usuario mediante secciones; es decir, el paso 1 descomponerlo para que se sienta un proceso más corto y al finalizar el paso 1 nos permita continuar hacia el paso 2. Todo esto requiere diversas validaciones, pero el objetivo es una mejor experiencia de usuario reduciendo los formularios, incluso saltando secciones o pasos dependiendo la necesidad del módulo.",
      "3. Incorporando los iconos, espacios y colores utilizados en el sitio, la propuesta podría ser demasiado útil.",
    ],
  };
  const [form, setForm] = useState(0);
  const limitsForm = [0, 2];

  return (
    <Layout header={header}>
      <div className="relative min-h-screen">
        <nav className="w-60 h-full bg-gray-900 text-gray-100 absolute overflow-auto p-6">
          <ul className="text-base gap-4 grid uppercase text-gray-300">
            <li>Mi proyecto</li>
            <li>Usuarios</li>
            <li>Presupuesto</li>
            <li>Proyectos</li>
            <li>Administración</li>
            <li className="ml-4 bg-blue-600 p-2 rounded-full text-center text-gray-200">
              Colaboradores
            </li>
          </ul>
        </nav>
        <div className="ml-60">
          <div className="shadow-2xl mx-auto w-2/3 rounded-xl p-6">
            <h2 className="text-2xl uppercase text-center font-bold text-gray-600 mb-4">
              Nuevo colaborador
            </h2>
            <div className="grid grid-cols-3 justify-center items-center gap-4 uppercase">
              <h3 className="text-center text-gray-500 font-bold text-xs"></h3>
              <h3 className="text-center text-blue-600 font-bold">
                1. Información del colaborador
              </h3>
              <h3 className="text-center text-gray-500 font-bold text-xs">
                2. Información del puesto
              </h3>
            </div>
            <div className="mt-8">
              {form == 0 && (
                <div>
                  <h2 className="uppercase font-bold text-gray-600">
                    Datos personales
                  </h2>
                  <form className="my-6 grid gap-y-4">
                    <div className="grid">
                      <span className="uppercase text-base text-gray-600">
                        Nombre del colaborador *
                      </span>
                      <input className="mt-2 bg-gray-300 px-4 py-2 text-gray-700"></input>
                    </div>
                    <div className="grid">
                      <span className="uppercase text-base text-gray-600">
                        CURP *
                      </span>
                      <input className="mt-2 bg-gray-300 px-4 py-2 text-gray-700"></input>
                    </div>
                    <div className="grid">
                      <span className="uppercase text-base text-gray-600">
                        RFC
                      </span>
                      <input className="mt-2 bg-gray-300 px-4 py-2 text-gray-700"></input>
                      <span className="text-red-600 uppercase text-xs">
                        El formato es incorrecto
                      </span>
                    </div>
                    <div className="grid">
                      <span className="uppercase text-base text-gray-600">
                        Nacionalidad
                      </span>
                      <input className="mt-2 bg-gray-300 px-4 py-2 text-gray-700"></input>
                    </div>
                  </form>
                </div>
              )}
              {form == 1 && (
                <div>
                  <h2 className="uppercase font-bold text-gray-600">
                    Datos de contacto
                  </h2>
                  <form className="my-6 grid gap-y-4">
                    <div className="grid">
                      <span className="uppercase text-base text-gray-600">
                        Ejemplo *
                      </span>
                      <input className="mt-2 bg-gray-300 px-4 py-2 text-gray-700"></input>
                    </div>
                    <div className="grid">
                      <span className="uppercase text-base text-gray-600">
                        Ejemplo *
                      </span>
                      <input className="mt-2 bg-gray-300 px-4 py-2 text-gray-700"></input>
                    </div>
                    <div className="grid">
                      <span className="uppercase text-base text-gray-600">
                        Ejemplo
                      </span>
                      <input className="mt-2 bg-gray-300 px-4 py-2 text-gray-700"></input>
                    </div>
                  </form>
                </div>
              )}
              {form == 2 && (
                <div>
                  <h2 className="uppercase font-bold text-gray-600">
                    Datos bancarios
                  </h2>
                  <form className="my-6 grid gap-y-4">
                    <div className="grid">
                      <span className="uppercase text-base text-gray-600">
                        Ejemplo *
                      </span>
                      <input className="mt-2 bg-gray-300 px-4 py-2 text-gray-700"></input>
                    </div>
                    <div className="grid">
                      <span className="uppercase text-base text-gray-600">
                        Ejemplo *
                      </span>
                      <input className="mt-2 bg-gray-300 px-4 py-2 text-gray-700"></input>
                    </div>
                    <div className="grid">
                      <span className="uppercase text-base text-gray-600">
                        Ejemplo
                      </span>
                      <input className="mt-2 bg-gray-300 px-4 py-2 text-gray-700"></input>
                    </div>
                    <div className="grid">
                      <span className="uppercase text-base text-gray-600">
                        Ejemplo
                      </span>
                      <input className="mt-2 bg-gray-300 px-4 py-2 text-gray-700"></input>
                    </div>
                  </form>
                </div>
              )}
              <div
                className={`flex ${
                  form > limitsForm[0] ? "justify-between" : "justify-end"
                }`}
              >
                {form > limitsForm[0] && (
                  <button
                    type="button"
                    className=" bg-gray-400 text-gray-200 py-2 rounded-full px-8"
                    onClick={() => {
                      setForm(form - 1);
                    }}
                  >
                    Anterior
                  </button>
                )}
                {form < limitsForm[1] && (
                  <button
                    type="button"
                    className="bg-blue-600 text-gray-200 py-2 rounded-full px-8"
                    onClick={() => {
                      setForm(form + 1);
                    }}
                  >
                    Siguiente
                  </button>
                )}
                {form == limitsForm[1] && (
                  <button
                    type="button"
                    className="bg-blue-600 text-gray-200 py-2 rounded-full px-8"
                  >
                    Paso 2
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
});

export default Test2B;
