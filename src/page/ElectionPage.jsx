import { useState, useEffect } from "react";
import { apiGetCandidates, apiGetCities, apiGetElection } from "../services/apiService";
import Header from "../Components/Header";
import Main from './../Components/Main';
import Option from "../Components/Option";
export default function ElectionPage() {

  const [allCities, setAllCities] = useState([]);
  const [allCandidates, setAllCandidates] = useState([]);

  useEffect(() => (async () => setAllCities(await apiGetCities()))(), [])
  useEffect(() => (async () => setAllCandidates(await apiGetCandidates()))(), [])

  async function handleChange(obj) {
    const { id, presence, votingPopulation, absence, name } = JSON.parse(obj)

    const response = await apiGetElection(id)

    response.forEach(election => {
      election.candidate = allCandidates
        .filter(({ id }) => id === election.candidateId)
        
      const percent = (election.votes * 100) / presence;
      election.percent = +percent.toFixed(2)
    })

    const city = {
      id,
      city: name,
      presence,
      votingPopulation,
      absence,
      candidates: response
    }

    console.log(city);
  }

  return (
    <>
      <Header />
      <Main>
        <Option allCities={allCities} onSelectedChange={handleChange} />
      </Main>
    </>
  );
}
