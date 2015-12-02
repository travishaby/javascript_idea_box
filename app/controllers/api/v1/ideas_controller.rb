class Api::V1::IdeasController < ApplicationController
  respond_to :json

  def index
    respond_with Idea.all
  end

  def create
    idea = Idea.new(idea_params)
    if idea.save
      respond_with idea, status: 201, location: api_v1_ideas_url
    else
      respond_with idea.errors, status: 400, location: api_v1_ideas_url
    end
  end

  def update
    idea = Idea.find_by(id: params[:id])
    if idea.update_quality(idea_params)
      render json: idea, status: 200, location: api_v1_ideas_url
    else
      render json: "I just can't even", status: 400, location: api_v1_ideas_url
    end
  end

  def destroy
    respond_with Idea.find_by(id: params[:id]).destroy
  end

  private

  def idea_params
    params.require(:idea).permit(:title, :body, :quality)
  end

end
