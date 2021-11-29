import DevToArticleMeta from "interfaces/dev-to-article-meta";

export default interface DevToArticle extends DevToArticleMeta {
  body_html: string;
  body_markdown: string;
}