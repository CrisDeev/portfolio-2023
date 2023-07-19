// AiFillGithub, AiFillEye
import { AiFillCloseSquare } from 'react-icons/ai'
import { Modal, Button, Text } from '@nextui-org/react'
interface Props {
  handleOpenModal: () => void
  title: string | undefined
  description: string | undefined
  projGitHub: string | undefined
  projTecnologies: string[] | undefined
  projImages: string | undefined
  projLink: string | undefined
  setVisible: any
  bindings: any
}

export const ModalProjects: React.FC<Props> = ({ handleOpenModal, title, description, projGitHub, projTecnologies, projImages, projLink, setVisible, bindings }) => {
  const handleCloseModal = (): void => {
    setVisible(false)
  }
  return (
    <div>
      <Modal
        scroll
        width="600px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text
            id="modal-title" size={18}>
            {title}
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text id="modal-description">
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
            purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Morbi leo risus, porta ac consectetur ac,
            vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et. Cras mattis consectetur purus sit amet
            fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
            purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Morbi leo risus, porta ac consectetur ac,
            attis consectetur purus sit amet
            ferm vel scelerisque nisl consectetur et.
            Cras mattinsectetur et. Cras mattis consectetur
            purus sit amet i Cras mattis consectetur
            purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Morbi leo risus, porta ac consectetur ac,
            vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et.
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={handleCloseModal}>
            Close
          </Button>
          <Button auto onPress={handleCloseModal}>
            Agree
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
