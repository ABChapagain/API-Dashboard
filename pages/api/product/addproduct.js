export default async function handler(req, res) {
    const { title, description, price, image, category, keywords, subcategory } = req.body
    var url = 'https://classwork-api.azurewebsites.net/api/products/physical'
    var json = ({
        title: title,
        description: description,
        price: price,
        "variant": {
            "productImage": image
        },
        category: category,
        "meta": {
            "keywords": keywords
        },
        subCategory: subcategory
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