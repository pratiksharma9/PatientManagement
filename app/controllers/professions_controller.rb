class ProfessionsController < ApplicationController
	respond_to :html, :json

	def create
		
		if current_user.has_role? :Doctor
			@r = current_user.professions.create(profession_params[:profession])
			
			professions_save = []
			@r.each do |temp| 
				if temp.save
					professions_save << temp.speciality + " Added Successfully"
				else
					professions_save << temp.speciality + " Already Exists"
				end
			end
			
			respond_with do |format|
				format.json {render json: {professions: professions_save} }
				format.html
			end
		end
	end
	
	def update
		if current_user.has_role? :Doctor
			if current_user.professions.find(params[:id]).update(update_profession_params)
				render_data("Profession Updated")
			else
				render_data("Error Occured While Deletion")
			end
		end
	end
	
	def destroy
		if current_user.has_role? :Doctor
			if current_user.professions.find(params[:id]).destroy
				render_data("Profession Deleted")
			else
				render_data("Error Occured While Deletion")
			end		
		end
	end

	private 
	def profession_params
		params.permit(profession: [:speciality, :experience, :fee])
	end
	
	def update_profession_params
		params[:profession].permit(:experience, :fee)
	end
	
	def render_data(msg)
		respond_with do |format|
    	format.json { render :json => {feedback: msg}}
    	format.html
   	end
	end
end
