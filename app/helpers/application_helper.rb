module ApplicationHelper

	def layouts name
		render file: 'layouts/' + name
	end

	def flash_toastr
		layouts 'flash_toastr'
	end

	def field_message resource, field
		render file: 'layouts/forms/input_message', locals: {resource: resource, field: field}
	end

end
