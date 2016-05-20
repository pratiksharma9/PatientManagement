class HomesController < ApplicationController

	respond_to :html, :json
	
	def index
		
		@user = User.all
		
		respond_with(@users) do |format|
			format.json { render :json => @user.as_json }
			format.html
		end
	end
	
end
