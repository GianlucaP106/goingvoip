
export default function handler(req, res) {
  const name = req.body.formFirstName;
  if (name) res.json({message: name, status: "successful"});
  else {
    res.json({message: "unsuccessful"})
  }
  
}
