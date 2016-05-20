class CreateFeedbacks < ActiveRecord::Migration
  def change
    create_table :feedbacks do |t|
		
		t.string :name
		t.string :email
		t.string :content
		t.string :overall_experience
		t.integer :doctor_id
		
      t.timestamps null: false
    end
  end
end
