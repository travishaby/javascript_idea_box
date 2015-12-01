require 'ffaker'
20.times do
  Idea.create(title: FFaker::HipsterIpsum.word,
               body: FFaker::HipsterIpsum.paragraph,
            quality: (0..2).to_a.sample)
end
