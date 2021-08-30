import { useState, useEffect } from "react";
import { apiGetCities } from "./services/apiService";
export default function App() {

  const [allCities, setAllCities] = useState([])

  useEffect(() => {
    (async () => setAllCities(await apiGetCities()))()
  }, [])

  console.log(allCities);

  return (
    <div>
      <header>
        <div className="bg-black mx-auto p-4 text-white border-b-8 border-red-600">
          <h1 className="text-center font-semibold text-xl">
            React Elections
          </h1>
        </div>
      </header>

      <main>
        <div className="container mx-auto p-4">
          <h2>O conteúdo fica aqui.</h2>
        </div>
      </main>
    </div>
  );
}
