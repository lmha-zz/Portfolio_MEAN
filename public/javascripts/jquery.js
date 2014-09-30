$(document).ready(function(){
	if(location.hash === "#/") {
		$('#resume_tab').attr('class', 'active')
	}
	if(location.hash === "#/projects") {
		$('#projects_tab').attr('class', 'active')
	}
	$(document).on('click', 'a', function(){
		$('.active').removeAttr('class');
		if($(this).parent().attr('id') == 'contact_tab') {
			$('#contact_tab').attr('class', 'active')
		}
		if(location.hash === "#/" && $(this).parent().attr('id') != 'contact_tab') {
			$('#resume_tab').attr('class', 'active')
		}
		if(location.hash === "#/projects" && $(this).parent().attr('id') != 'contact_tab') {
			$('#projects_tab').attr('class', 'active')
		}
	})
})