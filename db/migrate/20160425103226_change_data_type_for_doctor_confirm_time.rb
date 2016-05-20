class ChangeDataTypeForDoctorConfirmTime < ActiveRecord::Migration
  def change
  	change_column(:appointments, :doctor_confirm_time, :string)
  end
end
