import React from 'react';
import { connect } from "react-redux";
import structure from '../data/structure';
import WWWWStart from './WWWWStart';
import WWWWQuestion from './WWWWQuestion';
import { addResult } from '../redux/actions/index'

const mapStateToProps = (state) => (
    { results: state.results  }
)
const mapDispatchToProps = (dispatch) => (
    { addResult: result => dispatch(addResult(result))}
)

class WWWWContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 0,
            result: {},
        }
    }

    nextStep = step => {
        this.setState(pState => ({
            step: (step)
                ? 1 
                : (pState.step === Object.keys(structure).length) 
                    ? 0 
                    : pState.step + 1,
        }));
    }

    storeValue = (val,callback) => {
        const {step, result} = this.state;
        const { addResult } = this.props;
        let resultCopy = {...result};

        resultCopy[structure[step].id] = val;

        if(step === 4) {
            addResult(resultCopy)
            resultCopy = {};
            this.setState({
                result:resultCopy
            })
        } else {
            this.setState({
                result:resultCopy
            })
        }
        callback();
    }

    render() {
        const {step} = this.state;
        const {results} = this.props;
        const struct = structure && structure[step]
        return(
            <div className="wwww-container">
                <div className="header">
                    <p>Task - SecurityScorecard</p>
                </div>
                <div className="content">
                { step === 0 
                    ? 
                        (
                            <WWWWStart start={this.nextStep} data={results}/>
                        )
                    : 
                        (
                            <WWWWQuestion 
                                structure={struct}
                                nextStep={this.nextStep} 
                                storeValue={this.storeValue}
                            />
                        )     
                }
                </div>
                <div className="footer">
                    <p>Martin Frič - +421 917 877 090 / fric@ccsolutions.sk</p>   
                </div>     
            </div>
        )
    }
}
connect(mapStateToProps)(WWWWContainer);

export default connect(mapStateToProps,mapDispatchToProps)(WWWWContainer);