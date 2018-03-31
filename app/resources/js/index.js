$(document).ready(() => {
  $('#modalButton').click();
  $('#modalButton').hide();
  hideMap();
});

const hideMap = () => {
  if(window.location.protocol !== "https:") {
    $('#sectionMap').remove();
  }
}
