export function emailReal(email) {
    const maybe = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return maybe.test(email)
}