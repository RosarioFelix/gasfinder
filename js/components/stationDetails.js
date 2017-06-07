'use strict'

const StationDetails = (update) =>{
  const mostrar = $('<div class="container-map"></div>')
  const show = $('<div ></div>');
  const showtitle = $('<h5>'+state.selectedStation.name+'</h5>');
  const hr = $('<hr>')
  const showaddress = $('<p>'+state.selectedStation.address+'</p>');
  //const button = $('<button> re </button>');

  //mostrar.append(map);
  mostrar.append(show);
  show.append(showtitle);
  show.append(hr);
  show.append(showaddress);
  //show.append(button);



  for (var i= 0 ; i<state.selectedStation.products.length ; i++){
    const divType = $('<div class="type-gas"></div>');
    const showtypeGas = $('<p>'+state.selectedStation.products[i]+'</p>');
    divType.append(showtypeGas)
    show.append(divType);
  };
 //show.append(map)

 return mostrar;
};
