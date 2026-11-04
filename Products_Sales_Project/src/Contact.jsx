import React from "react";
import "./Contact.css";

export default function Contact() {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Votre message a été envoyé avec succès !");
        e.target.reset();
    };

    return (
        <div className="contact-page">

            <div className="contact-header">
                <h1>Contact</h1>
            </div>

            <section className="contact-section">

                <form className="contact-form" onSubmit={handleSubmit}>

                    <div className="form-row">
                        <input
                            type="text"
                            placeholder="Nom"
                            required
                        />

                        <input
                            type="email"
                            placeholder="E-mail *"
                            required
                        />
                    </div>

                    <input
                        type="tel"
                        placeholder="Numéro de téléphone"
                        className="full-input"
                    />

                    <textarea
                        placeholder="Commentaire"
                        rows="5"
                        required
                    ></textarea>

                    <button type="submit">
                        Envoyer
                    </button>

                </form>

            </section>

        </div>
    );
}
