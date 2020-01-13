class Teacher < ApplicationRecord
    has_many :likes
    has_many :meetings

    def likes_count
        self.likes.count
    end
end
