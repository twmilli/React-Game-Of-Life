var React = require('react');

var SizeButtons = function(props){
  return(<div className='size-btns'>
            <input type="radio" name='size' id='sm' value={0}
              onChange={props.onRadioChange} checked={props.size == 0}/>
            <label htmlFor='sm'>Small</label>
            <input type="radio" name='size' id='med'
              onChange={props.onRadioChange} value={1} checked={props.size == 1}/>
            <label htmlFor='med'>Medium</label>
            <input type="radio" name='size' id='lg'
              onChange={props.onRadioChange} value={2} checked={props.size == 2}/>
            <label htmlFor='lg'>Large</label>
          </div>);
}

module.exports = SizeButtons;
