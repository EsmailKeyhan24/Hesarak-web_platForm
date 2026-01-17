require('babel-register')({
  presets: ['@babel/preset-env', '@babel/preset-react']
});

const router = require('./src/App').default; // مسیر فایل App.js شما
const Sitemap = require('react-router-sitemap').default;

function generateSitemap() {
  return (
    new Sitemap(router)
      .build('https://hesarak.com/')   // دامنه سایت
      .save('./build/sitemap.xml')    // مسیر ذخیره در build
  );
}

generateSitemap();
