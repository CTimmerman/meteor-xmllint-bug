# meteor-xmllint-bug
See Meteor restart after running xmllint.validateXML()

Question? File an issue.

Typical run on Windows 10:

```
C:\code\Meteor\test>meteor
[[[[[ C:\code\Meteor\test ]]]]]

=> Started proxy.
=> Started MongoDB.
=> Started your app.

=> App running at: http://localhost:3000/
   Type Control-C twice to stop.

I20160323-13:46:45.704(1)?
I20160323-13:46:45.705(1)? RESULT { errors: [ 'file_0.xml:2: element Article: Schemas validity error : Element \'Article\': No matching global declaration available for the validation root.' ] }
=> Exited with code: 3
I20160323-13:46:56.860(1)?
I20160323-13:46:56.867(1)? RESULT { errors: [ 'file_0.xml:2: element Article: Schemas validity error : Element \'Article\': No matching global declaration available for the validation root.' ] }
=> Meteor server restarted
=> Exited with code: 3
I20160323-13:47:09.177(1)?
I20160323-13:47:09.185(1)? RESULT { errors: [ 'file_0.xml:2: element Article: Schemas validity error : Element \'Article\': No matching global declaration available for the validation root.' ] }
=> Meteor server restarted
=> Exited with code: 3
I20160323-13:47:22.015(1)?
I20160323-13:47:22.025(1)? RESULT { errors: [ 'file_0.xml:2: element Article: Schemas validity error : Element \'Article\': No matching global declaration available for the validation root.' ] }
=> Meteor server restarted
=> Exited with code: 3
I20160323-13:47:34.266(1)?
I20160323-13:47:34.280(1)? RESULT { errors: [ 'file_0.xml:2: element Article: Schemas validity error : Element \'Article\': No matching global declaration available for the validation root.' ] }
=> Meteor server restarted
=> Exited with code: 3
I20160323-13:47:52.196(1)?
I20160323-13:47:52.204(1)? RESULT { errors: [ 'file_0.xml:2: element Article: Schemas validity error : Element \'Article\': No matching global declaration available for the validation root.' ] }
=> Meteor server restarted
=> Exited with code: 3
I20160323-13:48:06.812(1)?
I20160323-13:48:06.819(1)? RESULT { errors: [ 'file_0.xml:2: element Article: Schemas validity error : Element \'Article\': No matching global declaration available for the validation root.' ] }
=> Meteor server restarted
=> Exited with code: 3
I20160323-13:48:19.771(1)?
I20160323-13:48:19.778(1)? RESULT { errors: [ 'file_0.xml:2: element Article: Schemas validity error : Element \'Article\': No matching global declaration available for the validation root.' ] }
=> Meteor server restarted
=> Exited with code: 3
   Selecting package versions                |
```
