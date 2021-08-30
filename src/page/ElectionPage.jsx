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
