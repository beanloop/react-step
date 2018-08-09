import {start} from 'documittu-template-default'
import apiData from './analyze-result.json'

start({
  title: 'react-steppers',
  pages: require.context('./pages', true, /^\.\/.*\.md$/),
  apiDocs: {
    data: apiData,
  },
})
