# Telegram Bot for Gitlab Webhook 🦉

![telegram-preview](https://user-images.githubusercontent.com/78015359/195029039-db35bf7f-df6d-4006-b619-386c419a90ff.png)

> **Note**
>
> This project is still in development. Just relax 🙂

This is a bot for Telegram that can be used to receive [webhook](https://docs.gitlab.com/ee/user/project/integrations/webhook_events.html#push-events) notifications from Gitlab. It is built with the Next.js API.

## Webhook Events

The bot supports the following [webhook events](https://docs.gitlab.com/ee/user/project/integrations/webhook_events.html#push-events):

- [x] [Push event](/handler/push/)
- [ ] Tag event
- [x] [Issue event](/handler/issue/)
- [x] [Comment event](/handler/note/)
- [x] [Merge request event](/handler/merge-request/)
- [ ] Wiki page event
- [ ] Pipeline event
- [ ] Job event
- [ ] Deployment event
- [ ] Group member event
- [ ] Subgroup event
- [ ] Feature flag event
- [ ] Release event

## Folder Structure

```bash
├── README.md
├── pages
│   ├── api
│   │   └── gitlab # Gitlab webhook receiver
├── handler
│   ├── index.ts # Handler index
│   ├── [event] # Event handler
│   │   ├── index.ts # Handler
│   │   └── types.ts # Types
├── .env.example # Environment variables
```

> Change the `.env.example` file to `.env` and fill in the variables.
