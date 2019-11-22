npm i  
npm run storybook

Note the class name applied to the div:  
`css-{hash}-normalClass`
There should also be a `-themeClass`  

If you remove `normalClass` from the array, you will get:
`css-{hash}-EmotionTest`  

If you change `themeClass` to not be a function, you will get the expected:
`css-{hash}-normalClass-themeClass`
