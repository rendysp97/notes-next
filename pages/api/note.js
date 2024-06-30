export default async function apiNote(req, res) {
  let { method } = req;

  let { title, description } = req.body;

  switch (method) {
    case "POST":
      try {
        const response = await fetch(
          "https://service.pace-unv.cloud/api/notes",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ title, description }),
          }
        );

        const result = await response.json();

        res.status(200).json(result);

        break;
      } catch (err) {
        console.log(err.message);
      }

    default:
      "Undefined";
  }
}
