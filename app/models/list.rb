class List < ApplicationRecord
  has_many :tasks
  validates :name, presence: true

  include RankedModel
  ranks :row_order

end
