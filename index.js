const axios = require("axios");

// Función para enviar correo electrónico
function sendEmail(email) {
  const url = "https://api.mailjet.com/v3.1/send";
  const apiKey = "891a2887b5878a0c5dd6747640b29b18";
  const apiSecret = "0fc83703a0e1a9ca95c7b6dd7582000d";

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
