class Teacher < ApplicationRecord
    has_many :likes

    def likes_count
        self.likes.count
    end
end
