/**
 * Created by chenjunjun
 * 存放一些常量
 */

import {Dimensions} from 'react-native' ;

let window = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
}

export default  {
    window: window,
}