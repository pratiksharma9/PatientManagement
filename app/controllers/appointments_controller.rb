class AppointmentsController < ApplicationController
	respond_to :html, :json
	
	# Show All
	def index
		if(current_user.has_role? :Patient) || (current_user.has_role? :Doctor)
			respond_with(record: current_user.send(appointments_according_role).as_json(include: [:doctor, :patient]), for: current_user.roles.first.name)
		end
	end

	#ids
	def update

		# Now we will use send method that convert a string to executeable Method
		# Pending(Date), Confirmed(Time), Cancelled(both patient and User), 
		if ((current_user.has_role? :Patient) && params[:status] == "Pending")
		
			option = current_user.patient_appointments.create(patient_appointment_params)
			msg = "Appointment Successful awating for Confirmation";
		
		elsif ((current_user.has_role? :Doctor) && params[:status] == "Confirmed")

			updated = current_user.doctor_appointments.find(params[:id]).update(appointment_params)
			msg = 'Time Successfully Updated'
		
		elsif (params[:status] == "Canceled") && ((current_user.has_role? :Patient) || (current_user.has_role? :Doctor))

			# here we will merge user_type_appointments
			status_updated = current_user.send(appointments_according_role).find(params[:id]).update(appointment_params)
			msg = "Cancelled"

		elsif ((current_user.has_role? :Patient) && (params[:status] == "EditDate"))

			# here we will merge user_type_appointments
			editdate = current_user.send(appointments_according_role).find(params[:id]).update(edit_params)
			msg = "Appointment Date Has Been Updated"
			
		else
			msg = "Getting Problem"		
		end

		respond_with do |format|
			format.json {render json: {appointment: msg} }
			format.html
		end

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

	def appointments_according_role
		current_user.roles.first.name.downcase + '_appointments';
	end
end
