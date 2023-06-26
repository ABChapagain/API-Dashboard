export default async function handler(req, res) {
    var url = 'https://classwork-api.azurewebsites.net/api/products/service'
    const response = await fetch(url)
    const data = await response.json()
    var revdata = data.reverse()
    res.status(200).json(revdata)
}

