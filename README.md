# data-field-geojson

## API

### createGeoJSONField

Create a virtual-dom geojson data-field for use with [data-ui](https://github.com/editdata/data-ui).


**Parameters**

-   `h` **function** virtual-dom `h` function

-   `properties` **Object** an options object, including any properties you can pass to leaflet & virtual-dom/h
    -   `properties.accessToken` **String** mapbox access token for using their API

    -   `properties.tileLayer` **Object** Leaflet tilelayer, default is osm tiles

    -   `properties.imagePath` **String** path to leaflet images

    -   `properties.display` **Boolean** true for display mode, default is false for input mode

    -   `properties.onupdate` **Function** function called any time the geojson is updated

    -   `properties.onedit` **Function** function called in input mode when a feature is edited

    -   `properties.ondraw` **Function** function called in input mode when a feature is drawn

    -   `properties.value` **Object** a geojson Feature or Featurecollection

    -   `properties.onclick` **Function** function called in display mode when a feature is clicked

-   `value` **Object** a geojson Feature or Featurecollection



**Examples**

```javascript
var createGeoJSONField = require('data-field-geojson')

createGeoJSONField(h, { onclick: function (e){} }, geojsonObject)
```




## See also

-   [data-fields](https://github.com/editdata/data-fields) – all data fields packaged together.
-   [data-ui](https://github.com/editdata/data-ui) – a collection of modules for managing data.

## License

[MIT](LICENSE.md)
