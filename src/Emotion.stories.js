import React from 'react'
import {storiesOf} from '@storybook/react'
import EmotionTest from './'

storiesOf('Card', module)
    .add('Styles Test', () => (
        <EmotionTest />
    ))