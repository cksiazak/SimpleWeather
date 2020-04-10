import fetch from 'isomorphic-unfetch';

export default async (req, res) => {

  try {
    const data = await fetch(
      `https://api.darksky.net/forecast/${process.env.DARKSKY}/37.8267,-122.4233`
    );
    const weather = await data.json();
    res.status(200).json(weather);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Something went wrong' });
  }
};
