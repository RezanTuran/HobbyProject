import { Theme, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
  root: {
    maxWidth: 345,
    margin: 30,
    borderRadius: 10,
  },
  media: {
    height: 240,
  },
  card: {
    width: '30em',
  },
}));
