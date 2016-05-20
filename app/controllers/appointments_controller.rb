class AppointmentsController < ApplicationController

	respond_to :html, :json
	
	# Show All
	def index
		respond_with do |format|
			format.json {render :json => {record: current_user.send(current_user.role.downcase + '_appointments').as_json(include: [:doctor, :patient]), message: "For"+current_user.role, id: current_user.id}}
			format.html
		end
	end

	#ids
	def update

		if (params[:status] == "Pending")

			option = current_user.patient_appointments.create(patient_appointment_params)
			msg = "Appointment Successful awating for Confirmation";
		
		elsif (params[:status] == "Confirmed")

			@updated = current_user.doctor_appointments.find(params[:id]).update(appointment_params)
			msg = 'Time Successfully Updated'
		
		elsif (params[:status] == "Canceled")

			# Now we will use send method that convert a string to Method  
			according = current_user.role.downcase + '_appointments'; 
			# here we will merge according
			@status_updated = current_user.send(according).find(params[:id]).update(appointment_params)

			msg = "Cancelled"

		elsif (params[:status] == "EditDate")
			
			editdate = current_user.send(current_user.role.downcase + '_appointments').find(params[:id]).update(edit_params)
			msg = "Appointment Date Has Been Updated"

		elsif

			msg = "No Pending Confirm Cancelled"
						
		end

		respond_to do |format|
			format.json {render json: {appointment: msg} }
			format.html
		end
		
	end

	# Doctor Description
	def show
		# reserved For Doctor Description in angular
	end

	# doctor Search
	def search
		
	end

	#ids
	def destroy

	end


	private
	def appointment_params
		params.permit(:status, :doctor_confirm_time)
	end

	def patient_appointment_params
		params.permit(:patient_date, :doctor_id, :status)
	end

	def edit_params
		params.permit(:patient_date)
	end
end
