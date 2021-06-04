import { Theme, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: 'black',
  },
  logo: {
    width: '8em',
    display: 'flex',
  },
  menuIcon: {
    fontSize: '2em',
  },
  loginButton: {
    backgroundColor: '#c1a35f',
    fontWeight: 'bolder',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.down('xs')]: {
      flexGrow: 1,
    },
  },
  headerOptions: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-evenly',
  },
  navColor: {
    color: '#c1a35f',
    fontWeight: 'bolder',
  },
}));
