export default function Option({
  citiesChange = [],
  onSelectedChange = null
}) {

  function handlerCityChange(event) {
    if(onSelectedChange){
      onSelectedChange(event.target.value)
    }
  }

  return (
    <div className="text-center">
      <select
        onChange={handlerCityChange}
        className="outline-none p-2 bg-gray-100 font-semibold m-10">
        {
          citiesChange.sort((a,b) => a.name.localeCompare(b.name))
          .map(({id, name}) => {
            return (
              <option key={id} value={id}>{name}</option>
            )
          })
        }
      </select>
    </div>
  )
}