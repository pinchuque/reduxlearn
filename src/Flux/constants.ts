export var Colors = {
     RED : 'red',
      BLUE :'lightblue',
      NO_COLOR : 'transpanent'
}

export var default_font = 'Calibri'

export var ApiBaseUrl = 'http://localhost:3000';
export var GetCounterApiUrl = '/counters';

declare var require: any
var keyMirror = require('keymirror');

var Actions = keyMirror({
    COUNTER_LEFT_INC :null,
    COUNTER_LEFT_DEC :null,
    COUNTER_LEFT_INC_TWICE :null,
    COUNTER_LEFT_GET:null,
    COUNTER_RIGHT_INC :null,
    COUNTER_RIGHT_DEC :null,
    COUNTER_LEFT_GET_SUCCESS: null,
    COUNTER_RIGHT_SET:null
});
export default Actions;