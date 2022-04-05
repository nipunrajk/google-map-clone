const MAP_ACCESS_TOKEN =
  'pk.eyJ1IjoibmlwdW5yYWoiLCJhIjoiY2wxa2JzNDZoMTJmYTNibjN0ZzY0ZWZ4dCJ9.Z-3eoiMPVNBKEK2mkWyvcg'

var map = new mapboxgl.Map({
  accessToken: MAP_ACCESS_TOKEN,
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
})

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
})

function setupMap(centerPosition) {
  const map = new mapboxgl.Map({
    accessToken: MAP_ACCESS_TOKEN,
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: centerPosition,
    zoom: 15,
  })

  const navigationControls = new mapboxgl.NavigationControl()
  map.addControl(navigationControls)

  const directionControls = new MapboxDirections({
    accessToken: MAP_ACCESS_TOKEN,
  })

  map.addControl(directionControls, 'top-left')
}

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
  console.log(position)
}

function errorLocation() {
  setupMap([-2.24, 53.48])
}
