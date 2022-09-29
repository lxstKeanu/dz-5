import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Ships extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'initial',
      error: null,
      data: null,
    };
  }

  fetchData = (id) => {
    this.setState({
      status: 'loading',
      error: null,
      data: null,
    });

    fetch(`https://swapi.dev/api/starships/${id}/`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        this.setState({
          status: 'success',
          error: null,
          data,
        });
      })
      .catch((error) => {
        this.setState({
          status: 'error',
          error: error.message,
          data: null,
        });
      })
  };

  render() {
    const { status, error, data } = this.state;
    const date = new Date(data?.created);
    const eDate = new Date(data?.edited);
    return (
      <div className="">
        {status === 'loading' || status === 'initial' ? (
          <div>Loading...</div>
        ) : (
          <div>
            {!data.detail  ? (
              <div className='main'>
                <div className='new__main'>
                  <div>Ship name is: {data.name}</div>
                  <div>Manufacturer: {data.manufacturer}</div>
                  <div>Cost: {data.cost_in_credits}</div>
                  <div>Length {data.length}</div>
                  <div> Max speed: {data.max_atmosphering_speed}</div>
                  <div>Crew: {data.crew}</div>
                  <div>Passengers: {data.passengers}</div>
                  <div>Cargo capacity: {data.cargo_capacity}</div>
                  <div>Consumables: {data.consumables}</div>
                  <div>Hyperdrive rating: {data.hyperdrive_rating}</div>
                  <div>MGLT: {data.MGLT}</div>
                  <div>Class: {data.starship_class}</div>
                  <div>Pilots: {data.pilots}</div>
                  <div>{data.films.map((e) => (
                  <div>Films<a href={e}>{e}</a></div>
                    ))}
                  </div>
                  <div>Created: {`${date.getFullYear()}:${String(date.getMonth() + 1).padStart(2, '0')}:${String(date.getDate()).padStart(2, '0')}`}</div>
                  <div>Edited: {`${eDate.getFullYear()}:${String(eDate.getMonth() + 1).padStart(2, '0')}:${String(eDate.getDate()).padStart(2, '0')}`}</div>
                </div>
              </div>
            ) : (
              <span style={{ color: 'red' }}>{data.detail} {error}</span>
            )}
          </div>
        )}
      </div>
    );
  }

  componentDidMount() {
    const { shipID } = this.props;
    this.fetchData(shipID);
  }

  componentDidUpdate(prevProps, prevState) {
    const prevShipID = prevProps.shipID;
    const shipID = this.props.shipID;

    if (prevShipID !== shipID) {
      this.fetchData(shipID);
    }
  }
}

export default Ships;

Ships.propTypes = {
  shipID: PropTypes.number,
};

Ships.defaultProps = {
  shipID: 1
};

