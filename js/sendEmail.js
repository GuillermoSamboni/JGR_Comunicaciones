const sendEmail = async () => {
  try {
    const response = await axios.post("https://api.sendgrid.com/v3/mail/send", {
      personalizations: [
        {
          to: [
            {
              email: "destinatario@example.com",
            },
          ],
          subject: "Asunto del correo electrónico",
        },
      ],
      from: {
        email: "remitente@example.com",
        name: "Nombre del remitente",
      },
      content: [
        {
          type: "text/plain",
          value: "Cuerpo del correo electrónico",
        },
      ],
      // Reemplaza API_KEY por tu clave de API de SendGrid
      headers: {
        Authorization: "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",
      },
    });
    console.log('Correo electrónico enviado:', response.data);
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error.response.data);
  }
};

// sendEmail();
