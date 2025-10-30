First I made a canvas using createCanvas 400 400 and set noStroke so the shapes would not have outlines
Then I used fill0 to make the sword black
I drew the main blade using rect which is a long vertical rectangle
Then I added the handle using rect which is horizontal
Then I added another small vertical rectangle at the bottom with rect
Finally I added a circle at the very bottom using ellipse to finish the sword shape
Next I wrapped all the sword drawing commands inside a function called drawObject taking x y and s as parameters
I added push and pop around the code so any translations or scaling only affect the sword
Then I used translatex y so the sword could be moved anywhere on the canvas
I also used scales so the sword could be resized depending on the grid cell size
Finally I called fill0 again inside the function to make sure the sword stayed black whenever it was drawn
To fill the whole canvas I decided on the number of columns and rows for the grid
Then I calculated cellW as width divided by columns and cellH as height divided by rows
Then I used two nested for loops the outer one looping from 0 to columns and the inner from 0 to rows
Inside the loops I calculated the position of each sword using x equals i times cellW and y equals j times cellH
Then I calculated a scale factor s as cellW divided by 400 because the original sword drawing used a coordinate space of roughly 400 by 400
And lastly I called drawObjectx y s inside the loops so every cell had a sword scaled and positioned correctly