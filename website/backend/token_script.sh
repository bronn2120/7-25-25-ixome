#!/bin/bash

# Generate fresh token
TOKEN_RESPONSE=$(curl -s -X POST -H "Content-Type: application/json" -d '{"username":"test","password":"test"}' http://localhost:5001/login)

# Extract access_token using jq
ACCESS_TOKEN=$(echo "$TOKEN_RESPONSE" | jq -r '.access_token')

if [ -z "$ACCESS_TOKEN" ] || [ "$ACCESS_TOKEN" = "null" ]; then
  echo "Failed to generate token. Check if backend is running."
  exit 1
fi

echo "Generated token: $ACCESS_TOKEN"

# Test /blog/generate
curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer $ACCESS_TOKEN" -d '{"topic":"Control4 troubleshooting"}' http://localhost:5001/blog/generate

# Test /process
curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer $ACCESS_TOKEN" -d '{"input_type":"text","input_data":"set tokens to 10"}' http://localhost:5001/process