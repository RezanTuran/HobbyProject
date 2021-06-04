import React from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Checkbox,
  Grid,
} from '@material-ui/core/';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import useStyles from './style';
import PizzaData from './data';
import PizzaImg from '../../assets/pizza.jpg';

const Menu = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Grid container justify="center">
      {PizzaData.map((pizzaData: any, index: number) => {
        return (
          <Card className={classes.root} key={index}>
            <CardActionArea className={classes.card}>
              <CardMedia
                className={classes.media}
                image={PizzaImg}
                title="Pizza img"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {pizzaData.pizzaName}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {pizzaData.pizzaIngredients}
                </Typography>
              </CardContent>
              <CardContent>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checkedA}
                      onChange={handleChange}
                      name="checkedA"
                      color="secondary"
                    />
                  }
                  label={`${pizzaData.pizzaNaturePrice} :-`}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checkedB}
                      onChange={handleChange}
                      name="checkedB"
                      color="secondary"
                    />
                  }
                  label={`${pizzaData.pizzaFamilyPrice} :-`}
                />
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                endIcon={<ShoppingCartIcon />}
              >
                Köp
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </Grid>
  );
};

export default Menu;
