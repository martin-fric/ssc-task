import React from 'react';
import validations from '../utils/validations';
import _ from 'lodash';

class WWWWQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            error: []
        }
    }

    handleChange = value => {
        const { validate } = this.props.structure;
        const { error } = this.state;
        let errorCopy = [...error];
        Object.keys(validate).forEach(key => {
            !validations[key](value,validate[key])
                ? errorCopy = this.addToErrors(errorCopy,key)
                : errorCopy = this.removeFromErrors(errorCopy, key);
        })

        this.setState({value, error: errorCopy})
    }

    addToErrors = (arr,key) => {
        if(arr.indexOf(key) === -1) arr.push(key);
        return arr;
    }

    removeFromErrors = (arr,key) => {
        if(arr.indexOf(key) !== -1) arr.splice(arr.indexOf(key),1);
        return arr;
    }

    nextStep = () => {
        const { value } = this.state;
        this.props.storeValue(value,()=>{
            this.props.nextStep();}
        );
        this.setState({value: ''})
    }

    printErrors = () => {
        const {error} = this.state;
        const { validate } = this.props.structure;
        const result = error.map(err => err+": "+validate[err]);

        return result.join(', ');
    }
    componentDidUpdate(props,state) {
        if(props.structure !== this.props.structure) {
            this.questionInput.focus();
        }
    }
    render() {
        const {value,error} = this.state;
        const { structure } = this.props;

        return (
            <div className="wwww-question">
                <div className="question-content">
                    {this.props.id}
                <input 
                    autoFocus
                    ref={(input) => this.questionInput = input}
                    className="control input" 
                    type="text" 
                    onChange={e => this.handleChange(e.target.value)} 
                    placeholder={structure && structure.description} 
                    value={value}
                />
                    <div className="error-text">
                        {this.printErrors()}
                    </div>
                </div>
                <div className="question-button">
                    <button 
                        disabled={value  === '' || !_.isEmpty(error)}
                        className="control" 
                        onClick={() => this.nextStep()}
                    >
                        <span>&#10004;</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default WWWWQuestion;