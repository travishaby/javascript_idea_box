require 'rails_helper'

RSpec.describe Idea, type: :model do
  context "valid idea" do
    it "has a title, body, and default quality of swill" do
      idea = Idea.new(title: "title",
                       body: "body")
      expect(idea).to be_valid
      idea.save
      expect(idea.quality).to eq("swill")
    end

    it "it can be given a custom idea" do
      idea = Idea.new(title: "title",
                       body: "body",
                    quality: "genius")
      expect(idea).to be_valid
    end
  end

  context "invalid idea" do
    it "must have a title" do
      idea = Idea.new(body: "body")
      expect(idea).to_not be_valid
    end

    it "must have a body" do
      idea = Idea.new(title: "title")
      expect(idea).to_not be_valid
    end
  end
end
