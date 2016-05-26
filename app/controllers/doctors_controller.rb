class DoctorsController < ApplicationController
	respond_to :html, :json

	#showall Method
	def index
		if current_user.has_role? "Patient"
			@doctors = User.with_role(:Doctor)
   		respond_with(@doctors.as_json(include: :professions))
	  end
	end	
	
	#ids
	def show
		if (User.exists?(params[:id])) && (current_user.has_role? "Patient")
			@doctor = User.find(params[:id])
			respond_with({doctor_profile: @doctor.as_json(:include => [:professions, :doctor_feedbacks => {:include => :patient}]), current_user_id: current_user.id})		
		else
			respond_with({msg: "Doctor Profile Not Found"});
		end
	end
	
	#ids
	def update
		if (params[:tocheck] == "UpdateProfile") && (current_user.has_role? "Doctor")
			user = User.find(params[:id])
			
			if user.update(patient_update_params)
				msg = true;
			else
				msg = false;
   		end
		end

		respond_with do |format|
     	format.json { render :json => {Success: msg}}
     	format.html
   	end
	end
	
	# Profile of Doctor
	def profile
		if (User.exists?(params[:id])) && (current_user.has_role? "Doctor") && (current_user.id == params[:id].to_i)
			respond_with({doctor: current_user, professions: current_user.professions});
		else
			respond_with({msg: "Profile Not Found", id: current_user.id});
		end
	end

	private
	def patient_update_params
		params[:doctor].permit(:name, :email, :gender, :dob, :mobile, :alternate_mobile, :address, :city, :state, :country, :pincode)
	end
	
end
