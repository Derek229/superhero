class CreateSupers < ActiveRecord::Migration[6.1]
  def change
    create_table :supers do |t|
      t.string :name
      t.string :power

      t.timestamps
    end
  end
end
