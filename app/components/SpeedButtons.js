var React = require('react');

var SpeedButtons = function(props){
  return(<div className='speed-btns'>
            <input type="radio" name='speed' id='slow' value={'slow'}
              onChange={props.onRadioChange} checked={props.speed == 'slow'}/>
            <label htmlFor='slow'>Slow</label>
            <input type="radio" name='speed' id='medium'
              onChange={props.onRadioChange} value={'medium'} checked={props.speed == 'medium'}/>
            <label htmlFor='medium'>Moderate</label>
            <input type="radio" name='speed' id='fast'
              onChange={props.onRadioChange} value={'fast'} checked={props.speed == 'fast'}/>
            <label htmlFor='fast'>Fast</label>
          </div>);
}

module.exports = SpeedButtons;
