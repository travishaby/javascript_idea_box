require 'rails_helper'

RSpec.feature "DeleteIdeas", type: :feature, js: true do
  scenario "deletes idea and it goes away without reloading" do
    idea1
    visit root_path
    expect(page).to have_content("title one")
    click_button "Delete"

    expect(page).to_not have_content("title one")
    idea = Idea.find_by(title: "title one")
    expect(idea).to_not be
  end
end
