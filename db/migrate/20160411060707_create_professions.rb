class CreateProfessions < ActiveRecord::Migration
  def change
	  create_table :professions do |t|
		
		t.integer :user_id
		t.string :speciality
		t.string :experience
		t.string :fee
		
		t.timestamps null: false
    end
  end
end
