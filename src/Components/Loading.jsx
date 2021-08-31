import BounceLoader from 'react-spinners/BounceLoader'
export default function Loading() {

  return (
    <div>
      <BounceLoader color={"rgba(249, 168, 212)"}  speedMultiplier={1.5} />
    </div>
  )
}