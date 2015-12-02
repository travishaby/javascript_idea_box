require 'rails_helper'

RSpec.describe Api::V1::IdeasController, type: :controller do

  context "get request for all ideas" do
    it "returns all ideas from index action" do
      [idea1, idea2]
      get :index, format: :json

      assert_response :success
      expect(parsed_body.size).to eq(Idea.count)
    end
  end

  context "post request to create an idea" do
    it "creates an idea in the database when sent a post request" do
      new_idea = { title: "new title",
                        body: "new body"}
      post :create, format: :json, idea: new_idea
      new_idea = Idea.find_by(title: "new title")

      assert_response :success
      expect(new_idea.title).to be
      expect(parsed_body[:title]).to eq("new title")
    end
  end

  context "incorrect post request doesnt create an idea" do
    it "returns an error" do
      new_idea = { title: "new title"}
      post :create, format: :json, idea: new_idea
      new_idea = Idea.find_by(title: "new title")

      assert_response 400
      expect(new_idea).to_not be
    end
  end
end
