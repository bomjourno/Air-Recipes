import { makeStyles } from '@mui/styles'
import Image from '../../images/header__image.png'

export const useStyles = makeStyles({
  header: {
    position: 'sticky',
    zIndex: 2,
    top: 0,
    width: '100%',
    padding: '128px 58px 0 58px',
    backgroundColor: '#fff',
    boxSizing: 'border-box',
  },

  searchbar: {
    marginTop: '32px',
  },
  input: {
    '& .MuiOutlinedInput-root.Mui-focused': {
      '& > fieldset': {
        borderWidth: '1px',
      },
    },
    '& .MuiOutlinedInput-root:hover': {
      '& > fieldset': {
        borderColor: '#a9a9a9',
      },
    },
    '& .MuiOutlinedInput-root fieldset': {
      borderRadius: '28px',
    },
    '& .MuiOutlinedInput-root': {
      paddingLeft: '19px',
      paddingRight: '12.5px',
    },
    width: '276px',
  },
  filterIconWrap: {
    width: '56px',
    height: '56px',
    marginLeft: '16px !important',
    borderWidth: '1px !important',
    borderStyle: 'solid !important',
    borderColor: '#ddd !important',
  },
  filterIcon: {
    color: '#000',
  },
  cancelIcon: {
    width: '15px !important',
    height: '15px !important',
  },
  mainImage: {
    position: 'fixed',
    zIndex: '-10',
    right: 0,
    width: '814px',
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
  },
  modal: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },

  boxModal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    border: '2px solid #fff',
    background: '#fff',
    boxShadow: '24px',
    padding: '4px',
  },
  blackDrop: {
    backgroundColor: 'none',
  },
})
