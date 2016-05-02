module ApplicationHelper

	def element name
		render file: 'elements/' + name
	end

	def flash_toastr
		element 'flash_toastr'
	end

end
