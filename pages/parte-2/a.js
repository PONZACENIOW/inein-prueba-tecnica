import Layout from "../../layouts";
import React, { useEffect, useState, memo } from "react";

const Test2A = memo(() => {
  const header = {
    objective: "Objetivo",
    goal_text:
      "Usando React o html, crea una propuesta de diseño basado en la pagina web de la empresa https://infraestructuramedica.mx/, utilizando la entidad corporativa.",
    solution: "Solución",
    comments: "Comentarios",
    comment_text: [
      "1. La imagen principal podría ser sin fondo para permitir resaltar más y dar un aspecto 3D para el sitio.",
      "2. En el sitio general se podría utilizar un recurso de imágenes 360 para al mostrar un proyecto, a su vez se esté realizando un recorrido y se tenga una mayor experiencia.",
    ],
  };

  return (
    <Layout header={header}>
      <div className="relative min-h-screen  bg-gradient-to-l from-[#315694] to-[#526a92]">
        <nav className="h-full p-6 flex gap-4 items-center justify-between">
          <img
            src="https://infraestructuramedica.mx/wp-content/uploads/2020/02/cropped-cropped-Logo_IM_RGB-01-1-1-258x81.png"
            alt="infraestructuramedica"
          ></img>
          <ul className="text-lg gap-4 flex uppercase text-gray-200 items-center">
            <li>Mi proyecto</li>
            <li>Usuarios</li>
            <li>Presupuesto</li>
            <li>Proyectos</li>
            <li>Administración</li>
            <li className="border px-4 p-2 cursor-pointer ml-40">Cotizar</li>
          </ul>
        </nav>
        <div className="grid grid-cols-2-iauto px-20 mt-10">
          <div className="max-w-2xl">
            <h1 className="uppercase text-6xl font-bold">
              Especialistas en diseño y construcción de espacios para la salud
            </h1>
            <h2 className="text-gray-300 mt-20 text-2xl border-[#CBBA8E] border-b-4 pl-20 pb-4">
              Atendemos proyectos en toda la República Mexicana desde
              hospitales, clínicas, consultorios, quirófanos, farmacéuticas,
              etc.
            </h2>
            <button className="mt-20 bg-[#8BA2C5] px-8 py-2 rounded-full text-gray-700 uppercase font-bold">
              Nuestros proyectos
            </button>
          </div>
          <div className="grid justify-end">
            <div className="bg-[#CBBA8E] w-[35rem] relative h-96">
              <div>
                <img
                  className="absolute right-10 -bottom-10 h-full w-full object-cover"
                  src="https://infraestructuramedica.mx/wp-content/uploads/2020/10/VITARA-QUIROFANOS-RENDER-SALA-DE-RECUPERACION-.jpg"
                  alt="image"
                ></img>
                <div className="absolute bottom-0 flex gap-8 justify-center w-full pr-20">
                  <div className="rounded-full w-4 h-4 bg-[#545454]"></div>
                  <div className="rounded-full w-4 h-4 bg-[#545454]"></div>
                  <div className="rounded-full w-12 h-4 bg-[#315694]"></div>
                  <div className="rounded-full w-4 h-4 bg-[#545454]"></div>
                  <div className="rounded-full w-4 h-4 bg-[#545454]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
});

export default Test2A;
