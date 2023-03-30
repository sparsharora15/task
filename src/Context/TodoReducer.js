export default function Reducer(state, action) {
    switch (action.type) {
        case 'setData':
            return { todoData: action.payload };
        default:
            throw new Error();
    }
}