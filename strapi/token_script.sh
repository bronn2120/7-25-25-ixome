#!/bin/bash

# Generate fresh token
TOKEN_RESPONSE=

# Extract access_token using jq
ACCESS_TOKEN=

if [ -z "" ] || [ "" = "null" ]; then
  echo "Failed to generate token. Check if backend is running."
  exit 1
fi

echo "Generated token: "

# Test /blog/generate
curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer " -d '{"topic":"Control4 troubleshooting"}' http://localhost:5001/blog/generate

# Test /process
curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer " -d '{"input_type":"text","input_data":"set tokens to 10"}' http://localhost:5001/process
