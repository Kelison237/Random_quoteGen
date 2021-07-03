let array = [
    'Live as if you were to die tomorrow. Learn as if you were to live forever.',
    'That which does not kill us makes us stronger.',
    'Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.',
    'We must not allow other people’s limited perceptions to define us.',
    'Do what you can, with what you have, where you are',
    'Be yourself; everyone else is already taken.',
    'This above all: to thine own self be true.',
    'If you cannot do great things, do small things in a great way.',
    'If opportunity doesn’t knock, build a door.',
    'Wise men speak because they have something to say; fools because they have to say something.',
    'Strive not to be a success, but rather to be of value.',
];

const keke = () => {
var randonNum = Math.floor(Math.random()* (array.length));
document.querySelector("p").innerHTML = array[randonNum];
}