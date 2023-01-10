// `"use client"` is required to add an `onClick` handler to the form. A better
// option for production applications would be to extract the form into a client
// component rather than having the entire page render as a client component.
"use client";

import { useState } from "react";

export default function Home() {
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [email, setEmail] = useState("example@example.com");

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    setFormSubmitting(true);
    setFormSubmitted(false);

    await fetch("api/tasks/send-email", {
      method: "POST",
      body: JSON.stringify({ email }),
    });

    setFormSubmitting(false);
    setFormSubmitted(true);
  }

  return (
    <main>
      <h1>Mergent Example for Next.js</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          placeholder="Email"
        />
        <button disabled={formSubmitting}>Submit</button>
      </form>
      {formSubmitting ? (
        <p>Form submitting...</p>
      ) : formSubmitted ? (
        <p>Form submitted!</p>
      ) : (
        <p>Form not submitted yet.</p>
      )}
      <a href="https://app.mergent.co" target="_blank" rel="noreferrer">
        Mergent Console
      </a>
      <br />
    </main>
  );
}
