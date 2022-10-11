import queryString from "query-string";

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN; // https://www.google.com/search?q=how+create+bot+telegram
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID; // https://www.google.com/search?q=how+to+get+chat+id+telegram
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_TOKEN}`;

type TelegramAPIMethod = "sendMessage";

const createAPIUrl = (
  method: TelegramAPIMethod,
  params: Record<string, unknown>,
) => {
  return `${TELEGRAM_API_URL}/${method}?${queryString.stringify(params)}`;
};

export const botSendMessage = async (message: string) => {
  const url = createAPIUrl("sendMessage", {
    chat_id: TELEGRAM_CHAT_ID,
    text: message,
    parse_mode: "Markdown",
    disable_web_page_preview: true,
  });

  await fetch(url);
};
