import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
  modal: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  formFroup: {
    position: 'relative',
    padding: '0 30px 32px 30px',
  },
  boxModal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '440px',
    background: '#fff',
    boxShadow:
      '0px 16px 24px rgba(0, 0, 0, 0.14), 0px 6px 30px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.2)',
  },
  boxHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '32px 13px 16px 0',
    padding: '0 0 0 30px',
  },

  title: {
    margin: '32px 0 16px !important',
  },
  closeBtn: {
    top: '13px',
    right: '13px',
  },
  labelItem: {
    justifyContent: 'space-between',
    margin: '0 !important',
    paddingBottom: '2px',

    borderBottom: '1px solid rgba(33, 33, 33, 0.08)',
  },
  checkBox: {
    color: '#a9a9a9 !important',
    '&.Mui-checked': {
      color: '#82786a !important',
    },
  },
  slider: {
    color: '#82786a !important',
    height: 8,
    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-thumb': {
      height: 12,
      width: 12,
      backgroundColor: '#82786a',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&:before': {
        display: 'none',
      },
    },
    '& .MuiSlider-valueLabel': {
      lineHeight: 1.2,
      fontSize: 12,
      background: 'unset',
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: '50% 50% 50% 0',
      backgroundColor: '#82786a',
      transformOrigin: 'bottom left',
      transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
      '&:before': { display: 'none' },
      '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
      },
      '& > *': {
        transform: 'rotate(45deg)',
      },
    },
  },
  boxFooter: {
    width: '100%',
    marginTop: '62px',
  },
  clearBtn: {
    color: '#82786a !important',
    border: '1px solid #ddd !important',
    borderRadius: '4px',
    float: 'left',
  },
  submitBtn: {
    color: 'white !important',
    backgroundColor: '#82786a !important',
    float: 'right',
  },
})
