export default async function handler(req, res) {

    var { title, description, thumbImage, bannerImage, parentCategory, keywords } = req.body

    if (parentCategory == '') {
        parentCategory = null
    }

    var data = {
        title: title,
        description: description,
        thumbImage: thumbImage,
        bannerImage: bannerImage,
        parentCategory: parentCategory,
        meta: {
            keywords: keywords,
            title: title,
        }
    }
    var url = 'https://teamwork-backend.azurewebsites.net/api/categories'
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    const newData = await response.json()

    return res.status(200).json(newData)

}
