class MeetingsController < ApplicationController
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

    private

    def meeting_params
      params.permit(:day, :scheduled, :length)
    end
  
    def meeting
      @meeting ||= Meeting.find(params[:id])
    end
end
