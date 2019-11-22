import {configure, addDecorator} from '@storybook/react'
import {withThemesProvider} from 'storybook-addon-emotion-theme'

const branding = {
    colors: {primary: 'green'},
}

addDecorator(withThemesProvider([{name: 'default', ...branding}]));

const storiesRequire = require.context('../src', true, /.stories.js$/)

function loadStories() {
    storiesRequire.keys().forEach(function(storyFile) {
        storiesRequire(storyFile)
    })
}

configure(loadStories, module)