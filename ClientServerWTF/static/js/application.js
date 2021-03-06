var Utils = {}
Utils.isNumeric = function(n) {
	  return !isNaN(parseFloat(n)) && isFinite(n);
}

Utils.numberWithCommas = function(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

$(document).ready(function() {

    // Use VEX dialogs to show the application instructions
	function showInfoDialog() {
		vex.open({
			contentClassName: 'infoDialog',
			content: 
				'<h2>Purpose</h2>' +
                '<p>This example show how to code up Flask-WTF forms.' +
                '   The form is created in a Flask-WTF Form which is presented' +
                '   to the user in the Sign Up page by rendering a Jinja2 template.' +
                '   All form validation is done by the Flask-WTF Form using the built in' +
                '   form validators. Some fields are required (email, password, first name)' +
                '   while others are optional. If a required field is empty or if some' +
                '   other validator fails, the reason for the failure is shown above the' +
                '   form, so the user can easily understand what to correct.</p></br>' +
                '<p>This example is the third in a series of Web Form examples. It is here' +
                '   to show how easily and quickly a full-featured validating Web Form' +
                '   can be built using Flask-WTF.</p>',
			overlayClassName:'infoDialogOverlay',
			showCloseButton:false});
	}

    $('#info').click(function() {
		showInfoDialog();
	});

	// jQuery UI code for tooltips
	$(document).tooltip();
});

