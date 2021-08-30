import { get } from "./httpService";

export async function apiGetCities() {
  const allCities = await get('/cities');
  return allCities;
}

export async function apiGetCandidates() {
  const allCandidates = await get('/candidates');
  return allCandidates;
}

export async function apiGetElection(id) {
  const allElections = await get(`/election?cityId=${id}`);
  return allElections;
}
