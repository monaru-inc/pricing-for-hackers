export default function handler(req, res) {
  const { name, email } = req.body;

  fetch("https://hooks.zapier.com/hooks/catch/6111089/b2xo0aq/", {
    method: "POST",
    body: JSON.stringify({ name, email }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  res.status(200).json({
    status: 200,
    message: `Thanks for subscribing ${name} (${email}), We'll be in touch!`,
  });
}
