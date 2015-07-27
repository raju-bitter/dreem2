Ext.data.JsonP.BusServer({"tagname":"class","name":"BusServer","autodetected":{},"files":[{"filename":"busserver.js","href":"busserver.html#BusServer"},{"filename":"saucerunner.js","href":"saucerunner.html#BusServer"}],"members":[{"name":"addWebSocket","tagname":"method","owner":"BusServer","id":"method-addWebSocket","meta":{}},{"name":"broadcast","tagname":"method","owner":"BusServer","id":"method-broadcast","meta":{}},{"name":"getHTML","tagname":"method","owner":"BusServer","id":"method-getHTML","meta":{}},{"name":"onConnect","tagname":"event","owner":"BusServer","id":"event-onConnect","meta":{}},{"name":"onMessage","tagname":"event","owner":"BusServer","id":"event-onMessage","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-BusServer","extends":null,"singleton":null,"private":null,"mixins":[],"requires":[],"uses":[],"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/busserver.html#BusServer' target='_blank'>busserver.js</a></div><div class='dependency'><a href='source/saucerunner.html#BusServer' target='_blank'>saucerunner.js</a></div></pre><div class='doc-contents'><p>Holds a set of server side sockets for broadcast</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addWebSocket' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BusServer'>BusServer</span><br/><a href='source/busserver.html#BusServer-method-addWebSocket' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BusServer-method-addWebSocket' class='name expandable'>addWebSocket</a>( <span class='pre'>sock</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>adds a WebSocket to the BusServer ...</div><div class='long'><p>adds a WebSocket to the BusServer</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>sock</span> : WebSocket<div class='sub-desc'><p>socket to add</p>\n</div></li></ul></div></div></div><div id='method-broadcast' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BusServer'>BusServer</span><br/><a href='source/busserver.html#BusServer-method-broadcast' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BusServer-method-broadcast' class='name expandable'>broadcast</a>( <span class='pre'>message</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Send a message to all connected sockets ...</div><div class='long'><p>Send a message to all connected sockets</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>message</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getHTML' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BusServer'>BusServer</span><br/><a href='source/saucerunner.html#BusServer-method-getHTML' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BusServer-method-getHTML' class='name expandable'>getHTML</a>( <span class='pre'>htmlTemplatePath</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>generates the sauce runner HTML with all of the smoke tests ...</div><div class='long'><p>generates the sauce runner HTML with all of the smoke tests</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>htmlTemplatePath</span> : Object<div class='sub-desc'></div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-onConnect' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BusServer'>BusServer</span><br/><a href='source/busserver.html#BusServer-event-onConnect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BusServer-event-onConnect' class='name expandable'>onConnect</a>( <span class='pre'>message, socket</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Called when a new socket appears on the bus ...</div><div class='long'><p>Called when a new socket appears on the bus</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>message</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>socket</span> : WebSocket<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='event-onMessage' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BusServer'>BusServer</span><br/><a href='source/busserver.html#BusServer-event-onMessage' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BusServer-event-onMessage' class='name expandable'>onMessage</a>( <span class='pre'>message, socket</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Called when a new message appears on any of the sockets ...</div><div class='long'><p>Called when a new message appears on any of the sockets</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>message</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>socket</span> : WebSocket<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});