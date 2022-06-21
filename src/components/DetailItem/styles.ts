import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
  container: {
    display: 'flex !important',
    justifyContent: 'space-between',
    maxWidth: '1114px !important',
    marginTop: '48px',
    padding: '0 15px 0 15px !important',
    boxSizing: 'border-box',
  },
  columnContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    maxWidth: '532px',
  },
  titleContainer: {},
  title: {},
  description: {
    margin: '15px 0 !important',
  },
  infobarIcons: {
    display: 'flex',
  },
  infobarIcon: {
    display: 'flex',
    marginRight: '33px',
  },
  infobarIconText: {
    marginLeft: '8px !important',
  },
  ingredientsContainer: {
    marginTop: '35px',
  },
  ingredientsItem: {
    display: 'flex',
    alignItems: 'center',
  },
  ingredientsListItem: {
    padding: '9px 16px 9px 3px !important',
  },
  instructionsContainer: {
    marginTop: '15px',
    marginBottom: '96px',
  },
  instructionsItem: {
    position: 'relative',
  },
  instructionsListItem: {
    display: 'flex',
    alignItems: 'start !important',
    padding: '5px 0 7px 3px !important',
  },
  instructionsItemMark: {
    width: '16px',
    height: '16px',
    margin: '3px 6px 0 0 ',
    color: 'black',
    fontWeight: 700,
    fontSize: '9px',
    lineHeight: '15px',
    textAlign: 'center',
    border: '1px solid #ddd',
    borderRadius: '50%',
  },
})
