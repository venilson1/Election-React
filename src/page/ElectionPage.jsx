import Header from "../Components/Header";
import Main from './../Components/Main';
import { useState } from 'react';
import { useEffect } from 'react';
import { apiGetCandidates, apiGetCities, apiGetElection } from "../services/apiService";
import helpersApi from "../helpers/helpersApi";
import AllCandidates from "../Components/AllCandidates";
import Option from './../Components/Option';
import Loading from './../Components/Loading';

export default function ElectionPage() {

  const [election, setElections] = useState([]);
  const [allCities, setAllCities] = useState([]);
  const [allCandidates, setAllCandidates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await apiGetElection()
      setElections(response)

      setTimeout(() => {
        setLoading(false);
      }, 500)
    })()
  }, [])

  useEffect(() => {
    (async () => {
      const response = await apiGetCities()
      setAllCities(response)
    })()
  }, [])

  useEffect(() => {
    (async () => {
      const response = await apiGetCandidates()
      setAllCandidates(response)
    })()
  }, [])

  const obj = helpersApi(election, allCities, allCandidates)


  async function handlerChangeCitySelected(id) {
    const newResponse = await apiGetElection(id)
    setElections(newResponse)
  }

  let mainJsx = (
    <div className="flex justify-center items-center h-screen">
      <Loading />
    </div>
  )

  if (!loading) {
    mainJsx = (
      <>
        <Option citiesChange={allCities} onSelectedChange={handlerChangeCitySelected} />
        <AllCandidates candidates={obj} />
      </>
    )
  }

  return (
    <div style={{ backgroundColor: "#202124" }}>
      <Header />
      <Main>
        {mainJsx}
      </Main>
    </div>
  );
}
