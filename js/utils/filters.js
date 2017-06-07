'use strict';

const filterByDistrict = (stations,query) => {
   const filterGrifos = stations.filter((e) =>{
   return e.district.toLowerCase().indexOf(query.toLowerCase())!=-1;
 });
 return filterGrifos;
 };
