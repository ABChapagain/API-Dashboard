

export default async function handler(req, res) {
    var url = 'https://teamwork-backend.azurewebsites.net/api/products/physical'
    const response = await fetch(url)
    const data = await response.json()
    var revdata = data.reverse()
    res.status(200).json(revdata)
}

