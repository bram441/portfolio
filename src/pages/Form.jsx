import { useForm, ValidationError } from "@formspree/react";
export default function Form() {
  const [state, handleSubmit] = useForm("mrgjykjk");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className="form">
      <h1 id="form">
        Vragen? Hier onder kunt u snel een vraag sturen naar mij!
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          id="voornaam"
          type="text"
          name="voornaam"
          placeholder="voornaam"
          required
        />
        <ValidationError
          prefix="Voornaam"
          field="voornaam"
          errors={state.errors}
        />
        <br />
        <input
          id="achternaam"
          type="text"
          name="achternaam"
          placeholder="achternaam"
          required
        />
        <ValidationError
          prefix="Achternaam"
          field="achternaam"
          errors={state.errors}
        />
        <br />
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email Address"
          required
        />
        <br />
        <h2>Stel hier uw vraag</h2>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea id="vraag" name="vraag" required />
        <ValidationError prefix="vraag" field="vraag" errors={state.errors} />
        <br />
        <input type="submit" disabled={state.submitting} />
        <input type="reset" value="Reset" />
      </form>
    </div>
  );
}
