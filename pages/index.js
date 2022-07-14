import Layout from "../layouts";
import React, { memo } from "react";

const Quest = memo(() => {
  const header = {
    objective: "Objetivo",
    goal_text: "Responder el cuestionario.",
    solution: "Solución",
  };

  return (
    <Layout header={header}>
      <div className="mb-2">
        <span className="font-bold">1. ¿Qué es React JS?</span>
        <p>
          Es una biblioteca de JavaScript para el desarrollo de aplicaciones
          reactivas que permite junto a múltiples librerías más proporcionarle
          al usuario una experiencia de uso mucho más agradable.
        </p>
      </div>
      <div className="mb-2">
        <span className="font-bold">2. ¿Qué es JSX?</span>
        <p>
          Se trata de una sintaxis que interpreta React en forma de componentes
          con una estructura muy similar a HTML lo que permite a los
          desarrolladores renderizar todo el contenido de forma más cómoda.
        </p>
      </div>
      <div className="mb-2">
        <span className="font-bold">3. ¿Qué es HTML?</span>
        <p>
          Es un Lenguaje de Marcas de Hipertexto el cual permite definir y
          estructurar el contenido que tendrá el sitio web, esto ayuda a los
          navegadores a obtener información y posicionar el mismo mediante
          buenas prácticas de SEO.
        </p>
      </div>
      <div className="mb-2">
        <span className="font-bold">4. ¿Para que se utiliza CSS?</span>
        <p>
          Se utiliza principalmente para otorgarle a nuestro sitio web un estilo
          único mediante clases en una estructura de cascada. Además, se pueden
          realizar animaciones y mediante pseudo-clases ofrecerle al usuario una
          interactividad visual.
        </p>
      </div>
    </Layout>
  );
});

export default Quest;
