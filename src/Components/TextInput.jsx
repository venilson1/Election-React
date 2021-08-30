export default function TextInput({
  labelDescription = 'descrição do input', 
  inputValue = 'valor padrão', 
  onInputChange = null,
  autoFocus = true
}) {


  function handlerNameChange ({target}) {
    if(onInputChange){
      onInputChange(target.value)
    }
  }

  return (
    <div>
      <div className="flex flex-col my-3">
        <label htmlFor="title" className="cursor-pointer">{labelDescription} :</label>
        <input
          type="text"
          id="title"
          className="border-1 p-2 outline-none"
          value={inputValue}
          onChange={handlerNameChange}
          autoFocus={autoFocus}
        />
      </div>
    </div>
  )
}
