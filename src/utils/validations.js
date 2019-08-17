const validations = {
    minLength: (val, rule) => val.length >= rule,
    maxLength: (val, rule) => val.length <= rule,
    isText: (val) => (/^[a-zA-Z\s]*$/).test(val),
}

export default validations
