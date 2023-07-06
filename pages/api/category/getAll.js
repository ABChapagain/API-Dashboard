export default async function handler(req, res) {

    await fetch('https://teamwork-backend.azurewebsites.net/api/categories')
        .then(response => response.json())
        .then(data => {
            var revdata = data.reverse()
            res.status(200).json(revdata)
        }
        )

}