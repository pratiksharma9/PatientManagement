class AddDoctorIdToFeedback < ActiveRecord::Migration
  def change
    add_column :feedbacks, :doctor_id, :integer
  end
end
