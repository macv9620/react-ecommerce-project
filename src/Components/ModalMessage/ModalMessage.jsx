import { useAppContext } from '../../Context/ContextAppProvider'
import { CircleCheck } from '../Icons/CircleCheck'
import { Close } from '../Icons/Close'
import { Layout } from '../Layout'
import './ModalMessage.css'

const ModalMessage = () => {
    const{setShowModalMessage, modalMessageToShow} = useAppContext()

    const hideModal = ()=> {
        setShowModalMessage(false)
    }

  return (
    <Layout>
    <div className="modal-message-background">
        <div className='modal-message-container'>
            {modalMessageToShow.type === 'success' && (
                <div className='modal-message-container__type--success'>
                    <CircleCheck/>
                </div>
            )}
            {modalMessageToShow.type === 'error' && (
                <div className='modal-message-container__type--error'>
                    <Close />
                </div>
            )}

            <div className='modal-message-container__text'>{modalMessageToShow.message}</div>
            <div className='modal-message-container__buttons'>
                <button
                 className={modalMessageToShow.type === 'success'
                 ?'modal-message-container__buttons--green'
                 :'modal-message-container__buttons--red'}
                 onClick={hideModal}>
                 Accept
                 </button>
            </div>
        </div>
    </div>
    </Layout>
  )
}

export {ModalMessage}