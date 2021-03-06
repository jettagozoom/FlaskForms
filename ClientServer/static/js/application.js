var Utils = {}
Utils.isNumeric = function(n) {
	  return !isNaN(parseFloat(n)) && isFinite(n);
}

Utils.numberWithCommas = function(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function validatePassword(pw) {
    return pw.length > 0;
}

// Use VEX to show each validation error
function showFormValidateDialog(str) {
    var somevar = "";
    vex.open({
        contentClassName: 'validateDialog',
        content: 
            '<p class="validate">' + str + '</h4>',
        overlayClassName:'validateDialogOverlay',
        showCloseButton:true});
}

function validateForm(form) {
    // Call various validate handlers to check for proper values.
    if (validatePassword(form.pw.value) == false) {
        showFormValidateDialog('Please enter a valid password');
        return false;
    }
    console.log("Email: " + form.email.value);
    console.log("Name: " + form.firstname.value + " " + form.lastname.value);
    console.log("City: " + form.city.value);
    console.log("State: " + form.state.value);
    console.log("Zip Code: " + form.zipcode.value);
    if (form.gender[0].checked)
        console.log("Gender: " + form.gender[0].value);
    else if (form.gender[1].checked)
        console.log("Gender: " + form.gender[1].value);
    else
        console.log("Gender: " + "not specified");
    console.log("Stay signed in?: " + form.signin_remember.checked);
    return true; // set to true to have form cleared after submission
}

$(document).ready(function() {

    // Use VEX dialogs to show the application instructions
	function showInfoDialog() {
		vex.open({
			contentClassName: 'infoDialog',
			content: 
				'<h2>Purpose</h2>' +
                '<p>This example show how to code up raw HTML forms in Flask.' +
                '   The form is created in a Flask template which is presented' +
                '   to the user in the startup page. Then, the form is posted' +
                '   to the Flask server and the form data is retrieved from' +
                '   the request. The form data is then displayed in the browser' +
                '   in a new web page (home.html).<p><br>' +
                '<p>This implementation does not use Flask-WTF forms. All form' +
                '   validation is still done in the client in Javascript. When ' +
                '   the form data gets to the Flask server, the data is considered' +
                '   to be valid data.<p>',
			overlayClassName:'infoDialogOverlay',
			showCloseButton:false});
	}


    $('#info').click(function() {
		showInfoDialog();
	});

	// jQuery UI code for tooltips
	$(document).tooltip();
});

