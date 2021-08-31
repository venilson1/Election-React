import { get } from "./httpService";

export async function apiGetCities() {
  const allCities = await get('/cities');
  return allCities;
}

export async function apiGetCandidates() {
  const allCandidates = await get('/candidates');
  return allCandidates;
}

export async function apiGetElection(cityId = 'a27c86ce-d99a-4f4f-8cbb-37302754734e') {
  const allElections = await get(`/election?cityId=${cityId}`);
  return allElections;
}