import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Form,
  Input,
  Select,
  Button,
  message,
  Row,
  Col,
} from 'antd';
import {
  addCar,
  editCar,
  deleteCar,
} from '../../actions/carActions';
import './CarDetails.scss';

const SelectOption = Select.Option;
const FormItem = Form.Item;

class CarDetails extends Component {
  state = {
    id: '',
    title: '',
    model: '',
    brand: '',
    year: '',
    color: '',
    km: '',
    price: '',
  }

  componentWillMount() {
    const {
      activeCar,
      type,
    } = this.props;
    if (type === 'edit') {
      this.setState({
        id: activeCar.id,
        title: activeCar.title,
        model: activeCar.model,
        brand: activeCar.brand,
        year: activeCar.year,
        color: activeCar.color,
        km: activeCar.km,
        price: activeCar.price,
      });
    }
  }

  changeState = (key, value) => {
    this.setState({
      [key]: value,
    });
  }

  validateFields = (type, id) => {
    const {
      onAddCar,
      onEditCar,
      onGoToList,
    } = this.props;
    const {
      title,
      model,
      brand,
      year,
      color,
      km,
      price,
    } = this.state;

    const car = {
      title,
      model,
      brand,
      year,
      color,
      km,
      price,
    };

    if (
      title !== ''
      && model !== ''
      && brand !== ''
      && year !== ''
      && color !== ''
      && km !== ''
      && price !== ''
    ) {
      if (type === 'edit' && id !== undefined && id !== null) {
        onEditCar(id, car);
        message.success('Dados enviados');
        onGoToList();
      } else {
        onAddCar(car);
        message.success('Dados enviados');
        onGoToList();
      }
    } else {
      message.error('Preencha todos os campos adequadamente!');
    }
  }

  render() {
    const {
      type,
      automakerReducer,
      onGoToList,
      onDeleteCar,
    } = this.props;
    const {
      id,
      title,
      model,
      brand,
      year,
      color,
      km,
      price,
    } = this.state;
    return (
      <Form className="car-form-container">
        <Button className="borderless-button">Problemas ao salvar o formulario</Button>
        <Row>
          <FormItem>
            <Input
              className="car-form-input"
              placeholder="Nome do produto"
              defaultValue={type === 'edit' ? title : null}
              onChange={event => this.changeState('title', event.target.value)}
            />
          </FormItem>
        </Row>
        <Row type="flex" justify="space-between">
          <Col span={11}>
            <FormItem>
              <Input
                className="car-form-input"
                placeholder="Modelo"
                defaultValue={type === 'edit' ? model : null}
                onChange={event => this.changeState('model', event.target.value)}
              />
            </FormItem>
          </Col>
          <Col span={11}>
            <FormItem>
              <Input
                className="car-form-input"
                placeholder="Ano"
                defaultValue={type === 'edit' ? year : null}
                onChange={event => this.changeState('year', event.target.value)}
              />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <FormItem>
            <Select
              className="car-form-select"
              placeholder="Marca"
              defaultValue={type === 'edit' ? brand : undefined}
              onChange={event => this.changeState('brand', event)}
            >
              {automakerReducer.map(automaker => (
                <SelectOption
                  key={automaker.id}
                  value={automaker.name}
                >
                  {automaker.name}
                </SelectOption>
              ))}
            </Select>
          </FormItem>
        </Row>
        <Row type="flex" justify="space-between">
          <Col span={11}>
            <FormItem>
              <Input
                className="car-form-input"
                placeholder="Cor"
                defaultValue={type === 'edit' ? color : null}
                onChange={event => this.changeState('color', event.target.value)}
              />
            </FormItem>
          </Col>
          <Col span={11}>
            <FormItem>
              <Input
                className="car-form-input"
                placeholder="Preço"
                defaultValue={type === 'edit' ? price : null}
                onChange={event => this.changeState('price', event.target.value)}
              />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={11}>
            <FormItem>
              <Input
                className="car-form-input"
                placeholder="Km"
                defaultValue={type === 'edit' ? km : null}
                onChange={event => this.changeState('km', event.target.value)}
              />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            {
              type === 'edit'
                ? <Button size="large" className="car-form-button-transparent" onClick={() => onDeleteCar(id)}>Remover</Button>
                : null
            }
            <Button size="large" className="car-form-button-transparent" onClick={() => onGoToList()}>Cancelar</Button>
          </Col>
          <Col className="car-form-buttons-group-right" span={12}>
            <Button
              size="large"
              className="car-form-button"
              onClick={
                type === 'edit'
                  ? () => this.validateFields(type, id)
                  : () => this.validateFields(type)
              }
            >
              Salvar
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default connect(
  ({ automakerReducer }) => ({
    automakerReducer,
  }),
  {
    onAddCar: addCar,
    onEditCar: editCar,
    onDeleteCar: deleteCar,
  },
)(CarDetails);
