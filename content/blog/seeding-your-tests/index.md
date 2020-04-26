---
title: Seeding your Rails test database
date: "2020-04-26T12:00:00.000Z"
description: "Seeding your Rails test database"
---

Just wanna right this down for now as a personal reminder since this is also my #TIL entry.
I was doing and running my tests when I came into a problem wherein my [FactoryBot](https://github.com/thoughtbot/factory_bot) instance has a default value for an association ID and I can't create it since the associated model needs to be existing first.

Here's my `User` which I can't create because a `Team` with id `00000000-0000-0000-0000-000000000000` needs to be existing first.
```ruby
# frozen_string_literal: true

# == Schema Information
#
# Table name: users
#
#  id              :uuid             not null, primary key
#  email           :string           default(""), not null
#  first_name      :string            default(""), not null
#  last_name       :string           default(""), not null
#  password_digest :string           default(""), not null
#  username        :string           default(""), not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  team_id         :uuid             default("00000000-0000-0000-0000-000000000000"), not null
#
FactoryBot.define do
  factory :user do
    first_name { 'Awesome' }
    last_name { 'Person' }
    email { 'awesome@person.com' }
    username { 'awesomeusername' }
    password { 'my$3cur3Password' }
  end
end
```

*PS: I intentionally didn't put `team { create(:team) }` as I want to have my `User` be created with default associated values.*

On my `db/seeds.rb`, I have this:
```ruby
# frozen_string_literal: true

puts 'Creating default Team'
Team.create(id: "00000000-0000-0000-0000-000000000000", name: 'No Team')
```

I didn't call `RAILS_ENV=test rails db:seed` since I wanted to have my test database clean every time. So what I did was to add this `Rails.application.load_seed` on `spec/spec_helper.rb` and it did the work!

```ruby
RSpec.configure do |config|
...
  config.before(:each) do
    Rails.application.load_seed
  end
...
end
```

And, that would be all for now. Until the next article! See yah!
