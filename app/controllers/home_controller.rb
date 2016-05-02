class HomeController < ApplicationController

	def index
		flash[:notice] = 'Você entrou no sistema.'
	end

end
