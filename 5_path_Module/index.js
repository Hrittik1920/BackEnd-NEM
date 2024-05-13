const path = require('path')

console.log(path.dirname('C:/Users/user/Documents/NODE_JS_youtube_thap/5_path_Module/index.js'))
console.log(path.extname('C:/Users/user/Documents/NODE_JS_youtube_thap/5_path_Module/index.js'))
console.log(path.basename('C:/Users/user/Documents/NODE_JS_youtube_thap/5_path_Module/index.js'))

const myPath = path.parse('C:/Users/user/Documents/NODE_JS_youtube_thap/5_path_Module/index.js')
console.log(myPath.name)
console.log(myPath.root)
console.log(__dirname)
console.log(path.join(__dirname,".."))



