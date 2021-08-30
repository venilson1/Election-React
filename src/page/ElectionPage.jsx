import { useState, useEffect } from "react";
import Header from "../Components/Header";
import { apiGetCandidates, apiGetCities, apiGetElection } from "../services/apiService";
import Main from './../Components/Main';
export default function ElectionPage() {
  
  const [allCities, setAllCities] = useState([])
  const [allCandidates, setAllCandidates] = useState([])
  const [allElections, setAllElections] = useState([])

  useEffect(() => (async () => setAllCities(await apiGetCities()))(), [])
  useEffect(() => (async () => setAllCandidates(await apiGetCandidates()))(), [])
  useEffect(() => (async () => setAllElections(await apiGetElection()))(), [])

  console.log(allCities);
  console.log(allCandidates);
  console.log(allElections);

  return (
    <>
      <Header/>
      <Main/>
    </>
  );
}
