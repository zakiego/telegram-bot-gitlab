# Telegram Bot for Gitlab Webhook

> **Note**
>
> This project is still in development. Just relax 🙂

This is a bot for Telegram that can be used to receive [webhook](https://docs.gitlab.com/ee/user/project/integrations/webhook_events.html#push-events) notifications from Gitlab. It is built with the Next.js API.

## Webhook Events

The bot supports the following [webhook events](https://docs.gitlab.com/ee/user/project/integrations/webhook_events.html#push-events):

- [x] [Push event](/utils/gitlab/push.ts)
- [ ] Tag event
- [ ] Issue event
- [ ] Comment event
- [ ] Merge request event
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
├── utils
│   ├── gitlab
│   │   ├── [event].ts # Event handler
│   │   ├── index.ts
│   ├── telegram.ts # Telegram bot
├── .env.example # Environment variables
```

> Change the `.env.example` file to `.env` and fill in the variables.
