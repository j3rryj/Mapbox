import React from 'react';
mapboxgl.accessToken = 'pk.eyJ1IjoiamVycnlqb25nIiwiYSI6ImNqOW93OXB0YzFnaHcyd240ZmlvMTc3eDYifQ.ZLuZbS7D2OcCUxT642-6xA';
import { stores } from '../../sweetgreen.js';
import Sidebar from './Sidebar.jsx';

class Mapbox extends React.Component {
  constructor(props) {
    super(props);
    this.flyToStore = this.flyToStore.bind(this);
    this.createPopUp = this.createPopUp.bind(this);
  }
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [-77.034084, 38.909671],
      // initial zoom
      zoom: 14
    });
    this.map.on('load', () => {
      this.map.addSource('places', {
        type: 'geojson',
        data: stores
      });
      // console.log(this.map);
      let map = this.map;

      stores.features.forEach(function(marker) {
      // Create a div element for the marker
      var el = document.createElement('div');
      // Add a class called 'marker' to each div
      el.className = 'marker';
      // By default the image for your custom marker will be anchored
      // by its center. Adjust the position accordingly
      // Create the custom markers, set their position, and add to map
      new mapboxgl.Marker(el, { offset: [0, -23] })
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
      });
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  flyToStore(currentFeature) {
    this.map.flyTo({
      center: currentFeature.geometry.coordinates,
      zoom: 15
    });
  }

  createPopUp(currentFeature) {
    var popUps = document.getElementsByClassName('mapboxgl-popup');
    // Check if there is already a popup on the map and if so, remove it
    if (popUps[0]) popUps[0].remove();

    var popup = new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat(currentFeature.geometry.coordinates)
      .setHTML('<h3>Sweetgreen</h3>' +
        '<h4>' + currentFeature.properties.address + '</h4>')
      .addTo(this.map);
  }

  render() {
    const style = {
      height: '840px',
      width: '1200px'
    };
    return (
      <div style={{display: 'flex'}}>
        <Sidebar flyToStore={this.flyToStore} createPopUp={this.createPopUp}/>
        <div className="map pad2" style={style} ref={el => this.mapContainer = el}>Map</div>
      </div>
    );
  }
};

export default Mapbox;
