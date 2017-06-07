'use strict';

const Header = (update) => {
  const header = $("<header></header>");
  const title = $("<span>Gas Finder</span>");
  const iconCar = $('<i class="fa fa-car" aria-hidden="true"></i>');
  const icon = $('<i class="fa fa-chevron-left" aria-hidden="true"></i>');

  header.append(title);
  header.append(iconCar);

  return header;
}
