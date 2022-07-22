export default function handle(req, res) {

    if (req.method == "POST") {
        res.json({
            message: "successful"
        })
    }
    else {
        res.status(404).redirect("/");
    }
}