import './QuantityCartHandler.css'

const QuantityCartHandler = () => {

  return (
    <>
    <div className="custom-add absolute top-0 right-0 w-14 h-6 m-2 text-sm cursor-default">
        <button>-</button>
        <span>1</span>
        <button>+</button>
    </div>
    </>
  )
}

export { QuantityCartHandler }