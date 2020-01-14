class MeetingsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index 
        meeting = Meeting.all
        render json: meeting
    end

    def show
        if meeting
          render json: meeting
        else
          render json: meeting.errors
        end
    end

    def create
      meeting = Meeting.create!(meeting_params)
      if teacher
        render json: meeting
      else
        render json: meeting.errors
      end
    end

    private

    def meeting_params
      params.permit(:user_id, :teacher_id, :scheduled, :length)
    end
  
    def meeting
      @meeting ||= Meeting.find(params[:id])
    end
end
