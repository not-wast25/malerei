import React, { useState } from "react";
import { Box, Typography, TextField, Button, Alert } from "@mui/material";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget; // Explizit als HTMLFormElement behandeln
    console.log(form);
    emailjs
      .sendForm(
        "service_5ex5kq2", // Ersetze mit deiner Service-ID
        "template_vklq456", // Ersetze mit deiner Template-ID
        form, // Hier verwenden wir jetzt "form" statt "e.target"
        "2-wwjbxi7ymEYhHFP" // Ersetze mit deinem öffentlichen Schlüssel
      )
      .then(
        () => {
          setStatusMessage("Nachricht erfolgreich gesendet!");
          setIsSubmitting(false);
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        () => {
          setStatusMessage(
            "Etwas ist schiefgelaufen, bitte versuchen Sie es später erneut."
          );
          setIsSubmitting(false);
        }
      );
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Kontaktieren Sie uns
      </Typography>
      {statusMessage && (
        <Alert
          severity={statusMessage.includes("erfolgreich") ? "success" : "error"}
        >
          {statusMessage}
        </Alert>
      )}

      <Typography variant="h6">Unsere Kontaktdaten</Typography>
      <Typography variant="body1">
        <strong>Telefon:</strong> +49 123 456789
      </Typography>
      <Typography variant="body1">
        <strong>Adresse:</strong> Musterstraße 1, 12345 Musterstadt
      </Typography>
      <Typography variant="body1">
        <strong>E-Mail:</strong> kontakt@beispiel.de
      </Typography>

      <Typography variant="h6">Kontaktformular</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Ihr Name"
          variant="outlined"
          fullWidth
          margin="normal"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          label="Ihre E-Mail"
          variant="outlined"
          fullWidth
          margin="normal"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Betreff"
          variant="outlined"
          fullWidth
          margin="normal"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <TextField
          label="Ihre Nachricht"
          variant="outlined"
          fullWidth
          margin="normal"
          name="message"
          value={formData.message}
          onChange={handleChange}
          multiline
          rows={4}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Senden..." : "Nachricht senden"}
        </Button>
      </form>
    </Box>
  );
};

export default Contact;
