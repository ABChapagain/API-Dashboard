export default async function handler(req, res) {
    const { title, description, image, keywords } = req.body
    var url = 'https://classwork-api.azurewebsites.net/api/products/service'
    var json = ({
        title: title,
        description: description,
        "meta": {
            "keywords": keywords,
            "title": title,
        },
        thumbImage: image,
        bannerImage: image,
    })

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(json),
    })

    const data = await response.json()
    return res.status(200).json(data)
}