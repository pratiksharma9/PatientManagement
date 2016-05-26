class User < ActiveRecord::Base
  	
  # to Provide Role to this class
  rolify
	
	# Atribute Accessor
  attr_accessor :user_type
  
	# Validations 
	validates :address, :city, :gender,	presence: true

	validates_presence_of  :dob, :state, :country, message: "Select Any One"

	validates :name, format:{ with: /\A[a-zA-Z ]+\z/, message: "only allows letters" }, length: { minimum: 3, maximum: 30}	

	validates :mobile, numericality: {only_integer: true}, length: { minimum: 10, maximum: 10 }

	validates :alternate_mobile, numericality: {only_integer: true}, length: { minimum: 10, maximum: 10 }

	validates :pincode, numericality: {only_integer: true}

	# Actions
  after_create :assign_roles

  #Associations
  has_many :professions

  has_many :doctor_feedbacks, class_name: 'Feedback', foreign_key: 'doctor_id'
  has_many :patient_feedbacks, class_name:'Feedback', foreign_key: 'patient_id'

  has_many :patient_appointments, class_name: 'Appointment', foreign_key: 'patient_id'
	has_many :doctor_appointments, class_name: 'Appointment', foreign_key: 'doctor_id'

	# Include default devise modules. Others available are:
	# :confirmable, :lockable, :timeoutable and :omniauthable
	devise :database_authenticatable, :registerable, :recoverable, :rememberable, :trackable, :validatable
      
  # Actions
  def assign_roles
  	self.add_role user_type
  end
end
