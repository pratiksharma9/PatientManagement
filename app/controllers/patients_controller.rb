class PatientsController < ApplicationController
	respond_to :html, :json
	
	def edit 
		# view reserved for profile
	end
	
	def show
	
		if (User.exists?(params[:id])) && (current_user.id == params[:id].to_i)
			@patientdata = User.find(params[:id])
			respond_with(@patientdata.as_json)
		else
			respond_with({msg: "Profile Not Found", id: current_user.id})
		end
		
	end
	
	def update
		if(User.exists?(params[:id])) && (current_user.id == params[:id].to_i)
			
			@updated = User.update(params[:id], permit_for_update)
			
			if(@updated.save)
				msg = true;
			else
				msg = false;
			end
			
		end

		respond_with do |format|
		 	format.json { render json: {success: msg} }
		 	format.html
		end
		
	end
	
	private
	def permit_for_update
		params[:patient].permit(:name, :gender, :dob, :mobile, :alternate_mobile, :address, :city, :state, :country, :pincode)
	end

end
