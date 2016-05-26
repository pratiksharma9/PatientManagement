class Profession < ActiveRecord::Base

	# Association
	belongs_to :user

	# Validations
	validates :experience, presence: true
	validates :fee, numericality: {only_integer: true}
  validates :speciality, uniqueness:{ scope: :user_id } 
  			 
end
