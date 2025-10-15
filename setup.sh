#!/bin/bash


# title
echo "🔧 Setting up environment variables for IGDB API..."


# create or change an file .env 
cat > .env <<EOL
# IGDB / Twitch credentials
TWITCH_CLIENT_ID= 2gu7wigtkubhl3tvhba44uuzl2jw8s
TWITCH_CLIENT_SECRET= qkd999js3l6chntzo24gnqkl92yp46
TWITCH_ACCESS_TOKEN= k43a6zrt9375qtd64hgpblxvjters1

# Project configs
NEXT_PUBLIC_API_URL=http://localhost:3000/api
EOL



echo "✅ .env file created successfully!"

# ask if the user wants to autofill


read -p "Would you like to add your credentials now? (y/n): " answer

if [ "$answer" == "y" ]; then
  read -p "Enter your Twitch Client ID: " CLIENT_ID
  read -p "Enter your Twitch Client Secret: " CLIENT_SECRET

  echo "Requesting access token from Twitch..."
  TOKEN=$(curl -s -X POST "https://id.twitch.tv/oauth2/token?client_id=$CLIENT_ID&client_secret=$CLIENT_SECRET&grant_type=client_credentials" | jq -r '.access_token')

  if [ "$TOKEN" == "null" ]; then
    echo "❌ Failed to get token. Please check your Client ID and Secret."
    exit 1
  fi

  # change the value in .env
  sed -i "s|TWITCH_CLIENT_ID=|TWITCH_CLIENT_ID=$CLIENT_ID|" .env
  sed -i "s|TWITCH_CLIENT_SECRET=|TWITCH_CLIENT_SECRET=$CLIENT_SECRET|" .env
  sed -i "s|TWITCH_ACCESS_TOKEN=|TWITCH_ACCESS_TOKEN=$TOKEN|" .env

  echo "✅ Credentials saved to .env successfully!"
else
  echo "⚠️ Skipped credential setup. You can edit .env manually later."
fi


# run before start everything
will create a new CLIENT ID, TOKEN and SECRET
chmod +x setup.sh
./setup.sh
