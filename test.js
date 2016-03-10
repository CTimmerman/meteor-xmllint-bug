if(Meteor.isServer){
	var data_path = process.cwd().split('.meteor')[0]
	try{
		// WORKS but FAILS as it restarts Meteor! (METEOR@1.2.1 though Windows 10 Control Panel\All Control Panel Items\Programs and Features says 1.0) - Caused by change in project folder? I don't see any in Procmon.
		var xmllint = Meteor.npmRequire('xmllint')
		var fs = Npm.require('fs')
		var xml = fs.readFileSync(data_path + 'private/any.xml', 'utf8')
		var xsd = fs.readFileSync(data_path + 'private/any.xsd', 'utf8')
		result = xmllint.validateXML({xml: xml, schema: xsd})
		console.log("RESULT", result)
	}catch(er){console.log(er.stack)}
}
