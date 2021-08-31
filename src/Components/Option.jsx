export default function Option({
  allCities = [],
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
        className="outline-none p-2 bg-gray-100 font-semibold mt-10" defaultValue={"DEFAULT"}>
        <option value="DEFAULT" disabled>Ecolha um municipio</option>
        {
          allCities.sort((a, b) => a.name.localeCompare(b.name))
            .map(({id, name, votingPopulation, absence, presence}) => {
              return (
                <option key={id} 
                value={JSON.stringify({id, votingPopulation, absence, presence, name})}
                className="font-semibold"
                >{name}</option>
              )
            })
        }
      </select>
    </div>
  )
}

