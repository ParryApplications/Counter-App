import "../style/CounterBtn.css";
import PropTypes from 'prop-types';

export default function CounterBtn({ num, incrementCount, decrementCount }) {
    function counterPosvBtnAction() {
        incrementCount(num);
    }

    // function counterNegvBtnAction() {
    //     decrementCount(num);
    // }

    return (
        <div className="CounterBtn">
            <button className="counterBtn negBtn" onClick={() => decrementCount(num)}>-{num}</button>
            <button className="counterBtn posBtn" onClick={counterPosvBtnAction}>+{num}</button>
        </div >
    );
}

CounterBtn.protoTypes = {
    num: PropTypes.number
}

CounterBtn.defaultProps = {
    num: 1
}