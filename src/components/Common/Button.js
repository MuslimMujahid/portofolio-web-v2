import {
    Button_0,
    Button_1
} from './ButtonElements'

const Button = ({ type = 0, width, height, children }) => {
    
    switch(type) {
        case 0:
            return <Button_0 width={width} height={height}>{ children }</Button_0>
        case 1:
            return <Button_1 width={width} height={height}>{ children }</Button_1>
    }
}

export default Button