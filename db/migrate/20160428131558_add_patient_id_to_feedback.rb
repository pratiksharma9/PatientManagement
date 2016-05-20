class AddPatientIdToFeedback < ActiveRecord::Migration
  def change
    add_column :feedbacks, :patient_id, :integer
  end
end
