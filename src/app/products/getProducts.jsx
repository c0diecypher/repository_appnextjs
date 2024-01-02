export const getProducts = async () => {
    const res = await fetch('http://localhost:3000/api/products/',{
    })
    if(!res.ok){
        throw new Error({message: 'invalid products'})
    }
    return res.json()
}