import DevToArticle from "interfaces/dev-to-article";
import DevToArticleMeta from "interfaces/dev-to-article-meta";
import superagent from "superagent";

// setup API endpoints and queries
const DEV_TO_USERNAME = "muckitymuck"; // swap this for your username
const ARTICLES_API = "https://dev.to/api/articles";

// helper method to type responses
const parseResponse = <T>(response: any): T =>
  (typeof response === "string" ? JSON.parse(response) : response) as T;

const fetchArticles = async () => {
  // GET the endpoint
  const response = await superagent.get(ARTICLES_API)
          // and add the username query parameter
          .query({ username: DEV_TO_USERNAME });
  return parseResponse(response.body);
};

const getArticle = async (slug: string) => {
  // build the API endpoint URL, `slug` is the `slug`
  //property of one of your articles,
  // e.g. "protecting-your-privacy-online-3bmc"
  const endpoint = `${ARTICLES_API}/${DEV_TO_USERNAME}/${slug}`;
  const response = await superagent.get(endpoint);
  return parseResponse<DevToArticle>(response.body);
};

export const DevToService = {
  fetchArticles,
  getArticle,
};