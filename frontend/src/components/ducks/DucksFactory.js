import React, {Component} from 'react';
import {inject} from 'mobx-react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import './ducks.scss';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import {ducksTypes} from '../../enums/ducks';

@inject(({DucksFactoryStore}) => {
  return {
    ducks: DucksFactoryStore.ducks,
    createDuck: DucksFactoryStore.createDuck,
    closeStore: DucksFactoryStore.closeStore,
    typeDuck: DucksFactoryStore.typeDuck,
    setTypeDuck: DucksFactoryStore.setTypeDuck,
    setDuckName: DucksFactoryStore.setDuckName,
    duckName: DucksFactoryStore.duckName,
    isOpenDrawer: DucksFactoryStore.isOpenDrawer,
    setDrawerStatus: DucksFactoryStore.setDrawerStatus
  };
})
class DucksFactory extends Component {
  componentWillUnmount() {
    this.props.closeStore();
  }

  render() {
    const {
      ducks,
      createDuck,
      typeDuck,
      setTypeDuck,
      setDuckName,
      duckName,
      setDrawerStatus,
      isOpenDrawer
    } = this.props;

    return (
      <React.Fragment>
        <div className={'left'}>
          <Button variant='contained' onClick={() => setDrawerStatus(true)}>
            {'Создать утку'}
          </Button>
        </div>
        <div className={'right'}>
          {ducks?.map((duck, key) => (
            <Card key={key} sx={{maxWidth: 345}}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  height='140'
                  image='/static/images/cards/contemplative-reptile.jpg'
                  alt='green iguana'
                />
                <CardContent>
                  <Typography gutterBottom={true} variant='h5' component='div'>
                    {duck.name}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
        <Drawer
          anchor={'right'}
          open={isOpenDrawer}
          onClose={() => setDrawerStatus(false)}
        >
          <div>
            {'Выбери характеристики для утки'}
          </div>
          <TextField id='standard-basic' label='Имя' variant='standard' onChange={setDuckName} />
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={typeDuck || ''}
            label='Age'
            onChange={setTypeDuck}
          >
            {
              ducksTypes.map(({type, val}, key) => (
                <MenuItem
                  key={key}
                  value={val}
                >
                  {type || ''}
                </MenuItem>
              ))
            }
          </Select>
          <Button
            onClick={createDuck}
          >
            {'Создать утку'}
          </Button>
        </Drawer>
      </React.Fragment>
    );
  }
}

DucksFactory.propTypes = {
  ducks: PropTypes.array,
  closeStore: PropTypes.func,
  createDuck: PropTypes.func,
  typeDuck: PropTypes.number,
  setTypeDuck: PropTypes.func,
  setDuckName: PropTypes.func,
  duckName: PropTypes.string,
  setDrawerStatus: PropTypes.func,
  isOpenDrawer: PropTypes.bool
};

export default DucksFactory;
