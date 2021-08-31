export default function AllCandidates() {
  return (
    <div>
      <div className="text-white font-bold text-5xl my-14 text-center">
        <h2>Candidatos</h2>
      </div>

      <div style={{ backgroundColor: "#606368" }} className="m-4 p-4 rounded-lg shadow-md text-gray-100 font-medium">
        <div className="flex flex-row">
          <div className="flex w-2/4 justify-center p-2">
            <img src="img/flash.png" alt="" className="rounded-full h-28" />
          </div>
          <div className="flex col-end-13 w-2/4 items-center justify-center p-2 font-extrabold text-2xl">
            flash
          </div>
        </div>
      </div>
    </div>
  )
}
