function Checkbox(props) {
  const {setValue, id, label, ...params} = props;
  function onChange(event) {
    setValue(event.target.checked);
  }
  return (
    <tr>
      <th> <label htmlFor={id}>{label}</label> </th>
      <th> <input onChange={onChange} type="checkbox" className="checkbox" id={id} {...params} /> </th>
    </tr>
  );
}

export default Checkbox;
