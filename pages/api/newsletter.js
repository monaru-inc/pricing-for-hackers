const postToZapier = async (name, email) => {
  const res = await fetch(
    "https://hooks.zapier.com/hooks/catch/6111089/b2xo0aq/",
    {
      method: "POST",
      body: JSON.stringify({ name, email }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function handler(req, res) {
  const { name, email } = req.body;

  const zapierResponse = postToZapier(name, email);
  console.log(zapierResponse);

  res.status(200).json({
    status: 200,
    message: `Thanks for subscribing ${name} (${email}), We'll be in touch!`,
  });
}
