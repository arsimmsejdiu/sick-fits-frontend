import useForm from "../lib/useForm";

export default function CreateProduct() {
  const { inputs, handleChange, resetForms, clearForm } = useForm({
    name: "Nice Shoes",
    price: 1234,
    description: "These are the best shoes you will ever own",
  });

  return (
    <form>
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name ... "
          value={inputs.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="price">
        Price
        <input
          type="number"
          id="price"
          name="price"
          placeholder="price ... "
          value={inputs.price}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="description">
        Description
        <input
          type="text"
          id="description"
          name="description"
          placeholder="description ... "
          value={inputs.description}
          onChange={handleChange}
        />
      </label>
      <button onClick={clearForm}>Clear Form</button>
    </form>
  );
}
