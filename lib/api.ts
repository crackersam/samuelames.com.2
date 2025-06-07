const API_URL = process.env.STRAPI_API_URL;

const HEADERS = {
  Authorization: `bearer ${process.env.STRAPI_API_TOKEN}`,
  "Content-Type": "application/json",
};
export const getHeroText = async () => {
  const res = await fetch(`${API_URL}/hero-text`, {
    headers: HEADERS,
  });
  if (!res.ok) {
    console.error(`Fetch failed (${res.status}):`, API_URL);
    throw new Error(`Failed to fetch Hero Text (${res.status})`);
  }
  const data = await res.json();
  return data;
};
export const getTutacallText = async () => {
  const res = await fetch(`${API_URL}/tutacall?populate=*`, {
    headers: HEADERS,
  });
  if (!res.ok) {
    console.error(`Fetch failed (${res.status}):`, API_URL);
    throw new Error(`Failed to fetch Tutacall Text (${res.status})`);
  }
  const data = await res.json();

  return data;
};
export const getLecturetheplanetText = async () => {
  const res = await fetch(`${API_URL}/lecturetheplanet?populate=*`, {
    headers: HEADERS,
  });
  if (!res.ok) {
    console.error(`Fetch failed (${res.status}):`, API_URL);
    throw new Error(`Failed to fetch Lecture the Planet Text (${res.status})`);
  }
  const data = await res.json();
  return data;
};
export const getAiInterviewCoachText = async () => {
  const res = await fetch(`${API_URL}/ai-interview-coach?populate=*`, {
    headers: HEADERS,
  });
  if (!res.ok) {
    console.error(`Fetch failed (${res.status}):`, API_URL);
    throw new Error(`Failed to fetch Lecture the Planet Text (${res.status})`);
  }
  const data = await res.json();
  return data;
};
