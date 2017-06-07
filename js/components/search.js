'use strict'

const Detalles = (station, update) =>{
  const details = $('<div></div>');
  const title = $('<h5>'+station.name+'</h5>');
  const iconMap = $('<span class="fa fa-map" aria-hidden="true"></span>');
  const address = $('<p>'+ station.address+'</p>');
  const district = $('<p>'+ station.district+'</p>');

 details.append(title);
 details.append(iconMap);
 details.append(address);
 details.append(district);

 details.on("click", (e) => {
    state.selectedStation = station;
    update();
  });
 return details;
};

const Search = (update) =>{
  const search= $('<section></section>')
  const divSearch = $('<div class = "container"><div>');
  const contSearch = $('<div class="flex"></div>')
  const icon = $('<span class="fa fa-search" aria-hidden="true">');
  const input = $('<input type = "text" placeholder = "Escriba Distrito"></span>');
  const groupContainer = $('<div class="group-details"></div>')

  divSearch.append(contSearch);
  contSearch.append(icon);
  contSearch.append(input);
  search.append(divSearch);
  search.append(groupContainer);

  input.on("keyup", (e) => {
    e.preventDefault;
    const filterGas = filterByDistrict(state.stations, $(e.currentTarget).val());
    reRender(groupContainer, filterGas, update);
  })
  return search;
};

const reRender = (groupContainer, filterGas, update) => {
  groupContainer.empty();
  filterGas.forEach((district) => {
  groupContainer.append(Detalles(district, update));
  });
};
