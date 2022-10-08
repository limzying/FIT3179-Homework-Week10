var vg_1="worldwide_internet_detail.vg.json";
var vg_2="worldwide_internet_user.vg.json";

vegaEmbed("#scatter_plot",vg_1).then(function(result){
  "action":false
}).catch(console.error);

vegaEmbed("#choropleth_map",vg_2).then(function(result){

}).catch(console.error);
