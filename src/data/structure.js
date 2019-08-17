const structure = {
    1: {
        id: 'who',
        description: 'type in name (e.g.: "Mark")',
        validate: {
            minLength: 1,
            maxLength: 50,
            isText: 'only'
        }
    },
    2: {
        id: 'what',
        description: 'type in activity (e.g.: "is playing hockey")',
        validate: {
            minLength: 1,
            maxLength: 100,
            isText: 'only'
        }
    },
    3: {
        id: 'when',
        description: 'type in time / time area (e.g.: "in the afternoon")',
        validate: {
            minLength: 1,
            maxLength: 100,
            isText: 'only'
        }
    },
    4: {
        id: 'where',
        description: 'type in place (e.g.: "at home")',
        validate: {
            minLength: 1,
            maxLength: 100,
            isText: 'only'
        }
    }
}

export default structure;