export default function AllCandidates({
  allCandidates = []
}) {
  return (
    <div>
      <div className="text-white font-bold text-5xl my-14 text-center">
        <h2>Candidatos</h2>
      </div>
      <div className="flex flex-wrap justify-center">
        {
          allCandidates.sort((a, b) => a.name.localeCompare(b.name))
            .map(({ id, name, username }) => {
              return (
                <div key={id} className="">
                  <div style={{ backgroundColor: "#606368" }} className="m-4 p-4 rounded-lg shadow-md text-gray-100 font-medium w-96">
                    <div className="flex flex-row">
                      <div className="flex w-2/4 justify-center p-2">
                        <img src={`img/${username}.png`} alt="" className="rounded-full h-24 border-pink-400 border-4" />
                      </div>
                      <div className="flex col-end-13 w-2/4 items-center justify-center p-2 font-extrabold text-2xl">
                        {name}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
        }
      </div>
    </div>
  )
}
