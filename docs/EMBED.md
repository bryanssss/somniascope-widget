# Installation Guide for Somniascope Widget

## HTML Installation
To install the Somniascope Widget in an HTML document, copy and paste the following code into the `<head>` section of your HTML file:
```html
<link rel="stylesheet" href="https://your-cdn.com/somniascope-widget.css">
<script src="https://your-cdn.com/somniascope-widget.js"></script>
```

## WordPress Installation
For WordPress, follow these steps:
1. Navigate to the WordPress admin dashboard.
2. Go to Appearance > Customize > Additional CSS and add the following:
```css
@import url('https://your-cdn.com/somniascope-widget.css');
```
3. Then, add this JavaScript in the footer:
```php
echo '<script src="https://your-cdn.com/somniascope-widget.js"></script>';
```  

## PHP Installation
To use the widget in a PHP file, include the following code:
```php
<link rel="stylesheet" href="https://your-cdn.com/somniascope-widget.css">
<script src="https://your-cdn.com/somniascope-widget.js"></script>
```  

## Static Website Installation
For static websites, simply include the following in the `<head>` section of your HTML files:
```html
<link rel="stylesheet" href="https://your-cdn.com/somniascope-widget.css">
<script src="https://your-cdn.com/somniascope-widget.js"></script>
```  

Replace the links with the correct CDN path to your Somniascope Widget files.
