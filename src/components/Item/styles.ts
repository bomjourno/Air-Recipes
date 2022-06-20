import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
  gridItem: {
    padding: '0 !important',
  },
  container: {},
  cardContainer: {
    width: '348px',
    boxShadow:
      '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2) !important',
    borderRadius: '8px !important',
  },
  cardImage: {
    position: 'relative',
  },
  cardChips: {
    position: 'absolute',
    top: '150px',
    right: 0,
    paddingRight: '16px',
  },
  cardChipItem: {
    marginLeft: '8px !important',
    fontWeight: 400,
    fontSize: '12px !important',
    lineHeight: '16px !important',
    backgroundColor: '#fff !important',
  },
  cardActionArea: {
    height: '100%',
  },
  cardContent: {
    height: '188px',
    padding: '24px !important',
    boxSizing: 'border-box',
  },
  cardTitle: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    ' -webkit-line-clamp': 2 /* number of lines to show */,
    lineClamp: 2,
    '-webkit-box-orient': 'vertical',
  },
  cardText: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    ' -webkit-line-clamp': 4 /* number of lines to show */,
    lineClamp: 4,
    '-webkit-box-orient': 'vertical',
  },
})
