class FeedbacksController < ApplicationController

	respond_to :html, :json

	#showall Method
	def index
		temp = current_user.doctor_feedbacks
		respond_with(temp.to_json(:include => [:patient]))
	end	

	#bulk
	def new
		
	end
	
	#bulk
	def create
		if current_user.patient_feedbacks.create(feedback_params)
			msg = "Feedback Created"
		end

		respond_with do |format|
     		format.json { render :json => {feedback: msg}}
     		format.html
   		end
	end
	
	#ids
	def edit

	end
	
	#ids
	def show

	end
	
	#ids
	def update
		if current_user.patient_feedbacks.find(params[:id]).update(feedback_update_params)
			msg = "Feedback Updated"
		else
			msg = "Error Occured While Updating feedback"
		end

		respond_with do |format|
     		format.json { render :json => {feedback: msg}}
     		format.html
   		end
	end
	
	#ids
	def destroy
		if current_user.patient_feedbacks.find(params[:id]).destroy
			msg = "Feedback Deleted"
		else
			msg = "Error Occured"
		end
			
		respond_with do |format|
     		format.json { render :json => {feedback: msg}}
     		format.html
   		end
	end

	# Profile of Doctor
	def profile

	end

	private
	
	def feedback_params
		params.permit(:doctor_id, :content)
	end

	def feedback_update_params
		params.permit(:content)
	end
end
