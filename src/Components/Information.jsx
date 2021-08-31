export default function Information({
  children,
  label = '',
  txtColor = ''
}) {
  return (
    <>
      <div className="bg-pink-200 rounded-lg shadow-md pl-8 p-4 w-64 m-4">
        <p className="text-lg">{label}</p>
        <p className={`font-semibold text-3xl ${txtColor}`}>{children.toLocaleString('PT')}</p>
      </div>
    </>
  )
}
