/*jshint esversion: 6 */
function Beauty(options = {})
{
  var element_id = "";
  var mode = "";
  var start_bg_color = [0, 0, 0];
  if (options.element_id)
  {
    element_id = options.element_id;
  }
  if (options.mode)
  {
    mode = options.mode;
  }
  if (options.start)
  {
    start_bg_color = options.start;
  }
  var permissible_range = 100;
  if (mode != "")
  {
    permissible_range = 30;
  }
  var min = 0;
  var max = 255;
  if (mode == "dark")
  {
    max = 140;
  }
  else if (mode == "light")
  {
    min = 140;
  }
  else if (typeof(mode) == "object")
  {
    if (mode.length == 2)
    {
      min = mode[0];
      max = mode[1];
    }
  }
  var red = 0;
  var green = 0;
  var blue = 0;
  if (mode == "light")
  {
    red = 255;
    green = 255;
    blue = 255;
  }
  if (start_bg_color[0] != 0 || start_bg_color[1] != 0 || start_bg_color[2] != 0)
  {
    red = start_bg_color[0];
    green = start_bg_color[1];
    blue = start_bg_color[2];
  }
  if (element_id == "")
  {
    document.body.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
  }
  else
  {
    document.getElementById(element_id).style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
  }
  var red_range = 0;
  var green_range = 0;
  var blue_range = 0;
  var terminal_red = 0;
  var terminal_green = 0;
  var terminal_blue = 0;
  
  setInterval
  (
    function()
    {
      if (red_range == 0 && green_range == 0 && blue_range == 0)
      {
        red_range = Math.floor(Math.random() * (permissible_range - (-permissible_range)) ) + (-permissible_range);
        green_range = Math.floor(Math.random() * (permissible_range - (-permissible_range)) ) + (-permissible_range);
        blue_range = Math.floor(Math.random() * (permissible_range - (-permissible_range)) ) + (-permissible_range);
        if (((red + red_range) >= min && (red + red_range) <= max) && ((green + green_range) >= min && (green + green_range) <= max) && ((blue + blue_range) >= min && (blue + blue_range) <= max) && red_range != 0 && green_range != 0 && blue_range != 0)
        {
          terminal_red = red + red_range;
          terminal_green = green + green_range;
          terminal_blue = blue + blue_range;
        }
      }
      else
      {
        if (red == terminal_red)
        {
          red_range = 0;
        }
        else
        {
          if (red_range < 0)
          {
            red -= 1;
          }
          else
          {
            red += 1;
          }
        }
  
        if (green == terminal_green)
        {
          green_range = 0;
        }
        else
        {
          if (green_range < 0)
          {
            green -= 1;
          }
          else
          {
            green += 1;
          }
        }
  
        if (blue == terminal_blue)
        {
          blue_range = 0;
        }
        else
        {
          if (blue_range < 0)
          {
            blue -= 1;
          }
          else
          {
            blue += 1;
          }
        }
      }
      if (element_id == "")
      {
        document.body.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
      }
      else
      {
        document.getElementById(element_id).style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
      }
    },
  40);
}