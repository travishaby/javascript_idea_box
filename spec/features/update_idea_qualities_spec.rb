require 'rails_helper'

RSpec.feature "UpdateIdeaQualities", type: :feature, js: true do
  scenario "deletes idea and it goes away without reloading" do
    idea1
    visit root_path

    idea = Idea.find_by(title: "title one")
    expect(idea.quality).to eq("swill")
    expect(page).to have_content("swill")

    find(:css, ".up-button").click
    find(:css, ".up-button").click
    idea = Idea.find_by(title: "title one")
    expect(idea.quality).to eq("genius")
    expect(page).to have_content("genius")
  end
end
