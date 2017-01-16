// Include React
var React = require("react");

// Creating the Login component
var Login = React.createClass({	
	render: function() {
	    return (
	    	<div id="login-signup-container">      
	           	<form>            
	                email address or username:<br/>
	                    <input className="form-boxes" type="text" name="firstname"/><br/>
	                password:<br/>
	                    <input className="form-boxes" type="text" name="firstname"/><br/>               
	                password:<br/>
	                    <input className="form-boxes" type="text" name="firstname"/><br/>
	                re-enter Password:<br/>
	                    <input className="form-boxes" type="text" name="firstname"/><br/>
	                username:<br/>
	                    <input className="form-boxes" type="text" name="firstname"/><br/>
	                username:<br/>
	                    <input className="form-boxes" type="text" name="firstname"/><br/>
	           	</form>           
      		</div>
	    )
	}
});

// Export the component back for use in other files
module.exports = Login;