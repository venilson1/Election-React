export default function helpersApi(
  election = [],
  allCities = [],
  allCandidates = []
) {
  let obj;
  election.forEach((el) => {
    allCities.forEach((city) => {
      if (el.cityId === city.id) {
        el.cityName = city.name;
        el.percent = ((el.votes * 100) / city.presence).toFixed(2);
      }
    });

    allCandidates.forEach((candidate) => {
      if (el.candidateId === candidate.id) {
        el.name = candidate.name;
        el.username = candidate.username;
      }
    });

    obj = allCities.filter(city => {
      return city.id === el.cityId
    })

    return obj.forEach(element => {
      element.candidates = election
    })
  });
  return obj;
}
