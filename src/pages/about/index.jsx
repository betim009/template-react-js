import useFetch from "../../hooks/useFetch";
import useForm from "../../hooks/useForm";

export default function About() {

  const {
    handleChange,
    valueForm,
    handleClick,
    handleFormChange
  } = useForm();

  const { data } = useFetch();

  return (
    <main>
      <p>Hook's:</p>
      <input
        placeholder="Escreva algo..."
        value={valueForm}
        onChange={handleChange}
      />
      <p>{valueForm}</p>
      <button onClick={handleClick}>Click</button>

      <br />
      <br />

      <input
        type="text"
        name="name"
        onChange={handleFormChange}
        placeholder="Nome..."
      />
      <input
        type="text"
        name="email"
        onChange={handleFormChange}
        placeholder="Email..."
      />
    </main>
  );
}
