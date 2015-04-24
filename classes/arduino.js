

define(function(require, exports, module){
	var node = require("../classes/node")
	var teem = require("../classes/teem")
	// do not reload the serialport module - it has operating-system dependent things that will crash otherwise
	var serialPortModule = define.serialOnce || (define.serialOnce = require("serialport"));
	var SerialPort = serialPortModule.SerialPort
	//var SerialPort = serialPortModule.SerialPort;

	function readline (delimiter, encoding) 
	{
		if (typeof delimiter === 'undefined' || delimiter === null) { delimiter = '\r'; }
		if (typeof encoding  === 'undefined' || encoding  === null) { encoding  = 'utf8'; }
		// Delimiter buffer saved in closure
		var data = '';
		return function (emitter, buffer) 
		{
			// Collect data
			data += buffer.toString(encoding);
			// Split collected data by delimiter
			var parts = data.split(delimiter);
			data = parts.pop();
			parts.forEach(function (part) 
			{
				emitter.emit('data', part);
			});
		};
	}  
	

	
	return node.extend("arduino", function(){
	
		this.portOpened = false;
		
		
		this.attribute("testprop", "boolean")
		this.attribute("init", "event")
		
		this.scanPorts = function()
		{
			serialPortModule.list(function (err, ports) 
			{
				ports.forEach(function(port) 
				{
					console.log("available com port: " + port.comName + " " + port.pnpId + " " + port.manufacturer);
					if (port.comName.toLowerCase() == this.port.toLowerCase())
					{
						this.clearInterval(this.portScanner);
						this.portScanner = undefined;
					}
				});
		});

		}
		this.init = function() 
		{
			console.color('~br~Arduino~~ object started on server\n')	
			console.log("my port: " + this.port);
			
			this.portScanner = setInterval(this.scanPorts, 1000);
		}
		
		this.test = function(){
		console.log('test called!')
	}
	})
})