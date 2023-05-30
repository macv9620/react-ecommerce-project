import { Sad } from "../Icons/Sad"

const NoMatches = ({message}) => {
  return (
    <div className="flex flex-col mt-10 items-center">
      <Sad />
      <div>{message}</div>
    </div>
  )
}

export default NoMatches
