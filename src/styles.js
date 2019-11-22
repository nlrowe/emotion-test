import {css} from '@emotion/core'

const normalClass = css`
    background: salmon;
`
const themeClass = ({colors}) => css`
    color: ${colors.primary};
`

export default {normalClass, themeClass}