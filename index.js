var extend = require('xtend')
var createClassName = require('data-field-classname')
var createMap = require('./map')

/**
Create a virtual-dom geojson data-field for use with [data-ui](https://github.com/editdata/data-ui).
@param {function} h virtual-dom `h` function
@param {Object} properties an options object, including any properties you can pass to leaflet & virtual-dom/h
@param {String} properties.accessToken mapbox access token for using their API
@param {Object} properties.tileLayer Leaflet tilelayer, default is osm tiles
@param {String} properties.imagePath path to leaflet images
@param {Boolean} properties.display true for display mode, default is false for input mode
@param {Function} properties.onclick function called in display mode when a feature is clicked
@param {Function} properties.onupdate function called any time the geojson is updated
@param {Function} properties.onedit function called in input mode when a feature is edited
@param {Function} properties.ondraw function called in input mode when a feature is drawn
@param {Object} properties.value a geojson Feature or Featurecollection
@param {Object} value a geojson Feature or Featurecollection
@returns virtual-dom tree
@name createGeoJSONField
@example
var createGeoJSONField = require('data-field-geojson')

createGeoJSONField(h, { onclick: function (e){} }, geojsonObject)
*/
module.exports = function createGeoJSONField (h, properties, value) {
  properties = extend({
    tagName: 'div',
    display: false,
    size: 'normal',
    attributes: {}
  }, properties)

  properties.dataType = 'geojson'
  properties.fieldType = properties.display ? 'display' : 'input'
  value = value || properties.value
  var map = createMap(value, properties)
  properties.className = createClassName(properties)
  return h(properties.tagName, properties, map)
}
