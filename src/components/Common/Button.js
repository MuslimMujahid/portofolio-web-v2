import {
    Button_0
} from './ButtonElements'

const Button = ({ type = 0, width, height, children }) => {
    
    switch(type) {
        case 0:
            return <Button_0 width={width} height={height}>{ children }</Button_0>
    }
}

export default Button