require 'rails_helper'

RSpec.describe Api::V1::IdeasController, type: :controller do

  context "description" do
    it "returns all ideas from index action" do
      [idea1, idea2]
      get :index, format: :json

      assert_response :success
      expect(parsed_body.size).to eq(Idea.count)
    end
  end

end
