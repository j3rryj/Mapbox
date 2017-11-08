import React from 'react';
mapboxgl.accessToken = 'pk.eyJ1IjoiamVycnlqb25nIiwiYSI6ImNqOW93OXB0YzFnaHcyd240ZmlvMTc3eDYifQ.ZLuZbS7D2OcCUxT642-6xA';

class Mapbox extends React.Component {
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [-118.2, 34],
      zoom: 9
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    const style = {
      height: '800px',
      width: '800px'
    };
    return <div style={style} ref={el => this.mapContainer = el} />;
  }
};

export default Mapbox;

// map.addControl(new MapboxGeocoder({
//     accessToken: mapboxgl.accessToken
// }));

// map.on('load', function() {
//     map.loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/400px-Cat_silhouette.svg.png', function(error, image) {
//         if (error) throw error;
//         map.addImage('cat', image);
//         map.addLayer({
//             "id": "points",
//             "type": "symbol",
//             "source": {
//                 "type": "geojson",
//                 "data": {
//                     "type": "FeatureCollection",
//                     "features": [{
//                         "type": "Feature",
//                         "geometry": {
//                             "type": "Point",
//                             "coordinates": [-118.2, 34]
//                         }
//                     }]
//                 }
//             },
//             "layout": {
//                 "icon-image": "cat",
//                 "icon-size": 0.1
//             }
//         });
//     });
// });  