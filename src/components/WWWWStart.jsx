import React from 'react';
import _ from 'lodash';

const WWWWStart = props => {
    let { data } = props;
    data = data.reverse();
    return(
        <div className="wwww-start">
            <div className="start-content">
                {!_.isEmpty(props.data) 
                    ? 
                        data.map((res,i) => {
                            return (
                                <p 
                                    className={i === 0 ? 'last' : ''} 
                                    key={i}>
                                    {res.who} {res.what} {res.where} {res.when}
                                </p>
                            )
                        })
                    : 
                    ( 
                        <p>Lets play WWWW game (WHO, WHAT, WHERE, WHEN). Ready?</p>
                    )
                }
            </div>
            <div className="start-button">
                <button className="control" onClick={() => props.start(1)}>{_.isEmpty(props.data) ? 'START GAME' : 'PLAY AGAIN'}</button>
            </div>
        </div>
    )
}

export default WWWWStart;
