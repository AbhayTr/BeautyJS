# BeautyJS

JS module for beautifully varying RGB colour sets which can be used for setting colours anywhere!
This module basically varies RGB values in various random ranges via setInterval() executing continously after very
small interval of time i.e. in milliseconds hence resulting in beautiful transition of colours.

## Usage

Simply use this code:

```html
<html>
  <head>
    <script src="https://abhaytr.tk/projects/beauty.js"></script>
  </head>
  <body>
    <script>
      Beauty(Parameters, function(rgb_color)   //Parameters is a JSON Object (Available Parameters Specified Below)
      {
        var r_value = rgb_color[0];
        var g_value = rgb_color[1];
        var b_value = rgb_color[2];
        //Now you can do anything with the rgb values (set background, set text colour, etc..).
      });
    </script>
  </body>
</html>
```
Optional Parameters that are available are listed below in Parameters section and have to be passed as a JSON Object (keys as name of parameters listed in Parameters section and value is your desired choice according to the options available for that parameter as specified in the Parameters section) which will be the first parameter for Beauty().

## Parameters
- ### mode (Optional)
  
  Specifies colour set in which the colours have to vary.
  
  - **Options for mode parameter**
    - **"dark":** Varies the colour in dark colours only (useful for dark mode projects).
    - **"light":** Varies the colour in light colours only (useful for light mode projects).
    - **[start_rgb, end_rgb]:** Varies the colour from start_rgb value (can be from 0 to 255) to end_rgb value (can be from 0 to 255).
  
  - **Default Value:** "" (i.e. varies from 0 to 255 RGB Values).

- ### start (Optional):
  
  Specefies colour in RGB format from which colours have to start varying.
  
  - **Default Value:** [0, 0, 0] (for "dark", none or other mode parameter specified) and [255, 255, 255] (for "light" mode parameter specified).

- ### time (Optional):
  
  Specifies the time in milliseconds after which the colour is changed according to its range.
  Useful for decreasing the time when using on slow hardware for maintaining the smoothness.
  
  - **Default Value:** 40 ms (Just perfect for majority hardware types).
  
So go ahead and enjoy the beauty of time varying RGB colour sets!
