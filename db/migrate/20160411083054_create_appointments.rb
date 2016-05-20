class CreateAppointments < ActiveRecord::Migration
  
  def change
	  create_table :appointments do |t|
		
		t.date :patient_date
		t.time :doctor_confirm_time
		t.string :status
		t.integer :patient_id
		t.integer :doctor_id
		
      t.timestamps null: false
    end
  end
  
end
