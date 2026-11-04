        
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {

    const form = useRef();

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
        setMessage("");

      emailjs.sendForm(
            "service_txzcx49",
            "template_3jnm3y8",
            form.current,
            "ZqVcyWzn2tfHNX9MU"
        )

        .then((response) => {
            console.log("Message envoyé :", response.status);

            setSuccess(true);
            setMessage("Votre message a été envoyé avec succès !");
            form.current.reset();
        })
        .catch((error) => {
            console.error("Erreur EmailJS :", error);

            setSuccess(false);
            setMessage(
                "Erreur : " +
                (error.text || error.message || "Envoi impossible")
            );
        })
        .finally(() => {
            setLoading(false);
        });
    };

    return (
        <div className="contact-page">

            {/* HEADER */}
            <div className="contact-header">
                <h1>Contact</h1>
            </div>

            {/* FORMULAIRE */}
            <section className="contact-section">

                <form
                    className="contact-form"
                    ref={form}
                    onSubmit={handleSubmit}
                >

                    {/* NOM ET EMAIL */}
                    <div className="form-row">

                        <input
                            type="text"
                            name="from_name"
                            placeholder="Nom"
                            required
                        />

                        <input
                            type="email"
                            name="from_email"
                            placeholder="E-mail *"
                            required
                        />

                    </div>

                    {/* TELEPHONE */}
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Numéro de téléphone"
                        className="full-input"
                    />

                    {/* MESSAGE */}
                    <textarea
                        name="message"
                        placeholder="Commentaire"
                        rows="5"
                        required
                    />

                    {/* BOUTON */}
                    <button
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Envoi en cours..." : "Envoyer"}
                    </button>

                    {/* MESSAGE DE CONFIRMATION */}
                    {message && (
                        <p
                            className="contact-message"
                            style={{
                                color: success ? "green" : "red",
                                fontWeight: "bold"
                            }}
                        >
                            {message}
                        </p>
                    )}

                </form>

            </section>

        </div>
    );
}
