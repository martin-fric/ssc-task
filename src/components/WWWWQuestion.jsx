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
            if(validations[key]){
                errorCopy = !validations[key](value,validate[key])
                    ? this.addToErrors(errorCopy,key)
                    : this.removeFromErrors(errorCopy, key);
            }
        })

        this.setState({value, error: errorCopy})
    }

    handleKeyDown = e => {
        const { error, value } = this.state;
        const isDisabled = !_.isEmpty(error) || value === '';
        if(e.key === 'Enter' && !isDisabled) {
            this.nextStep();
        }
    }

    addToErrors = (arr,key) => {
        if(arr.indexOf(key) === -1) arr.push(key);
        return arr;
    }

    removeFromErrors = (arr,key) => {
        if(arr.indexOf(key) !== -1) arr.splice(arr.indexOf(key),1);
        return arr;
    }

    printErrors = () => {
        const {error} = this.state;
        const { validate } = this.props.structure;
        const result = error.map(err => err+": "+validate[err]);

        return result.join(', ');
    }

    nextStep = () => {
        const { value } = this.state;
        this.props.storeValue(value,()=>{
            this.props.nextStep();}
        );
        this.setState({value: ''})
    }
    
    componentDidUpdate(props,state) {
        if(props.structure !== this.props.structure) {
            this.questionInput.focus();
        }
    }

    render() {
        const {value,error} = this.state;
        const { structure } = this.props;
        const isDisabled = value  === '' || !_.isEmpty(error)

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
                    onKeyDown={this.handleKeyDown}
                    placeholder={structure && structure.description} 
                    value={value}
                />
                    <div className="error-text">
                        {this.printErrors()}
                    </div>
                </div>
                <div className="question-button">
                    <button 
                        disabled={isDisabled}
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