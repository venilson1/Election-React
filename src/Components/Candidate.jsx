export default function Candidate({
  candidates = []
}) {

  return (
    <div>
      {
        candidates.sort((a, b) => b.percent - a.percent)
        .map(({ id, username, percent, name, votes }) => {
          return (
            <div key={id} style={{ backgroundColor: "#606368" }} className="m-8 p-4 rounded-lg shadow-md  font-medium w-96">
              <div className="flex flex-row p-4">
                <div className="flex w-2/4 justify-center ">
                  <img src={`img/${username}.png`} alt="" className="rounded-full h-24 border-pink-400 border-4" />
                </div>
                <div className="flex col-end-13 w-2/4 items-center justify-center p-2 flex-col">
                  <p className="font-extrabold text-2xl">{percent} %</p>
                  <p>{votes} votos</p>
                </div>
              </div>
              <div className="flex flex-row justify-center p-2 m-4 bg-pink-100 font-extrabold text-2xl">
                {name}
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
