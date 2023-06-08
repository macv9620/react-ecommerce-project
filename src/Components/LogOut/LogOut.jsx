import { useAppContext } from '../../Context/ContextAppProvider'
import { useAuthContext } from '../../Context/ContextAuthProvider'
import { Layout } from '../Layout'
import './LogOut.css'

const LogOut = () => {
    const{setShowLogoutModal} = useAppContext()
    const{setUser} = useAuthContext()

    const hideModal = ()=> {
        setShowLogoutModal(false)
    }

    const resetUser = ()=> {
        setUser(null)
    }
  return (
    <Layout>
    <div className="log-out-background">
        <div className='log-out-container'>
            <p className='log-out-container__text'>are you sure to log out?</p>
            <div className='log-out-container__buttons'>
                <button
                 className='log-out-container__buttons--green'
                 onClick={resetUser}>
                 Confirm
                 </button>
                <button
                 className='log-out-container__buttons--red'
                 onClick={hideModal}>
                 Cancel
                 </button>
            </div>
        </div>
    </div>
    </Layout>
  )
}

export {LogOut}