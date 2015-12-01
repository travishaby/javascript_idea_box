require 'rails_helper'

RSpec.feature "ViewIdeas", type: :feature, js: true do
  scenario "user vists page and sees ideas" do
    idea1
    visit root_path
    within("#ideas-list") do
      expect(page).to have_content("title one")
      expect(page).to have_content("body one")
      expect(page).to have_content("swill")
    end
  end
end
