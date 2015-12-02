require 'rails_helper'

RSpec.feature "EditIdeas", type: :feature, js: true do
  scenario "edit an idea and it updates without reloading" do
    idea3
    visit root_path
    expect(page).to have_content("title three")
    click_button "Edit"

    within("#ideas-list") do
      fill_in "idea[title]", with: "new title one"
      fill_in "idea[body]", with: "new body one"
      click_button "Update"
    end

    expect(page).to have_content("new title one")
    expect(page).to have_content("new body one")
    idea = Idea.find_by(title: "new title one")
    expect(idea).to be
  end
end
