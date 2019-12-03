/* analytics.js */
import Analytics from 'analytics'
import segmentPlugin from 'analytics-plugin-segment'

// ... whatever analytics provider you use

const analytics = Analytics({
  plugins: [
    segmentPlugin({
      writeKey: 'K9qwX6k1cnwWihUUNz5Mtk9ZD8HEqB1T',
    }),
  ]
})

// Set to global so analytics plugin will work with Gatsby
if (typeof window !== 'undefined') {
  window.Analytics = analytics
}

/* export for consumption in your components for .track & .identify calls */
export default analytics