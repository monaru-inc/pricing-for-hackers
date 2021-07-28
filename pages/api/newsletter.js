export default function handler(req, res) {
  const { name, email } = req.body;

  res.status(200).json({
    status: 200,
    message: `Thanks for subscribing ${name} (${email}), We'll be in touch! `,
  });
}
