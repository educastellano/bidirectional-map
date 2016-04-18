# Bidirectional Map

Create key-value collections with unique keys and unique values.

# Install

    npm install bidirectional-map --save

# Usage


```js
    import BiMap from 'bidirectional-map'
    
    let map = new BiMap()
    map.set('bob', 'alice')
    map.get('bob')      // 'alice'
    map.getKey('alice') // 'bob'

```

# API

[here for now...](https://github.com/educastellano/bidirectional-map/blob/master/test.js)

## Changelog

* 1.0.0 
    * Initial release :tada:

## License

[ISC License](http://opensource.org/licenses/ISC)
