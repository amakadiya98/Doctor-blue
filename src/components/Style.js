export const customStyle = {
    option: (base, { isSelected }) => {
        let newbase = {...base,
            backgroundColor: isSelected ? '#23bee3' : '#fff',
            color: isSelected ? '#fff' : '#000',
            '&:hover': {
                color: isSelected ? '#fff' : '#000',
                backgroundColor: isSelected ? '#23bee3' : '#23bee322'        
            },
            '&:focus-visible': {
                color: '#fff'
            },
            ':active': {
                color: '#ffffff',
                backgroundColor: '#23bee3'
            },
            '&:active': {
                color: '#ffffff',
                backgroundColor: '#23bee3'        
            },
            '&:target': {
                color: '#fff'
            }}
        return newbase
    },
    valueContainer: style => ({
        ...style,
        padding: '5px',
        borderColor: '#ADADAD',
        '&:active' : {
            outline: 'none',
        }
    }),
    container: style => ({
        ...style,
        width: '100%'
    }),
    multiValue: style => ({
        ...style,
        borderRadius: '20px',
        color: '#ffffff',
        backgroundColor: '#5757fe'
    }),
    multiValueLabel: style => ({
        ...style,
        color: '#fff',
        paddingTop: '9px',
        paddingBottom: '9px',
        paddingLeft: '15px',
        paddingRight: '9px',
        fontSize: '70%',
        transition: 'all 0.3s ease'
    }),
    multiValueRemove: style => ({
        ...style,
        color: 'white',
        backgroundColor: '#5757fe',
        borderRadius: '20px',
        height: '20px',
        marginTop: '8px',
        marginRight: '10px',
        transition: 'all 0.3s ease',
        '&:hover': {
            backgroundColor: '#fff',
            color: '#5757fe'
        }
    }),
    indicatorSeparator: style => ({
        ...style,
        display: 'none'
    })
}