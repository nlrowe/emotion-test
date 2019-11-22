import React from 'react'
import styles from './styles'

const EmotionTest = () => {
    const classes = (theme) => [styles.normalClass, styles.themeClass(theme)]

    return (
        <div css={classes}>
            Emotion Test
        </div>
    )
}

export default EmotionTest