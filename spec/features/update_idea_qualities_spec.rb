require 'rails_helper'

RSpec.feature "UpdateIdeaQualities", type: :feature, js: true do
  scenario "deletes idea and it goes away without reloading" do
    idea1
    visit root_path

    idea = Idea.find_by(title: "title one")
    expect(idea.quality).to eq("swill")
    expect(page).to have_content("swill")


    find(:css, ".up-button").click
    idea = Idea.find_by(title: "title one")
    expect(idea.quality).to eq("plausible")
    expect(page).to have_content("plausible")
  end

  scenario "can't make idea worse than swill" do
    idea1
    visit root_path

    idea = Idea.find_by(title: "title one")
    expect(idea.quality).to eq("swill")
    expect(page).to have_content("swill")


    find(:css, ".down-button").click
    expect(page).to have_content("swill")
  end
end
