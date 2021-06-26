import {
    Button0,
    Button1
} from './ButtonElements'

const Button = ({ type = 0, width, height, children }) => {
    
    switch(type) {
        case 0:
            return <Button0 width={width} height={height}>{ children }</Button0>
        case 1:
            return <Button1 width={width} height={height}>{ children }</Button1>
    }
}

export default Button