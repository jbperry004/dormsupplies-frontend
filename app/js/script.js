const form = document.forms[0]

function register() {
	const data = {}

	if(form.name.value) data.name = form.name.value
	if (form.email.value) data.email = form.email.value
	if (form.classYear.value) data.year = form.classYear.value
	if (form.password.value) data.password = form.password.value
	if (form.address.value) data.address = form.address.value	

	fetch('/register', {
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'POST', 
		body: JSON.stringify(data)
	}).then(function(res) {
		res.json()
		.then(function(user) {
			alert(JSON.stringify(user))
		})
	}).catch(function(err) {
		console.log("hi")
		console.log(err)
	})
}
