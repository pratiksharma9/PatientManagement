class FeedbacksController < ApplicationController

	respond_to :html, :json

	def index
		if current_user.has_role? :Doctor
			respond_with(current_user.doctor_feedbacks.to_json(:include => [:patient]))
		end
	end	

	def create
		if current_user.has_role? :Patient
			if current_user.patient_feedbacks.create(feedback_params)
				render_data("Feedback Created")
			else
				render_data("Error While Create Feedback")
			end	
		end
	end
	
	def update
		if current_user.has_role? :Patient
			if current_user.patient_feedbacks.find(params[:id]).update(feedback_update_params)
				render_data("Feedback Updated")
			else
				render_data("Error Occured While Updating feedback")
			end
		end
	end
	
	def destroy
		if current_user.has_role? :Patient
			if current_user.patient_feedbacks.find(params[:id]).destroy
				render_data("Feedback Deleted")
			else
				render_data("Error Occured")
			end
		end
	end

	private
	def feedback_params
		params.permit(:doctor_id, :content)
	end

	def feedback_update_params
		params.permit(:content)
	end
	
	def render_data(msg)
		respond_with do |format|
    	format.json { render :json => {feedback: msg}}
    	format.html
   	end
	end
end
