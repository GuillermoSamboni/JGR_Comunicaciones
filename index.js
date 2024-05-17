const axios = require("axios");

// Función para enviar correo electrónico
function sendEmail(email) {
  const url = process.env.URL
  const apiKey = process.env.API_KEY
  const apiSecret = process.env.API_SECRET

  // Datos del correo electrónico
  const data = {
    Messages: [
      {
        From: {
          Email: "gsamruadev@gmail.com",
          Name: "Test",
        },
        To: [
          {
            Email: email,
          },
        ],
        Subject: "Asunto del correo",
        TextPart: "Contenido del correo electrónico",
      },
    ],
  };

  // Configuración de la solicitud HTTP
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString(
        "base64"
      )}`,
    },
  };

  // Envío de la solicitud HTTP
  return axios.post(url, data, config);
}

// Ejemplo de uso
sendEmail("jgrcomunicaciones1@gmail.com")
  .then((response) => {
    console.log("Correo electrónico enviado:", response);
  })
  .catch((error) => {
    console.error("Error al enviar correo electrónico:", error);
  });
