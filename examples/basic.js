var vraf = require('virtual-raf')
var h = require('virtual-dom/h')
var field = require('../index')

function render (state) {
  var elements = []

  elements.push(field(h, {
    display: true,
    zoom: 12,
    value: state.geojson,
    center: [47.621958, -122.33636]
  }))

  elements.push(field(h, {
    zoom: 12,
    value: state.geojson,
    center: [47.621958, -122.33636],
    onupdate: function (e, geojson) {
      state.geojson = geojson
      tree.update(state)
    }
  }))

  return h('div.fields', elements)
}

var initialState = {
  geojson: { type: 'FeatureCollection', features: [] }
}

var tree = vraf(initialState, render, require('virtual-dom'))
document.body.appendChild(tree())
