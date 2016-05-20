class RemoveNameFromFeedback < ActiveRecord::Migration
  def change
    remove_column :feedbacks, :name, :string
    remove_column :feedbacks, :email, :string
  end
end
