Config = {
  settings: {
    canvas_element: 'map_canvas',
    toolbar_element: 'toolbar'
  },
  resources: {
    images: {
      path: 'assets',
      files: {
        splash: {
          png: {
            text: [ 'dot', 'loading' ]
          }
        },

        common: {
          png: {
            bg: [ 'normal', 'trans' ],
            node: {
              connection: [ 'marker' ],
              _: [ 'node_adder', 'node_connector', 'node_circle', 'node_square', 'node_triangle' ]
            }
          }
        }
      }
    }
  }
};