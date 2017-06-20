'use strict';

const Header = (update) => {
  const header = $("<header></header>");
  const title = $("<span>Gas Finder</span>");
  const iconCar = $('<i class="fa fa-car" aria-hidden="true"></i>');
  const icon = $('<i class="fa fa-chevron-left" aria-hidden="true"></i>');

  header.append(title);
  header.append(iconCar);

  if(state.selectedStation){
    
    header.prepend(icon);
    icon.on('click',(e) => {
        e.preventDefault();
        state.selectedStation = null;
        update();
        console.log(update);
      });
  };
  return header;
}
