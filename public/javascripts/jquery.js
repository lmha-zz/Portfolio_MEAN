$(document).ready(function(){
	if(location.hash === "#/") {
		console.log('looking at resume')
		$('#resume_tab').attr('class', 'active')
	}
	if(location.hash === "#/projects") {
		console.log('looking at projects')
		$('#projects_tab').attr('class', 'active')
	}
	$(document).on('click', 'a', function(){
		$('.active').removeAttr('class');
		if($(this).parent().attr('id') == 'contact_tab') {
			$('#contact_tab').attr('class', 'active')
		}
		if(location.hash === "#/" && $(this).parent().attr('id') != 'contact_tab') {
			// console.log('looking at resume')
			$('#resume_tab').attr('class', 'active')
		}
		if(location.hash === "#/projects" && $(this).parent().attr('id') != 'contact_tab') {
			// console.log('looking at projects')
			$('#projects_tab').attr('class', 'active')
		}
	})
})