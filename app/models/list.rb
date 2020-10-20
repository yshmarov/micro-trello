class List < ApplicationRecord
  has_many :tasks
  validates :name, presence: true
end
