export async function getData(param) {
  const url = `https://opentdb.com/api.php?amount=5&category=11&difficulty=${param}&type=multiple`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}
