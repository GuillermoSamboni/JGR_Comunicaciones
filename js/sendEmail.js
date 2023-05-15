// const sendEmail = async () => {
//   try {
//     const response = await axios.post("https://api.sendgrid.com/v3/mail/send", {
//       personalizations: [
//         {
//           to: [
//             {
//               email: "destinatario@example.com",
//             },
//           ],
//           subject: "Asunto del correo electrónico",
//         },
//       ],
//       from: {
//         email: "remitente@example.com",
//         name: "Nombre del remitente",
//       },
//       content: [
//         {
//           type: "text/plain",
//           value: "Cuerpo del correo electrónico",
//         },
//       ],
//       // Reemplaza API_KEY por tu clave de API de SendGrid
//       headers: {
//         Authorization: "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",
//       },
//     });
//     console.log('Correo electrónico enviado:', response.data);
//   } catch (error) {
//     console.error('Error al enviar el correo electrónico:', error.response.data);
//   }
// };

// sendEmail();


// fromEmail, fromName, toEmail, toName, subject, text
function sendEmail() {
    const data = {
      'Messages': [{
        'From': {
          'Email': "gsamruadev@gmail.com",
          'Name': "fromName"
        },
        'To': [{
          'Email': "jgrcomunicaciones1@gmail.com",
          'Name': "Test"
        }],
        'Subject': "subject",
        'TextPart': "text"
      }]
    }
  
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('891a2887b5878a0c5dd6747640b29b18:0fc83703a0e1a9ca95c7b6dd7582000d')
      }
    }
  
    return axios.post('https://api.mailjet.com/v3.1/send', data, config)
      .then(response => {
        console.log(response)
        return response
      })
      .catch(error => {
        console.error(error)
        throw error
      })
  }

