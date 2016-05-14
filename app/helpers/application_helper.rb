module ApplicationHelper

	def layout name
		layout file: 'layouts/' + name
	end

	def flash_toastr
		layout 'flash_toastr'
	end

end
