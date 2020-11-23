# JSBeauty

JS Module for beautiful varying colour backgrounds!

## Usage

Simply use this code:

```html
<html>
  <head>
    <script src="https://abhaytr.tk/projects/beauty.js"></script>
  </head>
  <body>
    <script>
      Beauty(Parameters); //Parameters is a JSON Object (Available Parameters Specified Below)
    </script>
  </body>
</html>
```
## Parameters
- mode (Optional):
  
  Specifies colour set in which the colours have to vary.
  
  - Options for mode parameter:
    - "dark": Varies the colour in dark colours only (useful for dark mode websites).
    - "light": Varies the colour in light colours only (useful for light mode websites).
    - [start_rgb, end_rgb]: Varies the colour from start_rgb value (can be from 0 to 255) to end_rgb value (can be from 0 to 255).
  
  - Default Value: "" (i.e. varies from 0 to 255 RGB Values).

- start (Optional):
  
  - Specefies background colour in RGB format which has to be first set on page load and start varying from that colour.
  
  - Input type for start parameter: [R_Value, G_Value, B_Value] (eg. [0, 0, 0] for black).
  
  - Default Value: [0, 0, 0] (for "dark", none or other mode parameter specified) and [255, 255, 255] (for "light" mode parameter specified).

- element_id (Optional):
  
  - Specifies the id of the element for which you have to set the beautiful background.
  
  - Default Value: "" (i.e. beautiful background is directly set to body of HTML document).

So go ahead and enjoy the beauty of time varying beautiful background!
