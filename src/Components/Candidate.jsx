export default function Candidate({
  candidates = []
}) {
  const maxVotes = candidates.map(({ votes }) => votes)
    .reduce((a, b) => Math.max(a, b));
  return (
    <div>
      <div className="text-center my-10 ">
        <span className="text-white text-6xl">{candidates.length} Candidatos</span>
      </div>
      <div className="flex justify-center flex-wrap">
        {
          candidates.sort((a, b) => b.percent - a.percent)
            .map(({ id, username, percent, name, votes }) => {

              const textElected = maxVotes === votes ? 'text-green-400' : 'text-yellow-500'
              const borderElected = maxVotes === votes ? 'border-green-400' : 'border-yellow-500'
              const badgeElected = maxVotes === votes ? 'bg-green-400' : 'bg-yellow-500'
              const elected = maxVotes === votes ? 'Eleito' : 'Não Eleito'


              return (
                <div key={id} style={{ backgroundColor: "#606368" }} className="m-8 p-4 rounded-lg shadow-md font-medium w-96 ">
                  <div className="flex flex-row p-4">
                    <div className="flex w-2/4 justify-center ">
                      <img src={`img/${name}.png`} alt={name} className={`rounded-full h-24 ${borderElected} border-4`} />
                    </div>
                    <div className="flex col-end-13 w-2/4 items-center justify-center p-2 flex-col">
                      <p className={`font-extrabold text-2xl ${textElected}`}>{percent} %</p>
                      <p>{votes.toLocaleString('PT')} votos</p>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center p-2 m-4 bg-pink-100 font-extrabold text-2xl">
                    {name}
                  </div>
                  <span className={`text-center flex justify-center ${badgeElected} p-1 rounded-2xl mx-32`}>
                    {elected}
                  </span>
                </div>
              )
            })
        }
      </div>
    </div>
  )
}
