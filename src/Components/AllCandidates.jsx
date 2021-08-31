import Candidate from "./Candidate";
import Information from "./Information"

export default function AllCandidates({
  candidates = []
}) {
  console.log(candidates);
  return (
    <div className="flex flex-wrap justify-center">
      {
        candidates.map(({ absence, candidates, id, name, presence, votingPopulation }) => {
          return (
            <>
              <Information label="Total de Eleitores">{votingPopulation}</Information>
              <Information label="Compareimento" txtColor="text-green-600">{presence}</Information>
              <Information label="Abstenção" txtColor="text-red-600">{absence}</Information>

              <div className="flex flex-row flex-wrap mt-16">
                <Candidate  candidates={candidates}/>
              </div>

            </>
          )
        })
      }
    </div>
  )
}


// {
//   candidates.sort((a, b) => a.name.localeCompare(b.name))
//     .map(({ id, name, username }) => {
//       return (
//         <div key={id} className="">
//           <div style={{ backgroundColor: "#606368" }} className="m-4 p-4 rounded-lg shadow-md text-gray-100 font-medium w-96">
//             <div className="flex flex-row">
//               <div className="flex w-2/4 justify-center p-2">
//                 <img src={`img/${username}.png`} alt="" className="rounded-full h-24 border-pink-400 border-4" />
//               </div>
//               <div className="flex col-end-13 w-2/4 items-center justify-center p-2 font-extrabold text-2xl">
//                 {name}
//               </div>
//             </div>
//           </div>
//         </div>
//       )
//     })
// }
