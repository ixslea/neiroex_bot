{
  "version": 2,
  "builds": [{
    "src": "./index.js",
    "use": "@vercel/noder"
  }],
  "routes": [{"handle": "filesystem"},
    {
      "src": "/.*",
      "dest": "index.js"
    }
  ]
}
