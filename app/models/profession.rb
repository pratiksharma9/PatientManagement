class Profession < ActiveRecord::Base

	# Rolify
	resourcify
	
	# Validations
	validates :fee, 
  			  	numericality: {only_integer: true}
  			 
	# Association
	belongs_to :user

end
