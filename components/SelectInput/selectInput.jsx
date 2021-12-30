export default function selectInput(props) {

  const { id, options, handleChange } = props || {};

  return (
    <select className="select-box" onChange={handleChange} id={id}>
      {options.length &&
        options.map((item) => <option id={item?.id} value={item?.value}>{item?.label}</option>)}
    </select>
  );
}
