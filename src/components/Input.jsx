export default function Input ({ name, placeholder, type, handleChange}) {
  return (
    <label className="input__label" htmlFor={name}>
      <span className="input__label-span">{name}</span>
      <input name={name} className="input__label-input" type={type} placeholder={placeholder} id={name} onChange={handleChange} />
    </label>
  )
}