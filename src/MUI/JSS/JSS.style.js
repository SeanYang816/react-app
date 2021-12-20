import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => (
    {
        square: {
            width: '50px',
            height: '50px',
            background: 'black',
        },
        someStyle: {},
        otherStyles: {}
    }
), {
    name: 'JSS',
})

export default useStyles
