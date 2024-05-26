document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}
function loadPartialView(viewName, divClass = null) {
    $.ajax({
      url: "views/" + viewName + ".html",
      method: "GET",
      success: function (data) {
        $(divClass).html(data);
      },
      error: function (xhr, status, error) {
        console.error("Error al cargar la vista parcial", error);
      },
    });
  }