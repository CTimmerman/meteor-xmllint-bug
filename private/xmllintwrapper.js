console.log(new Date().toISOString(), 'XML lint using node', process.version)
fs = require('fs')
// process.argv = [ 'node', 'path\\xmllint.js.app', 'the.xml', 'the.xsd' ]
xml = fs.readFileSync(process.argv[2])
xsd = fs.readFileSync(process.argv[3])
eval(''+fs.readFileSync(__dirname+'/xmllint.js'))  // http://stackoverflow.com/a/5809968/819417
result = xmllint.validateXML({xml: xml, schema: xsd})
if(result.errors) console.log(result.errors)
else console.log('XML OK using node', process.version)