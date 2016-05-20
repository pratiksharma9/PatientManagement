class User < ActiveRecord::Base
  	
  	# Validations 

  	# validates_format_of :email, with: /\A[a-zA-Z]+\z/, allow_blank: false, message: "new error message here"
  	validates :address,:city,:gender,	
  			  	presence: true

  	validates_presence_of  :locality, :dob, :state, :country, :role,
  							message: "Select Any One"

  	validates :name, 
  			  	format: { with: /\A[a-zA-Z ]+\z/, message: "only allows letters" },
  			  	length: { minimum: 3, maximum: 30}	

  	validates :mobile, 
  			  	numericality: {only_integer: true}, 
  			  	length: { minimum: 10, maximum: 10 }
  			  	

  	validates :alternate_mobile, 
  			  	numericality: {only_integer: true},
  			  	length: { minimum: 10, maximum: 10 }

 	  validates :pincode, 
 	 			numericality: {only_integer: true}

  	# Actions
	  after_save :assign_role

	  # Rolify Actions
	  rolify :after_add => :after_add_rolify 
  
	  #Associations
	  has_many :professions

	  has_many :doctor_feedbacks, :class_name => 'Feedback', :foreign_key => 'doctor_id'
    has_many :patient_feedbacks, :class_name => 'Feedback', :foreign_key => 'patient_id'

	  has_many :patient_appointments, :class_name => 'Appointment', :foreign_key => 'patient_id'
  	has_many :doctor_appointments, :class_name => 'Appointment', :foreign_key => 'doctor_id'

  	# Include default devise modules. Others available are:
  	# :confirmable, :lockable, :timeoutable and :omniauthable
  	devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
        
    # Actions
    def assign_role
    	@role = self.role
    	self.add_role @role
    end

    # def after_add_rolify(role)
    # 	puts "---------------------------------------------------"
    # 	puts @role
    # 	puts self.has_role? @role.downcase
    # 	puts "---------------------------------------------------"
    # end

  
end
