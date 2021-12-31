function Slider(props) {
  const {setValue, id, label, ...params} = props;
  function onChange(event) {
    setValue(parseFloat(event.target.value));
  }
  return (
    <tr>
      <th> <label htmlFor={id}>{label}</label> </th>
      <th> <input onChange={onChange} type="range" className="slider" id={id} {...params} /> </th>
      <th style={{minWidth: "4em"}}> {params.value} </th>
    </tr>
  );
}

export default Slider;
