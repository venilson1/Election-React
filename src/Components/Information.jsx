export default function Information({
  children,
  label = '',
  txtColor = ''
}) {
  return (
    <div  className="flex flex-wrap m-4 text-left justify-center">
      <div className="bg-pink-200 rounded-lg shadow-md pl-8 p-4 w-64">
        <p className="text-lg">{label}</p>
        <p className={`font-semibold text-3xl ${txtColor}`}>{children.toLocaleString('PT')}</p>
      </div>
    </div>
  )
}
