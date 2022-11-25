export function changePassValue(setType, type) {
    type === 'password' ? setType('text') : setType('password')
}