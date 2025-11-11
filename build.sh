#!/bin/bash

echo "🔥 Building Hell de Janeiro..."
echo ""

# Navigate to frontend directory
cd frontend || exit 1

# Install dependencies
echo "📦 Installing dependencies..."
npm install --legacy-peer-deps

# Build the project
echo "🏗️  Building production bundle..."
npm run build

# Check if build was successful
if [ -d "dist" ]; then
    echo ""
    echo "✅ Build completed successfully!"
    echo "📁 Output directory: frontend/dist"
    echo ""
else
    echo ""
    echo "❌ Build failed!"
    exit 1
fi
