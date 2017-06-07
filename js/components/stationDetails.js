'use strict'

const StationDetails = (update) =>{
  const show = $('<div ></div>');
  const hr = $('<hr>')
  const showtitle = $('<h5>'+state.selectedStation.name+'</h5>');
  const showaddress = $('<p>'+state.selectedStation.address+'</p>');
  const showtypeGas = $('<p>'+state.selectedStation.products+'</p>');

show.append(hr);
 show.append(showtitle);
 show.append(showaddress);
 show.append(showtypeGas);
 //show.append(map)

 return show;
};
