if(Meteor.isClient){
	Session.setDefault('counter', 0)

	Template.hello.helpers({
		counter: function(){
			return Session.get('counter')
		}
	})

	Template.hello.events({
		'click button': function(){
			Session.set('counter', Session.get('counter') + 1)
			Meteor.call('validate')
		}
	})
}

if(Meteor.isServer){
	Meteor.methods({
		validate: function(){
			var data_path = "/tmp/" // process.cwd().split('.meteor')[0]
			var command = "\"C:/Program Files (x86)/nodejs/node.exe\" assets/app/xmllintwrapper.js assets/app/any.xml "+data_path+"private/any.xsd"
			console.log("COMMAND", command)
			try{
				// WORKS but FAILS as it restarts Meteor! (METEOR@1.2.1 according to result; 1.0 according to Windows 10 Control Panel\All Control Panel Items\Programs and Features) - Caused by change in project folder? I don't see any in Procmon.
                var xmllint = Meteor.npmRequire('xmllint')
				var fs = Npm.require('fs')
				var xml = fs.readFileSync(data_path + 'private/894761004021.xml', 'utf8')
				var xsd = fs.readFileSync(data_path + 'private/BU2.xsd', 'utf8')
				result = xmllint.validateXML({xml: xml, schema: xsd})
				console.log("RESULT", result, "METEOR", Meteor)
				// FAILS:
				/*
				var exec = Meteor.wrapAsync(Npm.require('child_process').exec)
				console.log(exec(command))
				*/
				// WORKS:
				/*
				var exec = Npm.require('child_process').exec
				Future = Npm.require('fibers/future')
				fut = new Future()
				exec(command, function(error, stdout, stderr){
					console.log('error:', error)    // Non-zero exit, error.code
					console.log('stdout:', stdout)  // Errors are here.
					console.log('stderr:', stderr)  // Not even when there's an error.
					fut.return(stdout)
				})
				result = fut.wait()
				*/
			}catch(er){console.log(er.stack)}
		}
	})
	Meteor.startup(function(){})
}
