#!/bin/bash

echo "🔧 Setting up environment variables for IGDB API and RAWG..."

# Create .env.local file with placeholders
cat > .env.local <<EOL
# IGDB / Twitch credentials
TWITCH_CLIENT_ID=
TWITCH_CLIENT_SECRET=
TWITCH_ACCESS_TOKEN=

# RAWG API
RAWG_KEY=

# Project configs
NEXT_PUBLIC_API_URL=http://localhost:3000/api
EOL

echo "✅ .env.local file created successfully!"

read -p "Would you like to add your credentials now? (y/n): " answer

if [ "$answer" == "y" ]; then
  read -p "Enter your Twitch Client ID: " CLIENT_ID
  read -p "Enter your Twitch Client Secret: " CLIENT_SECRET
  read -p "Enter your RAWG API Key: " RAWG_KEY

  echo "🔄 Requesting access token from Twitch..."
  TOKEN=$(curl -s -X POST "https://id.twitch.tv/oauth2/token?client_id=$CLIENT_ID&client_secret=$CLIENT_SECRET&grant_type=client_credentials" | jq -r '.access_token')

  if [ "$TOKEN" == "null" ] || [ -z "$TOKEN" ]; then
    echo "❌ Failed to get token. Please check your Client ID and Secret."
    exit 1
  fi

  # Update .env.local with actual values
  sed -i "s|TWITCH_CLIENT_ID=|TWITCH_CLIENT_ID=$CLIENT_ID|" .env.local
  sed -i "s|TWITCH_CLIENT_SECRET=|TWITCH_CLIENT_SECRET=$CLIENT_SECRET|" .env.local
  sed -i "s|TWITCH_ACCESS_TOKEN=|TWITCH_ACCESS_TOKEN=$TOKEN|" .env.local
  sed -i "s|RAWG_KEY=|RAWG_KEY=$RAWG_KEY|" .env.local

  echo "✅ All credentials saved to .env.local successfully!"
  echo ""
  echo "📋 Summary:"
  echo "   🎮 Twitch Token: $TOKEN"
  echo "   🎯 RAWG Key: $RAWG_KEY"
else
  echo "⚠️ Skipped credential setup. You can edit .env.local manually later."
fi

echo ""
echo "🚀 Next steps:"
echo "   1. Run: npm install"
echo "   2. Run: npm run dev"
echo "   3. Access: http://localhost:3000"