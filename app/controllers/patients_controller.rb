class PatientsController < ApplicationController
	respond_to :html, :json

	#bulk
	def index
		respond_with do |format|
			format.json {render :json => {success: true}}
			format.html
		end
	end
	
	#bulk
	def new
		
	end
	
	#bulk
	def create
	
	end
	
	#ids
	def edit
		# reserved for edit Profile
	end
	
	#ids
	def show
		@patientdata = User.find(params[:id])
		respond_with(@patientdata.as_json)
	end
	
	#ids
	def update
		
		@updated = User.update(params[:id], permit_for_update)

		if(@updated.save)
			message = true;		
		else
		 	message = false;
		end

		respond_to do |format|
		 	format.json { render json: {success: message} }
		 	format.html
		 end

	end
	
	#ids
	def destroy
	
	end

	# User Define Methods
	private
	def permit_for_update
		params[:patient].permit(:name, :email, :gender, :dob, :mobile, :alternate_mobile, :address, :locality, :city, :state, :country, :pincode)
	end

	
end
