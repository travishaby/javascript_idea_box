require 'rails_helper'

RSpec.feature "CreateIdeas", type: :feature do
  scenario "user vists page and sees ideas" do
    visit root_path
    within("#new-idea") do
      fill_in "idea[title]", with: "new title"
      fill_in "idea[body]", with: "new body"
      click_button "Save"
    end
    sleep(1)
    within("#ideas-list") do
      expect(page).to have_content("new title")
      expect(page).to have_content("new body")
    end
  end
end
