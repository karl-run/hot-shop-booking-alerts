const SLACK_HOOK = Deno.env.get("SLACK_HOOK");

export async function postToSlack(lines: string[]) {
  if (!SLACK_HOOK) {
    console.error("No SLACK_HOOK set");
    Deno.exit(1);
  }

  const slackResult = await fetch(SLACK_HOOK, {
    method: "POST",
    body: JSON.stringify(slackBody(lines)),
  });

  if (slackResult.ok) {
    return true;
  } else {
    console.error(await slackResult.text());
    return false;
  }
}

function slackBody(lines: string[]) {
  return {
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "<!channel>",
        },
      },
      {
        type: "header",
        text: {
          type: "plain_text",
          text: `:hotdog: Nye bookinger tilgjengelig for Hot Shop! :hotdog:`,
          emoji: true,
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: lines.join("\n"),
        },
      },
      {
        type: "divider",
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text:
            "Gå til booking: https://hotshop.superbexperience.com/reserve/guests",
        },
      },
    ],
  };
}
