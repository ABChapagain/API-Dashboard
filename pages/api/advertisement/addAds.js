export default async function handler(req, res) {
    const { title, description, image, url } = req.body
    var urls = 'https://classwork-api.azurewebsites.net/api/ads'
    var json = ({
        title: title,
        description: description,
        image: image,
        url: url
    })

    const response = await fetch(urls, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(json),
    })

    const data = await response.json()
    return res.status(200).json(data)
}