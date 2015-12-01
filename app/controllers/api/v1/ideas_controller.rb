class Api::V1::IdeasController < ApplicationController
  respond_to :json

  def index
    respond_with Idea.all
  end

  def create
    idea = Idea.new(idea_params)
    if idea.save
      respond_with idea, status: 200, location: api_v1_ideas_url
    else
      respond_with(idea.errors, {status: :unprocessable_entry, location: api_v1_ideas_url})
    end
  end

  private

  def idea_params
    params.require(:idea).permit(:title, :body)
  end

end
