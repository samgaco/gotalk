# Manage crud operations related to meetings

# frozen_string_literal: true

class MeetingsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    meeting = current_user.meetings
    render json: meeting.to_json(include: [:teacher])
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
