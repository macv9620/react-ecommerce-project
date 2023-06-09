import { Sad } from "../Icons/Sad"

const NoMatches = ({message}) => {
  return (
    <div className="flex flex-col items-center mt-6">
      <img className="w-40 mb-6" src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"/>
      <Sad />
      <div>{message}</div>
    </div>
  )
}

export default NoMatches
