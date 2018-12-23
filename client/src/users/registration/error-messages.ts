export const errorMessage = {
    firstName: {
        required: 'Required',
        textOnly: 'Contains invalid chars'
    },
    lastName: {
        required: 'Required',
        textOnly: 'Contains invalid chars'
    },
    area : {
        requiredIfHasValue: 'Area must contain a value if there is a value in a phone number',
        minlength: 'Area must contain at least 2 chars',
        maxlength: 'Area must have at most 3 characters',
        digitsOnly: 'Digits only',
        beginWithZero: 'Area must begin at 0'
    },
    phone: {
        requiredIfHasValue: 'Phone must contain a value if there is a value in an area number',
        minlength: 'Phone must contain 7 chars',
        maxlength: 'Phone must contain 7 chars',
        digitsOnly: 'Digits only',
        notBeginWithZero: 'Phone must start with a digit other than 0'
    },
    city: {
        textOnly: 'Contains invalid chars'
    },
    street: {
        textOnly: 'Contains invalid chars'
    },
    house: {
        digitsOnly: 'Digits only',
        notBeginWithZero: 'Must start with a digit other than 0'
    }
}