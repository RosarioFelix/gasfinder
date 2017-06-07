'use strict';

const initMap = (mapHola) => {
  let mapita = new GMaps({
    el: mapHola,
    lat: state.selectedStation.lat,
    lng: state.selectedStation.long
  });

  mapita.addMarker({
    lat: state.selectedStation.lat,
    lng: state.selectedStation.long,
    title: state.selectedStation.name,
    zoom: 13
  })
}

const GoogleMap = () => {
  const wrapper = $('<div id="map"></div>');
  wrapper.initMap = initMap.bind(null,wrapper.get(0));
  return wrapper;
};
