// eslint-disable-next-line react/prop-types
const Layout = ({children})=> {
return(
    <div className="flex flex-col items-center mt-14">
        {children}
    </div>
)
}

export {Layout}