class Meeting < ApplicationRecord
    belongs_to :teacher
    belongs_to :user


    def likes_count
        self.likes.count
    end
end
