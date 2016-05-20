class Feedback < ActiveRecord::Base
	
	# Rolify
	resourcify

	# Association
	belongs_to :doctor, :class_name => 'User', :foreign_key => 'doctor_id'
    belongs_to :patient, :class_name => 'User', :foreign_key => 'patient_id'

	# Validation
	validates :content, presence: true
end

