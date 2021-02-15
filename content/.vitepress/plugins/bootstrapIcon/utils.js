import { h } from 'vue'

export const getBootstrapIconComponentOptions = ({ name, path }) => ({
  props: {
    /**
     * Icon width
     * { string }
     */
    width: {
      type: Number,
      default: 16
    },
    /**
     * Icon height
     * { string }
     */
    height: {
      type: Number,
      default: 16
    },
  },
  setup(props) {
    return () => h('svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        width: props.width,
        height: props.height,
        fill: 'currentColor',
        class: `bi bi-${name}`,
        viewBox: '0 0 16 16'
      },
      [ h('path', { d: path }) ]
    )
  }
})
