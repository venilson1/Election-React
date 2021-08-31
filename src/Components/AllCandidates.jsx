export default function AllCandidates({
  candidates = []
}) {
  return (
    <div className="flex flex-wrap justify-center">
      {
        candidates.map(({ absence, candidates, id, name, presence, votingPopulation }) => {
          return (
            <div key={id} className="flex flex-wrap flex-col space-y-6 m-8 text-left">
              <div className="bg-pink-200 rounded-lg shadow-md pl-16 p-4 w-96">
                <p className="text-lg">Total de Eleitores </p>
                <p className="font-semibold text-3xl">{votingPopulation}</p>
              </div>
              
              <div className="bg-pink-200 rounded-lg shadow-md pl-16 p-4 w-96">
                <p className="text-lg">Comparecimento </p>
                <p className="font-semibold text-3xl">{presence}</p>
              </div>

              <div className="bg-pink-200 rounded-lg shadow-md pl-16 p-4 w-96">
                <p className="text-lg">Abstenção </p>
                <p className="font-semibold text-3xl">{absence}</p>
              </div>
              

              
              
              
            </div>
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
