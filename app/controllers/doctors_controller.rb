class DoctorsController < ApplicationController
	respond_to :html, :json

	#showall Method

	def index

		if current_user.role == "Patient"
			@doctors = User.with_role(:Doctor)

			respond_with(@doctors) do |format|
     			format.json { render :json => @doctors.as_json(include: :professions)}
     			format.html
   			end
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

	end
	
	#ids
	def show
		@doctor = User.find(params[:id])
		# respond_with(@doctor.as_json(:include => [:professions, :doctor_feedbacks => {:include => :patient} ]))
		respond_with({doctor_profile: @doctor.as_json(:include => [:professions, :doctor_feedbacks => {:include => :patient}]), current_id: current_user.id})		
	end
	
	#ids
	def update
		if (params[:tocheck] == "UpdateProfile")
			
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
	
	#ids
	def destroy
		
	end

	# Profile of Doctor
	def profile

		@doctordata = User.find(params[:id])
		respond_to do |format|
  			format.json { render :json => @doctordata.as_json}
  			format.html
  		end
  	
	end

	private
	
	def patient_update_params
		params[:doctor].permit(:name, :email, :gender, :dob, :mobile, :alternate_mobile, :address, :locality, :city, :state, :country, :pincode)
	end

	
end