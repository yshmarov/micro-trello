class Task < ApplicationRecord
  belongs_to :list
  validates :name, :list, presence: true
end
